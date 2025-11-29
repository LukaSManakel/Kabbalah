import { GoogleGenAI, Type } from "@google/genai";
import { AngelResponse } from "../types";
import { findAngelByDate, getAngelPeriod } from "./angelData";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const schema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING },
    choir: { type: Type.STRING, description: "Coro (Serafim, Querubim, etc)" },
    regent: { type: Type.STRING },
    period: { type: Type.STRING },
    essence: { type: Type.STRING },
    psalm: { type: Type.STRING },
    qualities: { type: Type.ARRAY, items: { type: Type.STRING } },
    shadows: { type: Type.ARRAY, items: { type: Type.STRING } },
    personality: { type: Type.STRING },
    domains: { type: Type.ARRAY, items: { type: Type.STRING } },
    schedule: { type: Type.STRING, description: "e.g., 00h00 às 00h20" },
    elements: { type: Type.STRING, description: "Cores, incensos, velas" },
    gemstone: { type: Type.STRING, description: "Pedra ou cristal associado (ex: Ametista, Âmbar, Quartzo Rosa)" },
    invocation: { type: Type.STRING },
    message: { type: Type.STRING, description: "Mensagem canalizada personalizada para o usuário" }
  },
  required: ["name", "choir", "regent", "period", "essence", "psalm", "qualities", "shadows", "personality", "domains", "schedule", "elements", "gemstone", "invocation", "message"]
};

export const fetchAngelDetails = async (birthDate: Date): Promise<AngelResponse> => {
  const formattedDate = birthDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
  
  // Passo CRUCIAL: Identificar o anjo via tabela estática para garantir precisão absoluta.
  // Evita alucinações de data da IA.
  const identifiedAngel = findAngelByDate(birthDate);

  if (!identifiedAngel) {
    throw new Error("Data fora do calendário tradicional dos anjos.");
  }

  const periodStr = getAngelPeriod(identifiedAngel);
  
  const prompt = `
    Você é um especialista na Tradição dos 72 Anjos da Kabbalah.
    
    O usuário nasceu em: ${formattedDate}.
    Pela tabela tradicional de Lenain, o Anjo da Guarda correspondente é: ${identifiedAngel.name} (ID: ${identifiedAngel.id}).
    O Coro Angélico é: ${identifiedAngel.choir}.
    O Período Regente é: ${periodStr}.

    Por favor, gere os detalhes espirituais completos PARA ESTE ANJO ESPECÍFICO (${identifiedAngel.name}).
    Não altere o nome do anjo ou o coro. Mantenha os dados fiéis à tradição.
    
    Certifique-se de incluir a Pedra/Cristal (gemstone) corretamente associada a este anjo (ex: Manakel = Ametista, Harahel = Âmbar, etc).
    
    Retorne uma descrição mística e inspiradora no formato JSON solicitado.
    Assegure-se de que a mensagem final seja tocante e pessoal.
    A linguagem deve ser em Português do Brasil, respeitosa e elevada.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: schema,
        temperature: 0.7, 
      }
    });

    const text = response.text;
    if (!text) throw new Error("No content returned from Gemini");
    
    // Forçamos o nome e o coro corretos no objeto final, caso a IA tente ser "criativa"
    const parsed = JSON.parse(text) as AngelResponse;
    parsed.name = identifiedAngel.name;
    parsed.choir = identifiedAngel.choir;
    parsed.period = periodStr;

    return parsed;
  } catch (error) {
    console.error("Error fetching angel data:", error);
    throw error;
  }
};
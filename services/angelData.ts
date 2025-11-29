import { AngelBasic } from '../types';

// Dados baseados na tabela tradicional dos 72 Nomes (Lenain)
// Coros:
// 01-08: Serafins
// 09-16: Querubins
// 17-24: Tronos
// 25-32: Dominações
// 33-40: Potências
// 41-48: Virtudes
// 49-56: Principados
// 57-64: Arcanjos
// 65-72: Anjos

export const ANGELS_LIST: AngelBasic[] = [
  { id: 1, name: "Vehuiah", choir: "Serafins", startDay: 21, startMonth: 3, endDay: 25, endMonth: 3 },
  { id: 2, name: "Jeliel", choir: "Serafins", startDay: 26, startMonth: 3, endDay: 30, endMonth: 3 },
  { id: 3, name: "Sitael", choir: "Serafins", startDay: 31, startMonth: 3, endDay: 4, endMonth: 4 },
  { id: 4, name: "Elemiah", choir: "Serafins", startDay: 5, startMonth: 4, endDay: 9, endMonth: 4 },
  { id: 5, name: "Mahasiah", choir: "Serafins", startDay: 10, startMonth: 4, endDay: 14, endMonth: 4 },
  { id: 6, name: "Lelahel", choir: "Serafins", startDay: 15, startMonth: 4, endDay: 20, endMonth: 4 },
  { id: 7, name: "Achaiah", choir: "Serafins", startDay: 21, startMonth: 4, endDay: 25, endMonth: 4 },
  { id: 8, name: "Cahetel", choir: "Serafins", startDay: 26, startMonth: 4, endDay: 30, endMonth: 4 },
  
  { id: 9, name: "Haziel", choir: "Querubins", startDay: 1, startMonth: 5, endDay: 5, endMonth: 5 },
  { id: 10, name: "Aladiah", choir: "Querubins", startDay: 6, startMonth: 5, endDay: 10, endMonth: 5 },
  { id: 11, name: "Laoviah", choir: "Querubins", startDay: 11, startMonth: 5, endDay: 15, endMonth: 5 },
  { id: 12, name: "Hahahiah", choir: "Querubins", startDay: 16, startMonth: 5, endDay: 20, endMonth: 5 },
  { id: 13, name: "Yesalel", choir: "Querubins", startDay: 21, startMonth: 5, endDay: 25, endMonth: 5 },
  { id: 14, name: "Mebahel", choir: "Querubins", startDay: 26, startMonth: 5, endDay: 31, endMonth: 5 },
  { id: 15, name: "Hariel", choir: "Querubins", startDay: 1, startMonth: 6, endDay: 5, endMonth: 6 },
  { id: 16, name: "Hakamiah", choir: "Querubins", startDay: 6, startMonth: 6, endDay: 10, endMonth: 6 },

  { id: 17, name: "Lauviah", choir: "Tronos", startDay: 11, startMonth: 6, endDay: 15, endMonth: 6 },
  { id: 18, name: "Caliel", choir: "Tronos", startDay: 16, startMonth: 6, endDay: 21, endMonth: 6 },
  { id: 19, name: "Leuviah", choir: "Tronos", startDay: 22, startMonth: 6, endDay: 26, endMonth: 6 },
  { id: 20, name: "Pahaliah", choir: "Tronos", startDay: 27, startMonth: 6, endDay: 1, endMonth: 7 },
  { id: 21, name: "Nelchael", choir: "Tronos", startDay: 2, startMonth: 7, endDay: 6, endMonth: 7 },
  { id: 22, name: "Yeiayel", choir: "Tronos", startDay: 7, startMonth: 7, endDay: 11, endMonth: 7 },
  { id: 23, name: "Melahel", choir: "Tronos", startDay: 12, startMonth: 7, endDay: 16, endMonth: 7 },
  { id: 24, name: "Haheuiah", choir: "Tronos", startDay: 17, startMonth: 7, endDay: 22, endMonth: 7 },

  { id: 25, name: "Nith-Haiah", choir: "Dominações", startDay: 23, startMonth: 7, endDay: 27, endMonth: 7 },
  { id: 26, name: "Haaiah", choir: "Dominações", startDay: 28, startMonth: 7, endDay: 1, endMonth: 8 },
  { id: 27, name: "Yerathel", choir: "Dominações", startDay: 2, startMonth: 8, endDay: 6, endMonth: 8 },
  { id: 28, name: "Seheiah", choir: "Dominações", startDay: 7, startMonth: 8, endDay: 12, endMonth: 8 },
  { id: 29, name: "Reiyel", choir: "Dominações", startDay: 13, startMonth: 8, endDay: 17, endMonth: 8 },
  { id: 30, name: "Omael", choir: "Dominações", startDay: 18, startMonth: 8, endDay: 22, endMonth: 8 },
  { id: 31, name: "Lecabel", choir: "Dominações", startDay: 23, startMonth: 8, endDay: 28, endMonth: 8 },
  { id: 32, name: "Vasariah", choir: "Dominações", startDay: 29, startMonth: 8, endDay: 2, endMonth: 9 },

  { id: 33, name: "Yehuiah", choir: "Potências", startDay: 3, startMonth: 9, endDay: 7, endMonth: 9 },
  { id: 34, name: "Lehahiah", choir: "Potências", startDay: 8, startMonth: 9, endDay: 12, endMonth: 9 },
  { id: 35, name: "Chavakiah", choir: "Potências", startDay: 13, startMonth: 9, endDay: 17, endMonth: 9 },
  { id: 36, name: "Menadel", choir: "Potências", startDay: 18, startMonth: 9, endDay: 23, endMonth: 9 },
  { id: 37, name: "Aniel", choir: "Potências", startDay: 24, startMonth: 9, endDay: 28, endMonth: 9 },
  { id: 38, name: "Haamiah", choir: "Potências", startDay: 29, startMonth: 9, endDay: 3, endMonth: 10 },
  { id: 39, name: "Rehael", choir: "Potências", startDay: 4, startMonth: 10, endDay: 8, endMonth: 10 },
  { id: 40, name: "Ieiazel", choir: "Potências", startDay: 9, startMonth: 10, endDay: 13, endMonth: 10 },

  { id: 41, name: "Hahael", choir: "Virtudes", startDay: 14, startMonth: 10, endDay: 18, endMonth: 10 },
  { id: 42, name: "Mikael", choir: "Virtudes", startDay: 19, startMonth: 10, endDay: 23, endMonth: 10 },
  { id: 43, name: "Veuliah", choir: "Virtudes", startDay: 24, startMonth: 10, endDay: 28, endMonth: 10 },
  { id: 44, name: "Yelaiah", choir: "Virtudes", startDay: 29, startMonth: 10, endDay: 2, endMonth: 11 },
  { id: 45, name: "Sehaliah", choir: "Virtudes", startDay: 3, startMonth: 11, endDay: 7, endMonth: 11 },
  { id: 46, name: "Ariel", choir: "Virtudes", startDay: 8, startMonth: 11, endDay: 12, endMonth: 11 },
  { id: 47, name: "Asaliah", choir: "Virtudes", startDay: 13, startMonth: 11, endDay: 17, endMonth: 11 },
  { id: 48, name: "Mihael", choir: "Virtudes", startDay: 18, startMonth: 11, endDay: 22, endMonth: 11 },

  { id: 49, name: "Vehuel", choir: "Principados", startDay: 23, startMonth: 11, endDay: 27, endMonth: 11 },
  { id: 50, name: "Daniel", choir: "Principados", startDay: 28, startMonth: 11, endDay: 2, endMonth: 12 },
  { id: 51, name: "Hahasiah", choir: "Principados", startDay: 3, startMonth: 12, endDay: 7, endMonth: 12 },
  { id: 52, name: "Imamiah", choir: "Principados", startDay: 8, startMonth: 12, endDay: 12, endMonth: 12 },
  { id: 53, name: "Nanael", choir: "Principados", startDay: 13, startMonth: 12, endDay: 16, endMonth: 12 },
  { id: 54, name: "Nithael", choir: "Principados", startDay: 17, startMonth: 12, endDay: 21, endMonth: 12 },
  { id: 55, name: "Mebahiah", choir: "Principados", startDay: 22, startMonth: 12, endDay: 26, endMonth: 12 },
  { id: 56, name: "Poyel", choir: "Principados", startDay: 27, startMonth: 12, endDay: 31, endMonth: 12 },

  { id: 57, name: "Nemamiah", choir: "Arcanjos", startDay: 1, startMonth: 1, endDay: 5, endMonth: 1 },
  { id: 58, name: "Yeialel", choir: "Arcanjos", startDay: 6, startMonth: 1, endDay: 10, endMonth: 1 },
  { id: 59, name: "Harahel", choir: "Arcanjos", startDay: 11, startMonth: 1, endDay: 15, endMonth: 1 },
  { id: 60, name: "Mitzrael", choir: "Arcanjos", startDay: 16, startMonth: 1, endDay: 20, endMonth: 1 },
  { id: 61, name: "Umabel", choir: "Arcanjos", startDay: 21, startMonth: 1, endDay: 25, endMonth: 1 },
  { id: 62, name: "Iah-Hel", choir: "Arcanjos", startDay: 26, startMonth: 1, endDay: 30, endMonth: 1 },
  { id: 63, name: "Anauel", choir: "Arcanjos", startDay: 31, startMonth: 1, endDay: 4, endMonth: 2 },
  { id: 64, name: "Mehiel", choir: "Arcanjos", startDay: 5, startMonth: 2, endDay: 9, endMonth: 2 },

  { id: 65, name: "Damabiah", choir: "Anjos", startDay: 10, startMonth: 2, endDay: 14, endMonth: 2 },
  { id: 66, name: "Manakel", choir: "Anjos", startDay: 15, startMonth: 2, endDay: 19, endMonth: 2 },
  { id: 67, name: "Eyael", choir: "Anjos", startDay: 20, startMonth: 2, endDay: 24, endMonth: 2 },
  { id: 68, name: "Habuhiah", choir: "Anjos", startDay: 25, startMonth: 2, endDay: 29, endMonth: 2 }, // Cobre ano bissexto
  { id: 69, name: "Rochel", choir: "Anjos", startDay: 1, startMonth: 3, endDay: 5, endMonth: 3 },
  { id: 70, name: "Jabamiah", choir: "Anjos", startDay: 6, startMonth: 3, endDay: 10, endMonth: 3 },
  { id: 71, name: "Haiaiel", choir: "Anjos", startDay: 11, startMonth: 3, endDay: 15, endMonth: 3 },
  { id: 72, name: "Mumiah", choir: "Anjos", startDay: 16, startMonth: 3, endDay: 20, endMonth: 3 }
];

export const getMonthName = (month: number) => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  return months[month - 1];
};

export const getAngelPeriod = (angel: AngelBasic) => {
  return `${angel.startDay} ${getMonthName(angel.startMonth)} - ${angel.endDay} ${getMonthName(angel.endMonth)}`;
};

export const findAngelByDate = (date: Date): AngelBasic | undefined => {
  const day = date.getUTCDate();
  // Month is 0-indexed in JS Date, so we add 1 to match our data structure (1-12)
  const month = date.getUTCMonth() + 1;

  return ANGELS_LIST.find(angel => {
    // Normal case within same month
    if (angel.startMonth === angel.endMonth) {
      return month === angel.startMonth && day >= angel.startDay && day <= angel.endDay;
    }
    // Cross-month case (e.g., 31 Mar to 04 Apr)
    if (month === angel.startMonth) {
      return day >= angel.startDay;
    }
    if (month === angel.endMonth) {
      return day <= angel.endDay;
    }
    return false;
  });
};
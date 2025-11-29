export interface AngelResponse {
  name: string;
  choir: string;
  regent: string;
  period: string;
  essence: string;
  psalm: string;
  qualities: string[];
  shadows: string[];
  personality: string;
  domains: string[];
  schedule: string;
  elements: string;
  gemstone: string; // Nova propriedade para a Pedra/Cristal
  invocation: string;
  message: string;
}

export interface AngelBasic {
  id: number;
  name: string;
  choir: string;
  startDay: number;
  startMonth: number; // 1 = January, 12 = December
  endDay: number;
  endMonth: number;
}

export enum ViewState {
  HOME = 'HOME',
  RESULT = 'RESULT',
  LIST = 'LIST'
}
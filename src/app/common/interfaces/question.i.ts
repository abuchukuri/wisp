export interface IQuestion {
  question: string;
  correct: number;
  answers: { value: string | number; src: string }[];
}

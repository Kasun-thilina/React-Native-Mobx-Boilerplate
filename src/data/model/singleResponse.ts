export interface SingleResponse<T> {
  code: number;
  message: string;
  data: T;
}

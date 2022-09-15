export interface ArrayResponse<T> {
  code: number;
  message: string;
  data: T[];
}

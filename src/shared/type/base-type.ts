export interface IBase {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface IResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
export interface IError {
  title: string;
  status: number;
  detail: string;
  errors?: {
    [key: string]: string[];
  };
}

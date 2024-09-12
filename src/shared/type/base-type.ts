export interface IBase {
  id: number;
  createdAt: string;
  updateAt: string;
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

export type Response<T> = {
    code: string;
    data: T;
    message: string;
    path: string;
    time: number;
};

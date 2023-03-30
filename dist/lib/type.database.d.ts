export type MongodbBase = {
    _id: string;
    timeCreate: number;
    timeCreateString: string;
    timeUpdate: number;
    timeUpdateString: string;
};
export type Page = {
    page: number;
    pageSize: number;
    startTime: number;
    endTime: number;
};
export type PageRes<T> = {
    total: number;
    list: T[];
    group?: Record<string, number>;
};

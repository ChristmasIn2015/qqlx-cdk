/** 一个对象的值，如果是字符串，将会被去除空白内容 */
export declare function trimObject(incoming: Record<string | symbol, any>): void;
export declare function getMongodbBase(): {
    _id: string;
    timeCreate: number;
    timeCreateString: string;
    timeUpdate: number;
    timeUpdateString: string;
};
export declare function getChineseMoney(n: number): string;

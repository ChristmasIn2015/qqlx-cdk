/** 今天0点～今天午夜12点 */
export declare function getRangeDay(): {
    startTime: number;
    endTime: number;
};
/** 本周一0点～现在 */
export declare function getRangeWeek(): {
    startTime: number;
    endTime: number;
};
/** 本月1日0点～现在 */
export declare function getRangeMonth(): {
    startTime: number;
    endTime: number;
};
/** 本年1月1日0点～现在 */
export declare function getRangeYear(): {
    startTime: number;
    endTime: number;
};
/** 获取从A-B时间，共有多少天时秒 */
export declare function getTimeGap(big: number, small: number): string;
/** 获取标准时间字符串 */
export declare function getTime(mills: number): {
    mills: number;
    text: string;
    text_full: string;
};
/** 仅用于查看函数耗时 */
export declare function TimeLog(message: string): (target: Object | Function, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;

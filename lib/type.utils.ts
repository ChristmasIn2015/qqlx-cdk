/** 全项目通用：列表合计 */
export type Calculation<T> = {
    list: T[];
    pounds: number;
    count: number;
    amount: number;
};

export type EnumMapOption = {
    value: number;
    text: string;
    text_en?: string;
    tip?: string;
};

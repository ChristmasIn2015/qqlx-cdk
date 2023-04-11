/** 默认范围：第1页（限制20）今天0点～今天午夜12点 */
import { Page, PageRes } from "./type.database";
/** 默认本年0点～至今 */
export declare function getPage(size?: number): Page;
/** 默认本年0点～至今 */
export declare function getPageRes<T>(): Page & PageRes<T>;

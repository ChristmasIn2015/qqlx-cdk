/** 默认范围：第1页（限制20）今天0点～今天午夜12点 */
import { Page, PageRes } from "./type.database";
/** 获取分页基本参数 */
export declare function getPage<T>(): Page & PageRes<T>;

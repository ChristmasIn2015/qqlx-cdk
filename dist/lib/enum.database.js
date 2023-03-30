"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbSort = void 0;
var MongodbSort;
(function (MongodbSort) {
    /** 升序，从小到大 */
    MongodbSort[MongodbSort["ASC"] = 1] = "ASC";
    /** 降序，从大到小 */
    MongodbSort[MongodbSort["DES"] = -1] = "DES";
})(MongodbSort = exports.MongodbSort || (exports.MongodbSort = {}));

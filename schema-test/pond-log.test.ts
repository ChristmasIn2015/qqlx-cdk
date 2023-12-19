import { ENUM_POND_LOG } from "qqlx-core";
import { PondLogSchema } from "../schema/pond-log";

describe(`pond-log.test`, () => {
    it("valid", () => {
        const schema = new PondLogSchema();
        expect(schema.id).toBeUndefined();
        expect(schema.type).toBe(ENUM_POND_LOG.ALL);
    });
});
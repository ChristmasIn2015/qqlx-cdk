import { ENUM_STREAM_LOG } from "qqlx-core";
import { StreamLogSchema } from "../schema/stream-log";

describe(`pond-log.test`, () => {
    it("valid", () => {
        const schema = new StreamLogSchema();
        expect(schema.id).toBeUndefined();
        expect(schema.type).toBe(ENUM_STREAM_LOG.WARN);
        expect(schema.timeCreate?.length).toBeGreaterThan(0);
        expect(schema.timeUpdate?.length).toBeGreaterThan(0);
    });
});

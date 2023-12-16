import { ENUM_DRAFT_NODE_RELATION } from "qqlx-core";
import { DraftNodeSchema } from "./river-draft-node";

describe(`river-draft-node.test`, () => {
    it("valid", () => {
        const schema = new DraftNodeSchema();
        expect(schema.id).toBeUndefined();
    });
});

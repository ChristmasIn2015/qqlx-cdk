import { ENUM_DRAFT_NODE_RELATION } from "qqlx-core";
import { DraftNodeRelationSchema } from "./river-draft-node-relation";

describe(`river-draft-node-relation.test`, () => {
    it("valid", () => {
        const schema = new DraftNodeRelationSchema();
        expect(schema.id).toBeUndefined();
        expect(schema.relation).toBe(ENUM_DRAFT_NODE_RELATION.NONE);

        expect(schema.pNode).toBeUndefined();
        expect(schema.cNode).toBeUndefined();
    });
});

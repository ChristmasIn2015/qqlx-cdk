import { ViewStreamUserAccessGroup } from "../view/stream-user-access-group";
import { $request } from "../view/utils";
import { initialRequest } from './authorization';

declare global {
    var Authorization: string;
}

describe("ViewStreamUser", () => {

    beforeAll(() => initialRequest())

    it(
        "CURD",
        async () => {
            const $viewGroup = new ViewStreamUserAccessGroup();
            await $viewGroup.get();
            console.log($viewGroup.list)
        },
        1000 * 60
    );
});

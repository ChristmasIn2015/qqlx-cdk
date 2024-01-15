import { ViewStreamUserAccessGroup } from "../view/stream-user-access-group";
import { ViewStreamUserAccess } from "../view/stream-user-access";
import { $request } from "../view/utils";
import { initialRequest } from './authorization';

declare global {
    var Authorization: string;
}

describe("ViewStreamUserAccess", () => {

    beforeAll(() => initialRequest())

    it(
        "CURD",
        async () => {
            const $viewGroup = new ViewStreamUserAccessGroup();
            $viewGroup.initialSchema()
            await $viewGroup.post()
            await $viewGroup.get();
            for (const group of $viewGroup.list) {
                expect(group.timeCreate.length).toBeGreaterThan(0)
                expect(group.timeUpdate.length).toBeGreaterThan(0)
                expect(group.joinOwner?.uuid32.length).toBeGreaterThan(0)
                expect(Array.isArray(group.joinOwner?.joinWeChatList)).toBeTruthy()
                expect(Array.isArray(group.joinOwner?.joinTelecomList)).toBeTruthy()
                expect(Array.isArray(group.joinOwner?.joinEmailList)).toBeTruthy()
            }

            const group = $viewGroup.list[0]
            const $viewGroupAccess = new ViewStreamUserAccess();
            await $viewGroupAccess.post(group.id)
            await $viewGroupAccess.get(group.id);
            console.log($viewGroupAccess.list)
            for (const access of $viewGroupAccess.list) {
                expect(access.timeCreate.length).toBeGreaterThan(0)
                expect(access.timeUpdate.length).toBeGreaterThan(0)
                expect(access.joinOwner?.uuid32.length).toBeGreaterThan(0)
            }

        },
        1000 * 60
    );
});

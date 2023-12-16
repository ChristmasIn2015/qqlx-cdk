import { toBoolean, toString } from "./verify";

export class TransformerBoolean {
    private trans(mess: any) {
        const value = toBoolean(mess);
        return value;
    }

    to(mess: any): boolean {
        return this.trans(mess);
    }

    from(mess: any): boolean {
        return this.trans(mess);
    }
}

import { toString } from "./verify";

export class TransformerVarchar {
    private trans (mess: any) {
        return toString(mess);
    }

    to (mess: any): string {
        return this.trans(mess);
    }

    from (mess: any): string {
        return this.trans(mess);
    }
}
export class TransformerVarchar50 {
    private trans (mess: any) {
        return toString(mess).substring(0, 50);
    }

    to (mess: any): string {
        return this.trans(mess);
    }

    from (mess: any): string {
        return this.trans(mess);
    }
}
export class TransformerVarchar255 {
    private trans (mess: any) {
        return toString(mess).substring(0, 255);
    }

    to (mess: any): string {
        return this.trans(mess);
    }

    from (mess: any): string {
        return this.trans(mess);
    }
}

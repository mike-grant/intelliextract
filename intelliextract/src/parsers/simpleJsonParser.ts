import { BaseParser } from "./base.js";

export class SimpleJsonParser implements BaseParser {
    parse(data: string): string {
        return JSON.parse(data);
    }

}
import { BaseExtractor } from "./base.js";

export class SearchExtractor implements BaseExtractor {
    searchData: string[];
    constructor(searchData: string[]) {
        this.searchData = searchData;
    }
    generatePrompt(data: string): string {
        return `Your goal is to find data from the User Input which matches items in ItemsToSearch. Return ONLY a simple json string array with items that are found from ItemsToSearch\r\nItemsToSearch: ${JSON.stringify(this.searchData)}\r\n User Input:\r\n ${data}`;
    }
}
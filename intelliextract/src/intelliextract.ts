import { BaseLLM } from "langchain/llms";
import { BaseExtractor } from "./extractors/base.js";
import { BaseParser } from "./parsers/base.js";

export class IntelliExtract {
    llm: BaseLLM; // The language model to use
    extractor: BaseExtractor;
    parser: BaseParser;
    constructor(llm: BaseLLM, extractor: BaseExtractor, parser: BaseParser) {
        this.llm = llm;
        this.extractor = extractor;
        this.parser = parser;
    }

    async run(data: string) {
        // First we need to generate the prompt we're using
        let extraction = this.extractor.generatePrompt(data);
        let response = await this.llm.call(extraction);
        let output = this.parser.parse(response);
        return output;
    }
}
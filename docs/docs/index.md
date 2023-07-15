# IntelliExtract

IntelliExtract is a prototype that helps you extract structured data from text using LLMs using a variety of methods.

This project is in the very early stages and may change or break with no notice. If you end up using this in production, please let me know you're experiences.

## Getting Started

```bash
yarn add intelliextract
```

## Example (Searching Recipes)

```typescript
import {IntelliExtract} from "intelliextract/dist/intelliextract.js"
import {SearchExtractor} from "intelliextract/dist/extractors/extractor.js"
import {SimpleJsonParser} from "intelliextract/dist/parsers/simpleJsonParser.js"
import { OpenAI } from "langchain/llms/openai";

let searchData = [
  'nuts'
]

let query = `Ingredients
15g unsalted butter
2 tbsp caster sugar
50g whole pecans
3 ripe nectarines, stoned and cut into eighths lengthways
4 tbsp extra virgin olive oil, plus extra for brushing
2 tbsp balsamic vinegar
1 tsp honey
2 x 100g balls of burrata or vegetarian alternative
70g rocket
bunch of basil leaves, roughly torn
pinch of chilli flakes`;

let extractor = new SearchExtractor(searchData);
let parser = new SimpleJsonParser();
let llm = new OpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
  maxTokens: 1000,
  maxRetries: 5,
});
let intelliextract = new IntelliExtract(llm, extractor, parser);
let parsedOutput = await intelliextract.run(query)

console.log(parsedOutput);
```

## Additional Resources

More resources that might be helpful

- [Kor](https://eyurtsev.github.io/kor/): Kor is a "half-baked prototype" that helps with a similar problem (in python)
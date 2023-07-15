export interface BaseExtractor {
    generatePrompt(data: string): string;
}
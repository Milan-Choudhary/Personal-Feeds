import { articlePrompt, personalizationPrompt } from '../prompts/articlePrompt.js';

export async function generateArticle(title, topic, preferences) {
  const prompt = articlePrompt({ title, topic, tone: preferences.writingTone });
  const personalization = personalizationPrompt({ userPreferences: preferences });

  return `${prompt}\n\n${personalization}\n\n[Generated article content placeholder]`;
}

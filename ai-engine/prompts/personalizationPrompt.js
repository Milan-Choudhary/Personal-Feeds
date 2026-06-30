export const personalizationPrompt = ({ userPreferences }) => {
  return `Personalize the article for a user who prefers ${userPreferences.writingTone} writing and topics such as ${userPreferences.topics.join(', ')}.`;
};

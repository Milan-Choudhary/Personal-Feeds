export const articlePrompt = ({ title, topic, tone }) => {
  return `Write a detailed article about ${topic} with the title \"${title}\". Use a ${tone} tone and include practical examples.`;
};

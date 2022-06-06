export function shuffleArray(array: any[]) {
  return [...array].sort(() => Math.random() - .5);
}
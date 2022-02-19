/**
 * Met la première lettre de lachaîne de caractères en majuscule
 * 
 * @param {string} string Chaîne de caractère
 * @returns Chaîne de caractère avec la première lettre en majuscule
 */
export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
import convertSlug from "slugify";

/**
 * Met la première lettre de lachaîne de caractères en majuscule
 * 
 * @param {string} string Chaîne de caractère
 * @returns Chaîne de caractère avec la première lettre en majuscule
 */
export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Convertit une chaîne de caractères en slug
 * 
 * @param {string} string Caîne de caractère 
 * @returns Slug
 */
export const slugify = (string) => convertSlug(string, { lower: true });
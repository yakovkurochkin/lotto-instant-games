/** Converts a string to a URL slug by lowercasing and removing whitespace. */
export function toUrlSlug(text: string): string {
    return text.toLowerCase().replace(/\s/g, '');
}

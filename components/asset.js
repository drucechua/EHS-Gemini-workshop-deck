// Resolves a file in public/ against the deck's base URL, so images keep
// working when the deck is published under a subfolder (e.g. GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

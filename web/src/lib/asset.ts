/** Prefix public asset paths with Vite BASE_URL (works on GitHub Pages). */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

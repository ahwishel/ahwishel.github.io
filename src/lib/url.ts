// ---------------------------------------------------------------------------
// Base-aware internal links. On GitHub Pages a project site lives under
// /<repo>/, so every internal href must go through here instead of "/...".
// ---------------------------------------------------------------------------

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}

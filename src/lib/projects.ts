import { getCollection, type CollectionEntry } from 'astro:content';

// Newest year first, then by `order`, so a flagship project can lead its year.
export async function sortedProjects(): Promise<CollectionEntry<'projects'>[]> {
  return (await getCollection('projects')).sort(
    (a, b) => b.data.year.localeCompare(a.data.year) || a.data.order - b.data.order
  );
}

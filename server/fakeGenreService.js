export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471826", name: "Sci-Fi" },
  { _id: "5b21ca3eeb7f6fbccd471822", name: "Fantasy" },
  { _id: "5b21ca3eeb7f6fbccd471824", name: "Horror" },
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Business" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Technology" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Science" },
  { _id: "5b21ca3eeb7f6fbccd471828", name: "Biography" },
];

export function getGenres() {
  return genres.filter((g) => g);
}

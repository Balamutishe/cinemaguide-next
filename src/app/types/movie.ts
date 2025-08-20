import z from "zod";

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string(),
  language: z.string(),
  relaseYear: z.union([z.number(), z.undefined(), z.null()]),
  releaseDate: z.string(),
  genres: z.array(z.string()),
  plot: z.string(),
  runtime: z.number(),
  budget: z.union([z.string(), z.undefined(), z.null()]),
  revenue: z.union([z.string(), z.undefined(), z.null()]),
  homepage: z.string(),
  status: z.string(),
  posterUrl: z.string(),
  backdropUrl: z.union([z.string(), z.undefined(), z.null()]),
  trailerUrl: z.string(),
  trailerYoutubeId: z.union([z.string(), z.undefined(), z.null()]),
  tmdbRating: z.number(),
  searchL: z.string(),
  keywords: z.array(z.string()),
  countriesOfOrigin: z.array(z.string()),
  languages: z.array(z.string()),
  cast: z.array(z.string()),
  director: z.union([z.string(), z.undefined(), z.null()]),
  production: z.union([z.string(), z.undefined(), z.null()]),
  awardsSummary: z.union([z.string(), z.undefined(), z.null()]),
});

export type TMovie = z.infer<typeof MovieSchema>;
export const MovieListSchema = z.array(MovieSchema);
export type TMovieList = z.infer<typeof MovieListSchema>;

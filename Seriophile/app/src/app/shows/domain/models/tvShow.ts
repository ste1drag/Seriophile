import { Genre } from "./genres.enum";

export interface TvShow{
  id: number,
  name: string,
  genre: Genre,
  startDate: number,
  endDate?: number,
  rating?: number,
  imageSrc?: string,
  numberOfReviews: number,
  description: string,
  comments: Comment[]
}

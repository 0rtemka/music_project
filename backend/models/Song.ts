import { Artist } from "./Artist";

export interface Song {
  id?: number;
  title: string;
  cover?: string;
  release_date: Date;
  is_album: boolean;
  artists?: Artist[];
}

export interface Joke {
  category?: string;
  type?: string;
  setup?: string;
  flags?: Flag;
  delivery?: string;
  id?: number;
  error?: boolean;
}

export interface Flag {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
}

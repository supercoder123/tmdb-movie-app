export type Movie = {
	backdrop_path: string;
	genre_ids: Array<number>;
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

type CurrentMoviePage = {
	movies: Movie[];
	page: number;
	isLoading: boolean;
};

export type MoviesState = {
	now_playing: CurrentMoviePage;
	popular: CurrentMoviePage;
	upcoming: CurrentMoviePage;
	top_rated: CurrentMoviePage;
};

export type Configuration = {
	images: {
		base_url: string;
		secure_base_url: string;
		backdrop_sizes: Array<string>;
		logo_sizes: Array<string>;
		poster_sizes: Array<string>;
		profile_sizes: Array<string>;
		still_sizes: Array<string>;
	};
	isLoading: boolean;
};

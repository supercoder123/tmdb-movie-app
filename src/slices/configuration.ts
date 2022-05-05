import { Configuration } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Configuration = {
	images: {
		base_url: '',
		secure_base_url: '',
		backdrop_sizes: [],
		logo_sizes:[],
		poster_sizes: [],
		profile_sizes: [],
		still_sizes: [],
	},
	isLoading: false,
};

const configurationSlice = createSlice({
	name: 'configuration',
	initialState,
	reducers: {
		getConfiguration: (state) => {
			state.isLoading = true;
		},
		getConfigurationSuccess: (state, { payload }: PayloadAction<Configuration['images']>) => {
			state.images = payload;
			state.isLoading = false;
		},
	},
});

export const { getConfiguration, getConfigurationSuccess } =
  configurationSlice.actions;

const configurationReducer = configurationSlice.reducer;
export { configurationReducer };
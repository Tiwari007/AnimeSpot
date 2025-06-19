import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface Anime {
  title: string;
  image: string;
  description: string;
  sourceUrl: string;
}

interface AnimeState {
  animeList: Anime[];
  animeData: Anime[];
  animeMovies: Anime[];
  loading: boolean;
  error: string | null;
}

const initialState: AnimeState = {
  animeList: [],
  animeData: [],
  animeMovies: [],
  loading: false,
  error: null,
};

// Async thunks for API calls
export const fetchAnimeList = createAsyncThunk(
  'anime/fetchAnimeList',
  async () => {
    const response = await fetch('https://animespot-backend.onrender.com/anime/animelist');
    return response.json();
  }
);

export const fetchAnimeData = createAsyncThunk(
  'anime/fetchAnimeData',
  async () => {
    const response = await fetch('https://animespot-backend.onrender.com/anime/animedata');
    return response.json();
  }
);

export const fetchAnimeMovies = createAsyncThunk(
  'anime/fetchAnimeMovies',
  async () => {
    const response = await fetch('https://animespot-backend.onrender.com/anime/animemoviesdata');
    return response.json();
  }
);

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Anime List
    builder
      .addCase(fetchAnimeList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimeList.fulfilled, (state, action: PayloadAction<Anime[]>) => {
        state.loading = false;
        state.animeList = action.payload;
      })
      .addCase(fetchAnimeList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch anime list';
      })
    // Anime Data
      .addCase(fetchAnimeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimeData.fulfilled, (state, action: PayloadAction<Anime[]>) => {
        state.loading = false;
        state.animeData = action.payload;
      })
      .addCase(fetchAnimeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch anime data';
      })
    // Anime Movies
      .addCase(fetchAnimeMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimeMovies.fulfilled, (state, action: PayloadAction<Anime[]>) => {
        state.loading = false;
        state.animeMovies = action.payload;
      })
      .addCase(fetchAnimeMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch anime movies';
      });
  },
});

export const { clearError } = animeSlice.actions;
export default animeSlice.reducer;

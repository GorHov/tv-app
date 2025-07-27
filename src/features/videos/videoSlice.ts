import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import rawVideoData from '../../data/data.json';
import type { VideoType } from '../../types/VideoType';

interface State {
  videos: VideoType[];
  featured: VideoType | null;
}

const initialState: State = {
  videos: rawVideoData.TendingNow,
  featured: rawVideoData.Featured || null,
};

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setFeatured(state, action: PayloadAction<VideoType>) {
      state.featured = action.payload;
    },
  },
});

export const { setFeatured } = videoSlice.actions;
export default videoSlice.reducer;

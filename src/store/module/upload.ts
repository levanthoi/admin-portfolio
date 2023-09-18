import { createSlice } from '@reduxjs/toolkit';

const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    data: null,
  },
  reducers: {
    setImages(state, action) {
      console.log('action', action.payload);
      state.data = action.payload;
    },
  },
});

export const { setImages } = uploadSlice.actions;
export default uploadSlice.reducer;

import { createSlice, current } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState: { isDarkTheme: false, columnNum: 1 },
  reducers: {
    changeTheme: (state, action) => {
      state.isDarkTheme = !current(state).isDarkTheme;
    },
    changeListMode: (state, action) => {
      state.columnNum = current(state).columnNum === 1 ? 2 : 1;
    },
  },
});
export default settingsSlice.reducer;
export const { changeTheme, changeListMode } = settingsSlice.actions;

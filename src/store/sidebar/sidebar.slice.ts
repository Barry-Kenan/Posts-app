import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
	isOpened: boolean;
}

const initialState: SidebarState = {
	isOpened: true
};

export const SidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		setIsOpened(state, action) {
			state.isOpened = action.payload;
		}
	}
});

export const sidebarActions = SidebarSlice.actions;
export const sidebarReducer = SidebarSlice.reducer;

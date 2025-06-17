import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    achievements: [], // массив чисел
};

const achievementsSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {
        unlockAchievement: (state, action) => {
            const id = action.payload;
            if (!state.achievements.includes(id)) {
                state.achievements.push(id);
            }
        },
        resetAchievements: (state) => {
            state.achievements = [];
        },
    },
});

export const { unlockAchievement, resetAchievements } = achievementsSlice.actions;
export default achievementsSlice.reducer;

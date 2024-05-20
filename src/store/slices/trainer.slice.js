import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainer: (state, action) => action.payload //aqui estoy diciendo qe setTrainer actualiza el estado con el dato que escribe elusuario.

    }
})

export const { setTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;

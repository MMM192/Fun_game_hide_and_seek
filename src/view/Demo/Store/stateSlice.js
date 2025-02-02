import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'unitList/state',
    initialState: {
        deleteConfirmation: false,
        selectedUnit: '',
        newDialog: false,
    },
    reducers: {
        toggleDeleteConfirmation: (state, action) => {
            state.deleteConfirmation = action.payload
        },
        setSelectedUnit: (state, action) => {
            state.selectedUnit = action.payload
        },
        toggleNewDialog: (state, action) => {
            state.newDialog = action.payload
        },
    },
})

export const { toggleDeleteConfirmation, setSelectedUnit, toggleNewDialog } =
    stateSlice.actions

export default stateSlice.reducer
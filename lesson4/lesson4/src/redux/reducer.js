import {createAction, createReducer} from '@reduxjs/toolkit'

const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM'
const RESET_NUM = 'RESET_NUM'
const SET_TEXT = 'SET_TEXT'
const PLUS_FIVE = 'PLUS_FIVE'
const MINUS_FIVE = 'MINUS_FIVE'

const initialState = {
    num: 0,
    text: 'Hello World'
}

export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const plusFive = createAction(PLUS_FIVE)
export const minusFive = createAction(MINUS_FIVE)
export const resetNum = createAction(RESET_NUM);
export const setText = createAction(SET_TEXT)

export default createReducer(initialState, (builder) => {
    builder 
    .addCase(INCREMENT_NUM, (state, action) => {
        if (state.num < 15) {
            state.num = state.num + 1;
        } else {
            state.num = 15;
        }
    })
    .addCase(DECREMENT_NUM, (state) => {
        if (state.num > 0) {
            state.num = state.num - 1;
        } else {
            state.num = 0;
        }
    })
    .addCase(PLUS_FIVE, (state, action) => {
        if (state.num + 5 > 15) {
            state.num = 15;
        } else {
            state.num = state.num + 5;
        }
    })
    .addCase(MINUS_FIVE, (state) => {
        if (state.num - 5 < 0) {
            state.num = 0;
        } else {
            state.num = state.num - 5;
        }
    })    
    .addCase(RESET_NUM, (state) => {
        state.num = state.num = 0
    })
    .addCase(SET_TEXT, (state, action) => {
        state.text = action.payload
    })

})
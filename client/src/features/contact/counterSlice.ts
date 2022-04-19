/* Here we use React - Redux Toolkit */

import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    data: number;
    title: string;
}

//APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates,
//when we use Redux Toolkit, as wee see below

const initialState: CounterState = {
    data: 42,
    title: 'YARC (yet another redux counter with redux toolkit)'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
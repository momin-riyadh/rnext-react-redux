const {createSlice} = require("@reduxjs/toolkit");

const initialState = [
    {
        id: crypto.randomUUID(),
        value: 0
    },
    {
        id: crypto.randomUUID(),
        value: 0
    }
]


const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action) => {
                action.payload
        },
        decrement:(state, action) => {

        }
    }
});




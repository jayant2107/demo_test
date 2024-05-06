import { createSlice } from "@reduxjs/toolkit";


const classOption = [
    {
      label: "One off",
      value: 1,
    },
    {
      label: "Recurring",
      value: 2,
    },
  ];

const filterValueSlice = createSlice({
    name:'filterOptiondata',
    initialState:{},
    reducers:{
        filterOption:(state , action)=>{
            state.data = {...action.payload,class:classOption}
        },
    }
})

export const {filterOption} = filterValueSlice.actions
export default filterValueSlice.reducer
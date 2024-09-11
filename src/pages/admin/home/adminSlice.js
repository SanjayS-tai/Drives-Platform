import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    drivesData:[],
    error:''
}

const drivesSlice=createSlice({
    name:'admin',
    initialState,
    reducers:{
        addDatas(state,action){
            state.drivesData.push(action.payload);
            console.log(state.drivesData);
        }
    }
})

export const {actions,reducer}=drivesSlice;
export default reducer;

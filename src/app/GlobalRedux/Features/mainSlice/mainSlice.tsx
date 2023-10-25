import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Istate {
  isOpen:boolean,
}

const initialState:Istate = {
  isOpen: false,
}

interface IParam {
  email: string
  number: string
  message: string
}

export const checkUrl = createAsyncThunk(
  'post/checkUrl',
  async (param: IParam) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(param),
    }
    const response = await fetch(
      '',
      requestOptions
    )
    return response.json()
  }
)

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setIsOpen: (state, action:{payload:boolean}) => {
      state.isOpen = action.payload;
    }
  }
})

export default mainSlice.reducer;
export const { setIsOpen } = mainSlice.actions;
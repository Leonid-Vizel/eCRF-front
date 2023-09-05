import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../authSlice/authSlice';
import { axiosRequest } from '../../utils/request/NewAxiosRequest';

interface IJournalSlice {
  journal: any | null;
  selectedItem: any;
  selectedMethod: any;
  selectedType: any;
  status: Status;
}

const initialState: IJournalSlice = {
  journal: null,
  status: Status.Loading,
  selectedItem: null,
  selectedMethod: null,
  selectedType: null,
};

export const getJournals = createAsyncThunk(
  'journal/getJournal',
  async () => {
    const data = await axiosRequest.get('/journal/all');
    console.log(data);
    return data;
  },
);

const journalSlice = createSlice({
  name: 'journalSlice',
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    selectMethod: (state, action) => {
      state.selectedMethod = action.payload;
    },
    selectType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJournals.pending, (state: IJournalSlice) => {
        state.status = Status.Loading;
        state.journal = null;
      })
      .addCase(getJournals.rejected, (state: IJournalSlice) => {
        state.status = Status.Error;
        state.journal = null;
      })
      .addCase(getJournals.fulfilled, (state: IJournalSlice, action) => {
        state.status = Status.Success;
        state.journal = action.payload;
      });
  },
});

export const journalReducer = journalSlice.reducer;
export const { selectItem, selectMethod, selectType } = journalSlice.actions;

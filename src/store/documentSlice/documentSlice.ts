import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../authSlice/authSlice';
import { axiosCardRequest } from '../../utils/request/NewAxiosRequest';
import { FormDataItem } from '../../utils/types/documentType';

interface IDocumentSlice {
  mainDocument: FormDataItem | null;
  twelveData?: any;
  twentyData?: any;
  status: Status;
}

const initialState: IDocumentSlice = {
  mainDocument: null,
  twelveData: null,
  twentyData: null,
  status: Status.Loading,
};

export const createDocument = createAsyncThunk(
  'document/createDocument',
  async ({ documentData }: { documentData: any }) => {
    const { data } = await axiosCardRequest.post('/Card/Create', {
      documentData,
    });

    return data;
  },
);

export const getDocument = createAsyncThunk(
  'document/getDocument',
  async (id: string) => {
    const { data }: any = await axiosCardRequest.get(`/Card/Index/${id}`);

    return data;
  },
);

const documentSlice = createSlice({
  name: 'documentSlice',
  initialState,
  reducers: {
    allDataGet: (state, action) => {
      state.mainDocument = action.payload;
    },
    twelveDataGet: (state, action) => {
      state.twelveData = action.payload;
    },
    twentyDataGet: (state, action) => {
      state.twentyData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDocument.pending, (state: IDocumentSlice) => {
        state.status = Status.Loading;
        state.mainDocument = null;
      })
      .addCase(createDocument.rejected, (state: IDocumentSlice) => {
        state.mainDocument = null;
        state.status = Status.Error;
      })
      .addCase(
        createDocument.fulfilled,
        (state: IDocumentSlice, action) => {
          state.mainDocument = action.payload;
          state.status = Status.Success;
        },
      )
      .addCase(getDocument.pending, (state: IDocumentSlice) => {
        state.status = Status.Loading;
        state.mainDocument = null;
      })
      .addCase(getDocument.rejected, (state: IDocumentSlice) => {
        state.mainDocument = null;
        state.status = Status.Error;
      })
      .addCase(getDocument.fulfilled, (state: IDocumentSlice, action) => {
        state.mainDocument = action.payload;
        state.status = Status.Success;
      });
  },
});

export const documentReducer = documentSlice.reducer;
export const { allDataGet, twelveDataGet, twentyDataGet } = documentSlice.actions;

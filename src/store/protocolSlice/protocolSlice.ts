import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../authSlice/authSlice';
import { getCenters } from '../centerSlice/centerSlice';
import {
  axiosCardRequest,
  axiosRequest,
} from '../../utils/request/NewAxiosRequest';

interface IProtocolSlice {
  protocol: any | null;
  isValidate: any | null;
  status: Status;
}

const initialState: IProtocolSlice = {
  protocol: null,
  isValidate: null,
  status: Status.Loading,
};

interface GetProtocolsParams {
  filter: number;
  user_centerId: number;
}

interface ICenterId {
  centerID: number;
  name: string;
  status: number;
  number: number;
  id?: number;
}

export const getProtocols = createAsyncThunk(
  'protocol/getProtocol',
  async ({ filter, user_centerId }: GetProtocolsParams) => {
    const { data } = await axiosCardRequest.get(
      `/protocol/list?filter=${filter}&center=${user_centerId}`,
    );
    return data;
  },
);

export const deleteProtocols = createAsyncThunk(
  'protocol/deleteProtocol',
  async ({ id }: any) => {
    const { data } = await axiosCardRequest.delete(`/protocol/delete/${id}`);
    return data;
  },
);

export const addProtocols = createAsyncThunk(
  'protocol/addProtocol',
  async ({
    centerID, status, name, number,
  }: ICenterId) => {
    const { data } = await axiosCardRequest.post('/protocol/create', {
      centerId: centerID,
      status,
      name,
      number,
    });

    return data;
  },
);

export const editProtocols = createAsyncThunk(
  'protocol/editProtocol',
  async ({
    centerID, status, name, id, number,
  }: ICenterId) => {
    const { data } = await axiosCardRequest.patch('/protocol/edit', {
      centerID,
      status,
      name,
      id,
      number,
    });

    return data;
  },
);

const protocolSlice = createSlice({
  name: 'protocolSlice',
  initialState,
  reducers: {
    isValidatedColor: (state, action) => {
      state.isValidate = action.payload;
    },
    deleteProtocolSuccess: (state, action) => {
      const protocolId = action.payload;
      state.protocol = state.protocol.filter(
        (item) => item.protocolId !== protocolId,
      );
    },
    addProtocolSuccess: (state, action) => {
      const newProtocol = action.payload;
      state.protocol.push(newProtocol);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editProtocols.pending, (state: IProtocolSlice) => {
        state.status = Status.Loading;
      })
      .addCase(editProtocols.fulfilled, (state: IProtocolSlice, action) => {
        state.status = Status.Success;
      })
      .addCase(editProtocols.rejected, (state: IProtocolSlice) => {
        state.status = Status.Error;
      })
      .addCase(addProtocols.pending, (state: IProtocolSlice) => {
        state.status = Status.Loading;
      })
      .addCase(addProtocols.fulfilled, (state: IProtocolSlice, action) => {
        state.status = Status.Success;
      })
      .addCase(addProtocols.rejected, (state: IProtocolSlice) => {
        state.status = Status.Error;
      })
      .addCase(getProtocols.pending, (state: IProtocolSlice) => {
        state.status = Status.Loading;
        state.protocol = null;
      })
      .addCase(getProtocols.fulfilled, (state: IProtocolSlice, action) => {
        state.protocol = action.payload;
        state.status = Status.Success;
      })
      .addCase(getProtocols.rejected, (state: IProtocolSlice) => {
        state.status = Status.Error;
        state.protocol = null;
      })
      .addCase(deleteProtocols.pending, (state: IProtocolSlice) => {
        state.status = Status.Loading;
      })
      .addCase(deleteProtocols.fulfilled, (state: IProtocolSlice, action) => {
        state.status = Status.Success;
      })
      .addCase(deleteProtocols.rejected, (state: IProtocolSlice) => {
        state.status = Status.Error;
      });
  },
});

export const protocolReducer = protocolSlice.reducer;
export const { deleteProtocolSuccess, addProtocolSuccess, isValidatedColor } = protocolSlice.actions;

import { Status } from "../authSlice/authSlice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  axiosCardRequest,
  axiosRequest,
} from "../../utils/request/NewAxiosRequest";

interface ICenterSlice {
  data: any | null;
  status: Status;
}

const initialState: ICenterSlice = {
  data: null,
  status: Status.Loading,
};

interface ICenter {
  name: string;
  centerId: number;
}

export const getCenters = createAsyncThunk(
  "center/getCenter",
  async ({ id }: { id: number }) => {
    const { data } = await axiosCardRequest.get(`/center/name/${id}`);

    return data;
  },
);

export const getAllCenters = createAsyncThunk(
  "center/getAllCenters",
  async () => {
    const { data } = await axiosRequest.get(`/center/all`);

    return data;
  },
);

export const addCenter = createAsyncThunk(
  "center/addCenter",
  async ({ name }: Pick<ICenter, "name">) => {
    const { data } = await axiosRequest.post(`/center/add`, {
      name: name,
    });

    return data;
  },
);

export const deleteCenter = createAsyncThunk(
  "center/deleteCenter",
  async ({ centerId }: Pick<ICenter, "centerId">) => {
    const { data } = await axiosRequest.delete(`/center/delete`, {
      data: {
        center_id: centerId,
      },
    });

    return data;
  },
);

export const updateCenter = createAsyncThunk(
  "center/updateCenter",
  async ({ centerId, name }: ICenter) => {
    const { data } = await axiosRequest.patch(`/center/update`, {
      center_id: centerId,
      name: name,
    });

    return data;
  },
);

const centerSlice = createSlice({
  name: "centerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCenters.pending, (state: ICenterSlice) => {
        state.status = Status.Loading;
        state.data = null;
      })
      .addCase(getCenters.fulfilled, (state: ICenterSlice, action) => {
        state.data = action.payload;
        state.status = Status.Success;
      })
      .addCase(getCenters.rejected, (state: ICenterSlice) => {
        state.status = Status.Error;
        state.data = null;
      });
  },
});

export const centerReducer = centerSlice.reducer;

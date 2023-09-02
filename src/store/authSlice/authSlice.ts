import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  axiosCardRequest,
  axiosRequest,
} from "../../utils/request/NewAxiosRequest";
import { IUserRegister } from "../../utils/types/userType";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export enum Status {
  FirstLoading = "firstLoading",
  UpdateLoading = "updateLoading",
  Loading = "loading",
  Success = "success",
  Error = "error",
}

interface TokenPayload {
  centerId?: number;
  id?: number;
  name: string;
  role: any;
  password?: string;
  email: string;
  exp?: any;
}

interface IAuthSlice {
  data: IUserRegister | null;
  status: Status;
}

const initialState: IAuthSlice = {
  data: null,
  status: Status.Loading,
};

export const authLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ email, password }: { email: string; password: string }) => {
    const { data } = await axiosCardRequest.post("/user/login", {
      login: email,
      password,
    });
    const decodedToken = await jwt_decode<TokenPayload>(data);
    const { name, id, centerId, role } = await decodedToken;
    Cookies.set("token", data);
    Cookies.set("token_name", name);
    Cookies.set("token_id", id.toString());
    Cookies.set("token_centerId", centerId.toString());
    Cookies.set("token_role", role.toString());

    return data;
  },
);

export const getAllUser = createAsyncThunk("auth/getAll", async () => {
  const { data } = await axiosRequest.get("/user/all");

  return data;
});

export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async ({ id }: Pick<TokenPayload, "id">) => {
    const { data } = await axiosRequest.delete("/user/delete", {
      data: {
        id,
      },
    });

    return data;
  },
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({
    centerId,
    email,
    name,
    password,
    role,
  }: Omit<TokenPayload, "id" | "exp">) => {
    const { data } = await axiosRequest.post("/user/register", {
      center_id: centerId,
      email: email,
      name: name,
      password: password,
      role: role,
    });

    return data;
  },
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({
    centerId,
    email,
    name,
    password,
    role,
    id,
  }: Omit<TokenPayload, "exp">) => {
    const { data } = await axiosRequest.patch("/user/update", {
      center_id: centerId,
      email: email,
      name: name,
      password: password,
      role: role,
      id: id,
    });

    return data;
  },
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state: any) => {
      state.data = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state: IAuthSlice, action) => {
        state.status = Status.Loading;
        state.data = null;
      })
      .addCase(authLogin.fulfilled, (state: IAuthSlice, action) => {
        state.data = action.payload;
        state.status = Status.Success;
      })
      .addCase(authLogin.rejected, (state: IAuthSlice, action) => {
        state.status = Status.Error;
        state.data = null;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;

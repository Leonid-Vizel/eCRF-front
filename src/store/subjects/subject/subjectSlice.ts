import { createAsyncThunk } from '@reduxjs/toolkit';
import { Status } from '../../authSlice/authSlice';
import { axiosRequest } from '../../../utils/request/NewAxiosRequest';

interface ISubjectSlice {
  subject: any,
  status: Status
}

const initialState: ISubjectSlice = {
  subject: null,
  status: Status.Loading,
};

interface ISubject {
  centerId: number,
  initials: string,
  number: string,
  protocolId: number
}

export const addSubject = createAsyncThunk(
  'subject/addSubject',
  async ({
    centerId, initials, number, protocolId,
  }: ISubject) => {
    const { data } = await axiosRequest.post('/subject/add', {
      center_id: centerId,
      initials,
      number,
      protocol_id: protocolId,
    });

    return data;
  },
);

export const getSubject = createAsyncThunk(
  'subject/getSubject',
  async ({ protocolId }: Pick<ISubject, 'protocolId'>) => {
    const { data } = await axiosRequest.get(`/subject/${protocolId}`);

    return data;
  },
);

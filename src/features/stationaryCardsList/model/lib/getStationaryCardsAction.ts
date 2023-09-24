import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStationaryCards = createAsyncThunk(
  'stationaryCards/getStationaryCards',
  async () => {
    const data = [
      {
        id: 1,
        createDate: '11/01/21',
        firstName: 'Mock',
        secondName: 'Mock',
        thirdName: 'Mock',
        birthDate: '11/11/11',
        snils: '1234321',
        protocolId: '1',

      },
    ];
    // const { data } = await getCardList(requestData);

    return data;
  },
);

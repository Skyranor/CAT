import rtkApi from '@/shared/api/rtkApi';

interface CurrencyResponse {
  id: string;
  name: string;
}

const currencyApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrencyList: builder.query<CurrencyResponse[], void>({
      query: () => 'currencies',
      transformResponse: (response: { data: CurrencyResponse[] }) =>
        response.data,
    }),
  }),
});

export const { useGetCurrencyListQuery } = currencyApi;

import Select from 'react-select';
import { useEffect, useMemo, useState } from 'react';

import { useGetCurrencyListQuery } from '../api/currencyApi';
import { CurrencyRow } from '@/entities/Currency';

interface CurrencyOption {
  label: string;
  value: string;
}

interface CurrencySelectProps {
  className?: string;
}

export function CurrencySelect({ className }: CurrencySelectProps) {
  const { data: currencies, isSuccess } = useGetCurrencyListQuery();

  const options = useMemo(
    () =>
      currencies?.map((currency) => ({
        label: currency.id,
        value: currency.name,
      })) ?? [],
    [currencies]
  );

  const [selectedCurrency, setSelectedCurrency] =
    useState<CurrencyOption | null>(null);

  useEffect(() => {
    setSelectedCurrency(options[0]);
  }, [options]);

  return (
    <>
      <Select
        className={className}
        options={options}
        value={selectedCurrency}
        onChange={(item) => setSelectedCurrency(item)}
        isSearchable
        maxMenuHeight={170}
      />
      {isSuccess && <CurrencyRow title={selectedCurrency?.value || ''} />}
    </>
  );
}

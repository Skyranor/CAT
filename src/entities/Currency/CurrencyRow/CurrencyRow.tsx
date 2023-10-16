import clsx from 'clsx';

import cl from './CurrencyRow.module.scss';

interface CurrencyRowProps {
  className?: string;
  title: string;
}

export function CurrencyRow({ className = '', title }: CurrencyRowProps) {
  return <p className={clsx(cl.title, className)}>{title}</p>;
}

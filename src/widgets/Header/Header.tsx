import clsx from 'clsx';

import cl from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={clsx(cl.header, className)}>
      <div className={cl.logoBlock}>
        <span className={cl.logoTitle}>CAT</span>
        <span className={cl.logoDescription}>currencies academic terms</span>
      </div>
    </header>
  );
}

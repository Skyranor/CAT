import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import cl from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
}

export function MainLayout(props: MainLayoutProps) {
  const { className } = props;

  return (
    <div className={clsx(cl.MainLayout, className)}>
      <Header />
      <Outlet />
    </div>
  );
}

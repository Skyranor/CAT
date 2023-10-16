import cl from './MainPage.module.scss';
import { CurrencySelect } from '@/features/Currency';

function MainPage() {
  return (
    <main className={cl.mainPage}>
      <CurrencySelect className={cl.select} />
    </main>
  );
}

export default MainPage;

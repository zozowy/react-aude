
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.scss';

import { Outlet, useLoaderData } from 'react-router';
import { Suspense } from 'react';
//import { seedRecipes } from './data/seed';
import AuthProvider from './components/AuthProvider/AuthProvider';

//function pour ajouter des data dans restapi a utiliser 2-3 fois à l'ouverture dy projet
//seedRecipes();
function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <Header  />
          <div className='flex-fill d-flex flex-column'>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;

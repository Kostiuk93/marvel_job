import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner,';

// динамические импорты должны вызываться после статических
// динамические импорты (ленивая загрузка) необходимо использовать только для больших элементров.
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                   <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="/comics" element={<ComicsPage/>} />
                        <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comics'/>}/>
                        <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
                        <Route path='*'  element={<Page404/>}/>
                    </Routes>
                   </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;

// import '../../style/app.scss';
// import CustomForm from '../forms/Form';

// function App() {
//   return (
//     <div className="app">
//         <CustomForm/>
//     </div>
//   );
// }

// export default App;

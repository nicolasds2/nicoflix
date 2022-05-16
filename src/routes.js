import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Header from './components/Header';
import Error from './pages/Error';
import Favorite from './pages/Favorite';
function RoutesApp () {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Movie/:id' element={<Movie/>}/>
                <Route path='/Favorite' element={<Favorite/>}/>
                <Route path='*' element={<Error/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;
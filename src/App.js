import { Route, Routes } from 'react-router-dom';
import Home from '././pages/Home'
import './App.css'
import Movies from '././pages/Movies'
import MovieDetail from '././pages/MovieDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;

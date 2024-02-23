import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MainPage from './pages/MainPage/MainPage';
 
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<MainPage/>}>
          <Route index element={<Home />} />
      </Route>
    </Routes>
  </div>
  );
}
 
export default App;
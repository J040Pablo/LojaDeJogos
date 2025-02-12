import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path='*' element={<Navigate to="/login" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
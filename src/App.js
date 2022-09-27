import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsFeed from './pages/NewsFeed/NewsFeed';
import AccountPage from './pages/AccountPage/AccountPage';
import {BrowserRouter, Route , Routes,} from 'react-router-dom';
import Signup from './components/Signup/Signup'
import LoginPage from './pages/LoginPage/LoginPage'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<NewsFeed />} />
        <Route path="/account" element={<AccountPage/>}/>
        {/* <Route path="/upload" element={<Upload />} /> */}

      </Routes>
      </BrowserRouter>
      <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;

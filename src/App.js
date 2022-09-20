import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsFeed from './pages/NewsFeed/NewsFeed';
import AccountPage from './pages/AccountPage/AccountPage';
import {BrowserRouter, Route , Routes,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
        <Route path="/account" element={<AccountPage/>}/>
        {/* <Route path="/upload" element={<Upload />} /> */}
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

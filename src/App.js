import './App.css'
import './Global.css'
import './Media.css'
import './Typography.css'
import './Shadow.css'
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';
import Main from './components/pages/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

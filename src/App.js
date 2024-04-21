import './App.css';
import './css/bootstrap.min.css';
import './css/elegant-icons.css';
import './css/font-awesome.min.css';
import './css/jquery-ui.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';
import './css/custom-css.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;

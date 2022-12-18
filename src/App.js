import 'swiper/swiper.min.css';
import './view/assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './view/components/header/Header';
import Footer from './view/components/footer/Footer';

import Routes from './controller/config/Routes';

function App() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <Routes/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;

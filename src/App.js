import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import './styles/global.css';
import './styles/Home.css';

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App;
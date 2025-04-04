import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Search } from './components/Search';
import { Footer } from './components/Footer';   
import { Add } from './components/Add';
import { Listado } from './components/List';
import './index.css';

function App() {
  return (
    <div className="layout">
        <Header />
        <Nav />

        <section className="content">
            <Listado />
        </section>

        <aside className="lateral">
            <Search />
            <Add />
        </aside>
        <Footer />
    </div>
  );
}

export default App;

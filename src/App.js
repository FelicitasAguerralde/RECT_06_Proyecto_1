import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Create } from "./components/Create";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import "./css/index.css";
import { Contact } from "./components/Contact";

function App() {
  const [listState, setListState] = useState([]);

  return (
    <Router>
      <div className="layout">
        <Header />
        <Nav />

        <section className="content">
          <div className="featured">
            <Routes>
              <Route
                path="/"
                element={<List listState={listState} setListState={setListState} />}
              />
              <Route path="/contacto" element={<Contact />} />
              <Route path="*" element={<h3 className="construction">Página en construcción... <div className="computer">
                </div><div className="wheel"></div>
                </h3>} />
            </Routes>
          </div>
        </section>

        <aside className="lateral">
          <Search listState={listState} setListState={setListState} />
          <Create setListState={setListState} />
        </aside>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

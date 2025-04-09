import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { Footer } from "./components/Footer";
import { Create } from "./components/Create";
import { List } from "./components/List";
import "./css/index.css";
import { useState } from "react";

function App() {
    const [listState, setListState] = useState([]);
  
  return (
    <div className="layout">
      <Header />
      <Nav />

      <section className="content">
        <div className="featured">
          <List listState={listState} setListState={setListState}/>
        </div>
      </section>

      <aside className="lateral">
        <Search />
        <Create setListState={setListState}/>
      </aside>
      <Footer />
    </div>
  );
}

export default App;

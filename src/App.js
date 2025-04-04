import './index.css';

function App() {
  return (
    <div className="layout">
        <header className="header">
            <h1>Popcorn film</h1>
            <img src="img/popcorn.svg" alt="Logo de Popcorn Film" />
        </header>
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        <section className="content">
        <div className="featured">
            <article className="item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">Historia de la WEB</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>

            <article className="item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">Historia de la WEB</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>

            <article className="item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">Historia de la WEB</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>

            <article className="item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">Historia de la WEB</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>

            <article className="item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">Historia de la WEB</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>
            
            <article className="item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">Historia de la WEB</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>

            <article className="item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">Historia de la WEB</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>

            <article className="item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">Historia de la WEB</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>
            </div>
        </section>

        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" placeholder="Buscar..." />
                    <button type="submit">Buscar</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Agregar Pelicula</h3>
                <form>
                    <input type="text" placeholder="Nombre de la pelicula" />
                    <textarea placeholder="Descripción"></textarea>
                    <button type="submit">Agregar</button>
                </form>
            </div>
        </aside>
        <footer className="footer">
            <p>&copy; 2025 Proyecto de Películas. Todos los derechos reservados.</p>
        </footer>
    </div>
  );
}

export default App;

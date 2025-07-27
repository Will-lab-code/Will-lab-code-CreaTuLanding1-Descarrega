import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="button">Mi Tienda</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="button">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="button">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="button">Contacto</a>
            </li>
          </ul>
        </div>
        <CartWidget cantidad={3}/>
      </div>
    </nav>
  );
}

export default NavBar;
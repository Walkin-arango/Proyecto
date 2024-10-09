import './App.css';

function App() {
  return (
    <>
      <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
        <div classNameName="container-fluid">
          <a classNameName="navbar-brand" href="#">Navbar</a>
          <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div classNameName="navbar-nav">
              <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
              <a classNameName="nav-link" href="#">Géneros</a>
              <a classNameName="nav-link" href="#">Productoras</a>
              <a classNameName="nav-link" href="#">Tipo</a>
            </div>
          </div>
        </div>
      </nav>
      <div classNameName="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://lumiere-a.akamaihd.net/v1/images/p_insideout2_now_available_disneyplus_d24c051c.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Inside Out 2</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://cinedidymedome.co/resenas/wp-content/uploads/2021/11/Encanto-2021.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Encanto</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://leehoy.cl/wp-content/uploads/2022/02/img190806-113dea-61232a.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Presidente Bajo Fuego</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOa0tg0UMfttrI1npvrBDheaswqOuD96fKcQ&s" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Shrek</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

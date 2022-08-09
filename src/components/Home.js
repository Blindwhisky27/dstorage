import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="full-page">
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href=""
       
        ><Link to='/'>Dstorage</Link>          
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">
              Account: {"this.state.account"}
            </small>
          </li>
        </ul>
      </nav>

      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}
                  className="App-logo"
                  alt="logo"
                  width="200"
                  height="200"
                />
              </a>
              <h2 className="dj">Welcome to Decentralized storage network</h2>
              <div>
                <div>
                  <Link className="button-9" to="/Upload">
                    Upload
                  </Link>
                </div>
                <br/>
                <br/>
                <div>
                  <Link className="button-9" to="/Download">
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;

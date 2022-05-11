import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import NotFound from './components/NotFound';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetails from './components/ProductDetails'
import AdminScreen from './screens/AdminScreen';

function App() {
  const user = localStorage.getItem("user");

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={"div"}>
            <Link to={"/"} >PetShop</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={"div"} >
                <Link to={"/products"}>Sản Phẩm</Link>
              </Nav.Link>
              <Nav.Link as={"div"} >Thương Hiệu</Nav.Link>
              <NavDropdown title="Danh Mục" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Chó</NavDropdown.Item>
                <NavDropdown.Item href="#">Mèo</NavDropdown.Item>
                <NavDropdown.Item href="#">Toy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Khác</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="header__search">
            <form className="header__search-form" >
              {/* <i className="ti-search header__search-icon"></i> */}
              <input
                className="header__search-input ml-2"
                tp="text"
                id="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" className="header__search-btn">
                Search
                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
              </button>
            </form>
          </div>
          {
            user ? (
              <div style={{ color: "#fff" }}>
                <Link to={'/admin'}>
                  {user}
                </Link>
                <div onClick={() => {
                  localStorage.setItem("user", "");
                  window.location = "/signin"
                }}>Logout</div>
              </div>
            ) : (
            <div style={{ color: "#fff" }}>
              <Link to={'/signin'}>
                Tài khoản
              </Link>
            </div>
            )
          }
        </Container>
      </Navbar>
      {/* <Container as={'header'} fluid={'xl'}>
        <Row>
          <Col xl={2}>
            <Navbar.Brand> Khiem </Navbar.Brand>
          </Col>
          <Col xl={8}>
            <Navbar>aa</Navbar>
          </Col>
        </Row>
      </Container> */}
      <main>
        <Switch>
          <Route exact path={"/"} component={HomeScreen} />
          <Route exact path={"/products"} component={ProductsScreen} />
          <Route path={"/products/:id"} component={ProductDetails} />
          <Route path={"/signin"} component={SignInScreen} />
          <Route path={"/admin"} component={AdminScreen} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className='text-center' style={{ background: "black", color: "white" }} >
        @KhiemPham
      </footer>
    </Router>
  );
}



export default App;

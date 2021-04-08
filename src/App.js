import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Company from './Components/company';
import CompanyList from './Components/companyList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <Router>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home" className="navbar_brand">Job Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="navbar_left_item">Jobs</Link>
            {/* <Link to="/companyDetail" className="navbar_left_item">Company</Link> */}
            <Link to="/companies" className="navbar_left_item">Companies</Link>
          </Nav>
          <Button className="post_job_btn" onClick={() => { showModal ? setShowModal(false) : setShowModal(true) }}>Post a Job</Button>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/companyDetail/:id" component={Company}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/companies" component={CompanyList}></Route>
      </Switch>
      <Modal show={showModal}>
        <Modal.Body>
          <p className="modal_para">This feature is in progress will come soon</p>
          <Button className="post_job_btn m-auto" onClick={handleClose}>Close</Button>
        </Modal.Body>
      </Modal>
    </Router>
  );
}

export default App;

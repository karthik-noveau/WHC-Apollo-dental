import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import dr_prem_logo from '../Assests/dr_prem_logo.png'


import '../css/Navibar.css'
function Navibar() {
  return (
    <Navbar expand="lg" bg="dark" collapseOnSelect >
      <Container>
        <Navbar.Brand href="#home" id='navbar_logo'>
          <img src={dr_prem_logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link as={Link} eventKey="1" to='/'>HOME</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            <NavDropdown title="ADVANTAGE" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/advantage/our-solution' eventKey="2">OUR SOLUTION</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/advantage/meet-drprem' eventKey="3">MEET DR. PREM</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/advantage/the-team' eventKey="4">THE TEAM</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to='/OurSucessStories' eventKey="5">SUCCESS STORIES</NavDropdown.Item> */}
            </NavDropdown>


            <Nav.Link as={Link} to='/all-on-4' eventKey="5">ALL-ON-4</Nav.Link>

            <Nav.Link as={Link} to='/all-on-6' eventKey="6">All-ON-6</Nav.Link>

            <NavDropdown title="IMPLANTS" id="collasible-nav-dropdown">
               
              <NavDropdown.Item as={Link} to='/implants/aesthetic' eventKey="7">AESTHETIC IMPLANTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/implants/guided-surgeries' eventKey="8">GUIDED SURGERIES</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/implants/sinus-lifts' eventKey="9">SINUS LIFTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/implants/prosthesis-types' eventKey="10">PROSTHESIS TYPES</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/implants/tooth-in-day' eventKey="11">TOOTH-IN-A-DAY</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link as={Link} to='/international-patients' eventKey="12">INTERNATIONAL PATIENTS</Nav.Link>
            <Nav.Link as={Link} to='/blog' eventKey="13">BLOGS</Nav.Link>

            <Nav.Link as={Link} to='/contact' className="contact_link" eventKey="14">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
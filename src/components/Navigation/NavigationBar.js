import SearchBar from '../Search/SearchBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavigationBar = ({ onSubmit }) => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">STREAMING AVAILABILITY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div className="searchbar-container">
                    <SearchBar onSubmit={onSubmit} />
                </div>
                <Nav className="me-auto">
                    <Nav.Link href="/">Link</Nav.Link>
                    <Nav.Link href="/">Link</Nav.Link>
                    <Nav.Link href="/">Link</Nav.Link>
                    <Nav.Link href="/">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Button variant="outline-secondary" href="#">Login</Button>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
  

function ColorSchemesExample() {
  return (
    <BrowserRouter>

   <div className='App'>
   <Navbar className='text-light bg-white'   >
        <Container >
          <Navbar.Brand href="#home" className='logo'>READ<span>Y</span></Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link  as={Link} to="/" > হোম</Nav.Link>
            <Nav.Link as={Link} to="/এন্টারপ্রাইজ" >এন্টারপ্রাইজ</Nav.Link>
            <Nav.Link as={Link} to="/কুরিয়ার" >কুরিয়ার</Nav.Link>
            <Nav.Link as={Link} to="/সার্ভিস" >সার্ভিস</Nav.Link>
          </Nav>

          <button className='btn' >
          <Nav.Link  as={Link} to="/login" > Login</Nav.Link>
          </button>

        </Container>
      </Navbar>
      
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/এন্টারপ্রাইজ' element={<About/>} />
    <Route path='/কুরিয়ার' element={<Contact/>} />
    <Route path='/সার্ভিস' element={<Service/>} />
    <Route path='/login' element={<Login/>} />

   </Routes>

   </div>
   </BrowserRouter>
   
  );
}

export default ColorSchemesExample;
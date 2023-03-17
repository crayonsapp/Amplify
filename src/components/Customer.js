import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import {MdArrowForward} from 'react-icons/md'

const Customer = () => {
    return <main>
        <div className="background customer-background ">
           <header>
                <Navbar variant='light'>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="hero.png"
                        width="100"
                        height="120"
                        className="d-inline-block"
                        />{' '}
                        <span>Crayons for Parents</span>
                    </Navbar.Brand>
                    <Nav className='ms-auto me-4 h-50'>
                        <Button as={NavItem} href="#" variant="outline-dark">Get the App</Button>
                    </Nav>
                </Navbar> 
           </header>
           <article className='customer-slogan'>
            <h1>Utmost Care with Crayons</h1>
            <p>From ABCs to 123s, we've got your child covered.</p>
            <div className='slogan-button'>
                <Button className="pt-2 ps-auto pe-4" size='lg' variant='outline-dark'>Meet the App <MdArrowForward/></Button>
            </div>
           </article>

        </div>
    </main>
}

export default Customer;
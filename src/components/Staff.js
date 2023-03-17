import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {MdArrowForward} from 'react-icons/md'

const Staff = () => {
    return <main>
        <div className="background staff-background">
            <header>
                <Navbar variant='light'>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="hero.png"
                        width="100"
                        height="120"
                        className="d-inline-block"
                        />{''}
                        <span>Crayons for Schools</span>
                    </Navbar.Brand>
                    <Nav className='ms-auto me-4'>
                        <Button href="#" variant="outline-dark">Log in</Button>
                    </Nav>
                </Navbar> 
            </header>
            
            <article className='staff-slogan'>
                <h1>Easy Management with Crayons</h1>
                <p>Modernize your preschool with our cutting-edge technology.</p>
                <div className='slogan-button'>
                    <Button className="pt-1" size='lg' variant='outline-dark'>Explore the App <MdArrowForward/></Button>
                </div>
            </article>

        </div>
        
    </main>
}

export default Staff;
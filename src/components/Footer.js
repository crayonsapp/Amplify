import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs';
const Footer = () => {
    return <footer className="footer-bg">
        <Container>
        <Row className="informational-links mt-4">
            <Col className='pt-1'>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </Col>
            <Col className="social-links">
                <p><a href='https://www.instagram.com/crayonsapp/?igshid=YmMyMTA2M2Y%3D'><BsInstagram/></a> 
                    <a href='https://www.linkedin.com/company/crayonsapp/?original_referer='><BsLinkedin/></a>  
                    <a href='https://www.youtube.com/@crayonsapp'><BsYoutube/></a>
                </p>
            </Col>
        </Row>
        <Row className='legal-links'>
            <p><span className='legal'>Terms and Conditions</span> <span className='legal'>Privacy Policy</span></p>
            <span className='copyright'>&copy;  Copyright <strong>CrayonsApp</strong> All Rights Reserved</span>
        </Row>
        </Container>
    </footer>
}

export default Footer;
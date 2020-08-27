import React from 'react';
import './home.css';
import Course from '../Courses/Course';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData/allCourses';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => {

    // console.log(fakeData);
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    

    const addToCart = (course) => {

        const enrolledCourses = [...cart, course];

        setCart(enrolledCourses);
    }
    
    return (

        <Container>
            <Row>
                <Col md={8}>
                    <h2>Featured Courses</h2>
                    <Row>
                        {
                            courses.map( el => <Col md={4}><Course enrollCourse={addToCart} key={el.id} singleCourse={el}></Course></Col>)
                        }
                    </Row>
                </Col>
                <Col md={4}>
                    <h2>Your Cart</h2>
                    <Cart cart={cart}></Cart>
                </Col>
            </Row> 
        </Container>
    );
};

export default Home;
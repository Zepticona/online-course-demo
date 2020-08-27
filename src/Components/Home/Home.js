import React from 'react';
import './home.css';
import Course from '../Courses/Course';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData/allCourses';
import { useState } from 'react';
const Home = () => {

    // console.log(fakeData);
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        const enrolledCourses = [...cart, course];
        setCart(enrolledCourses);
    }
    
    return (
        <div className="home">
            <div className="container">
                <div className="home-wrapper">

                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                {courses.map( el => <Course enrollCourse={addToCart} key={el.id} singleCourse={el}></Course>)}
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="cart-wrapper">
                                <Cart cart={cart}></Cart>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        
        </div>
    );
};

export default Home;
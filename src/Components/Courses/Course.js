import React from 'react';
import './course.css'
import { Button } from 'react-bootstrap';
const Course = (props) => {
    
    const { name, price, img } = props.singleCourse;
    return (            

        <div className="course-wrapper">
            <div className="course-thumbnail">
                <img className="course-img" src={require(`../../images/${img}`)} alt="Books"/>
            </div>
            <div className="course-info">
                <h4 className="course-title">{name}</h4>
                <p className="course-description">Random info</p>
                <p className="course-price">Price: ${price}</p>
                <Button variant="primary" onClick={() => props.enrollCourse(props.singleCourse)}>Enroll Now</Button>
            </div>
        </div>

    );
};

export default Course; 
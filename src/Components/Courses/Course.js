import React from 'react';
import './course.css'

const Course = (props) => {
    
    const { name, price } = props.singleCourse;
    return (
            
        <div className="col-md-4 ">
            <div className="card-wrapper">
                <div className="card" style={{width: '15rem'}}>
                    <img src={require('../../images/books.jpg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Title: {name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <a href="/#" className="btn btn-primary" onClick={() => props.enrollCourse(props.singleCourse)}>Enroll Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
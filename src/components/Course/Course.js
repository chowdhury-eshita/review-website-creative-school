import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';
const Course = (props) => {
    const { course, fee, duration, img } = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="image-size" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Course Name: {course}</Card.Title>
                        <h5>Fee: ${fee}</h5>
                        <p><small>Course Duration: {duration}h</small></p>
                        <button className="btn btn-success"
                        >Enroll Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;
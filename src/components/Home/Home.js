import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./shortCoursedb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src="https://i.pinimg.com/originals/7c/c7/fa/7cc7fae8598411de575b31a4239a61b9.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Join Our School</h3>
                        <p>We provide Quality with Qualification.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src="https://miro.medium.com/max/1023/1*6lkLQGT2dnWi6mTqSlSkig.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Enroll Today</h3>
                        <p>We provide Quality with Qualification.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mb-5 pt-5">
                <h2 className="mb-3">Course Highlights:</h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.map(course => <Course
                            key={course.courseId}
                            course={course}
                        ></Course>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Home;
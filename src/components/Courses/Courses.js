import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./coursedb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="container mt-5 py-5">
            <h2>Our Courses:</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    courses.map(course => <Course
                        key={course.courseId}
                        course={course}
                    ></Course>)
                }
            </Row>

        </div>
    );
};

export default Courses;
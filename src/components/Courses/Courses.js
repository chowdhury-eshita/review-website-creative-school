import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';
const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./coursedb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="container pt-5">
            <Row xs={1} md={3} className="g-4">
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </Row>

        </div>
    );
};

export default Courses;
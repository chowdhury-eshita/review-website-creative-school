import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./shortCoursedb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="pt-5">
            <div className="container mb-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <Course course={course}></Course>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Home;
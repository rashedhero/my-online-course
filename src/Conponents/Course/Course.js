import React from 'react';
import "./Course.css";
import { Button } from 'react-bootstrap';

const Course = (props) => {
const {courseName,CoursePatten,price,Image}=props.course;
    return (
        <div className="course">
            <div>
            <img src={Image} alt=""/>  
            </div>
           <div>
           <h1>courseName:{courseName}</h1>
            <h2>CoursePatten:{CoursePatten}</h2>
             <h3>price:{price}</h3>
             <Button variant="primary" onClick={ ()=>props.handleClick(props.course)} >Enroll plz</Button>
       
               
           </div>
        

        </div>
    );
};

export default Course;
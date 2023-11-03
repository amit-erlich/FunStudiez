import React from 'react';

const CourseDetails = ({
    courseName,
    tastDate,
}) => {

    return (
        <>
            <p style={{ fontSize: '32px' }}>
              <span style={{ fontWeight: 'bold' }}>Course:</span> {courseName}
              <br/>
              <span style={{ fontWeight: 'bold' }}>Test Date:</span> {tastDate}
            </p>
        </>
    );
};

export default CourseDetails;

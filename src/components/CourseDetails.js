import React from 'react';

const CourseDetails = ({
    courseName,
    tastDate,
}) => {

    return (
        <>
            <p>
                <p style={{ marginTop: '-20px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '200%' }}>{courseName}</span>
                </p>
                <p style={{ fontSize: '110%', marginTop: '-20px' }}>
                <span style={{ fontWeight: 'bold' }}>Test Date:</span> {tastDate}
                </p>
            </p>
        </>
    );
};

export default CourseDetails;

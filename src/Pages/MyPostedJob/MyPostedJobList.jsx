import React, { use } from 'react';

const MyPostedJobList = ({ jobsCreatedByPromise }) => {
    const data = use(jobsCreatedByPromise)
    console.log(data);
    return (
        <div>
            <h1>My posted job list</h1>
        </div>
    );
};

export default MyPostedJobList;
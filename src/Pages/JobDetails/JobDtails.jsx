import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData()
    console.log(job);
    return (
        <div>
            <h1>Job details</h1>
        </div>
    );
};

export default JobDetails;
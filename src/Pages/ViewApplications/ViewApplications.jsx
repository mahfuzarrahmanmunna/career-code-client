import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(id);
    console.log(id, data);
    return (
        <div>
            <h1>View Applications: {data.length}</h1>
        </div>
    );
};

export default ViewApplications;
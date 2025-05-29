import React from 'react';
import { useParams } from 'react-router';

const ViewApplications = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <div>
            View Applications
        </div>
    );
};

export default ViewApplications;
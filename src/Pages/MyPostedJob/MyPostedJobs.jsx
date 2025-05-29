import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import { jobsCreatedByPromise } from '../../API/JobsApi/JobsApi';

const MyPostedJobs = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>My posted jobs</h1>
            <Suspense>
                <MyPostedJobs jobsCreatedByPromise={jobsCreatedByPromise(user?.email)} />
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
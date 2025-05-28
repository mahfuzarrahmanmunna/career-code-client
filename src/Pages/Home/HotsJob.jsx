import { use } from "react";

const HotsJob = ({ jobsPromise }) => {
    const jobs = use(jobsPromise)
    console.log(jobs);
    return (
        <div>

        </div>
    );
};

export default HotsJob;
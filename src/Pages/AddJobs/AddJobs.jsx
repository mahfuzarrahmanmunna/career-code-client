import React from 'react';

const AddJobs = () => {

    const handleAAddJob = e => {
        e.preventDefault()
    }
    return (
        <div className="px-4">
            <div className='max-w-6xl lg:px-12 py-8 rounded-3xl shadow-xl bg-base-300 mx-auto my-8'>
                <h1 className='text-3xl font-bold text-center my-8'>Add a Job</h1>
                <form className='px-4' onSubmit={handleAAddJob}>
                    {/* Job Details Form */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Job Title */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Title</label>
                            <input type="text" name='title' className="input w-full" placeholder="Job Title" />
                        </fieldset>

                        {/* Company Name */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Company</label>
                            <input type="text" name='company' className="input w-full" placeholder="Company name" />
                        </fieldset>

                        {/* Company Location */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Location</label>
                            <input type="text" className="input w-full" placeholder="Company Location" />
                        </fieldset>

                        {/* Company Logo URL */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Company Logo</label>
                            <input type="url" className="input w-full" placeholder="Company Logo URL" />
                        </fieldset>

                        {/* Job Type */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Job Type</label>
                            <div className="flex flex-wrap gap-2">
                                <input className="btn" type="radio" name="jobType" aria-label="On-Site" />
                                <input className="btn" type="radio" name="jobType" aria-label="Remote" />
                                <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
                            </div>
                        </fieldset>

                        {/* Job Category */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Job Category</label>
                            <select defaultValue="Job Category" name='category' className="select w-full">
                                <option disabled={true}>Job Category</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                            </select>
                        </fieldset>

                        {/* Application Deadline */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Application Deadline</label>
                            <input type="date" className="input w-full" />
                        </fieldset>

                        {/* Salary Range */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 col-span-1">
                            <label className='label font-bold'>Salary Range</label>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                <fieldset>
                                    <label className='label'>Minimum Salary</label>
                                    <input type="text" name='min' className="input w-full" />
                                </fieldset>
                                <fieldset>
                                    <label className='label'>Maximum Salary</label>
                                    <input type="text" name='max' className="input w-full" />
                                </fieldset>
                                <fieldset>
                                    <label className='label'>Currency</label>
                                    <select defaultValue="Currency" name='currency' className="select w-full">
                                        <option disabled={true}>Currency</option>
                                        <option value="BDT">BDT</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                    </select>
                                </fieldset>
                            </div>
                        </fieldset>

                        {/* Job Requirements */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Job Requirements</label>
                            <textarea className="textarea w-full" name='requirements' placeholder="Job Requirements (separate by comma)"></textarea>
                        </fieldset>

                        {/* Job Responsibilities */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Job Responsibilities</label>
                            <textarea className="textarea w-full" name='responsibilities' placeholder="Job Responsibilities (separate by comma)"></textarea>
                        </fieldset>

                        {/* Job Description */}
                        <fieldset className="fieldset col-span-1 md:col-span-2 bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Job Description</label>
                            <textarea className="textarea w-full" name='description' placeholder="Job Description"></textarea>
                        </fieldset>
                    </div>
                    <fieldset className="btn btn-primary btn-outline btn-block p-4 mt-4">
                        <input type="submit" value="Add A Job" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;

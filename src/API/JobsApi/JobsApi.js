export const jobsCreatedByPromise = email => {
    return fetch(`http://localhost:3000/jobs?email=${email}`)
        .then(res => res.json())
        .catch(err => {
            const code = err.code || 'UNKNOWN_ERROR';
            console.error("Failed to fetch jobs created by:", code);
        })
}
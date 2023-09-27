import { error } from "@sveltejs/kit";

export const  load = async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/jobs')

    if(!response.ok) {
        throw error(response.status, 'Something Went Wrong Please try again later ')
    }
    const jobs = await response.json()
    return {
        jobs
    };
};
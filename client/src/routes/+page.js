
import { error } from "@sveltejs/kit";

export const  load = async () => {
    const response = await fetch('/api/v1/jobs')

    if(!response.ok || response.ok === undefined) {
        throw error(response.status, 'Something Went Wrong Please try again later ')
    }
    const jobs = await response.json()
    return {
        jobs
    };
};


import { error } from '@sveltejs/kit';

export const  load = async ({params}) => {
    const response = await fetch(`http://127.0.0.1:3000/api/v1/jobs/${params.id}`)
    // console.log(response);
    if(!response.ok) {
        throw error(response.status, 'Job not found')
    }
    const jobs = await response.json()
    return {
        jobs
    };
};
import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }) => {
  try {
    const response = await fetch(`/api/v1/jobs/${params.id}`);
    if (!response.ok) {
      throw error(response.status, 'Job not found');
    }
    const jobs = await response.json();
    return {
      jobs
    };
  } catch (error) {
    return {
      error: 'Failed to retrieve the page. Please try again later.'
    };
  }
};

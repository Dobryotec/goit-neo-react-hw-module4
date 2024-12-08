import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'CjQN0JdYhscPqBBIr8KclMhIV2DniyA-jbXU9SXWedc';

export const getAllimages = async (query: string, page: number) => {
  const data = await axios('search/photos', {
    params: {
      client_id: ACCESS_KEY,
      query,
      page,
      per_page: 12,
    },
  });
  return data;
};

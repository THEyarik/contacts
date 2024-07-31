import axiosConfig from '../../lib/shared/config/axiosConfig';

export const getContacts = async () => {
  const response = await axiosConfig.get('/contacts', {
    params: { sort: 'created:desc' }
  });
  return response.data;
};
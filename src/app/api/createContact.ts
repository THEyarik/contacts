import axiosConfig from '../../lib/shared/config/axiosConfig';

export const createContact = async (contactData: IOContactProfile) => {
  const response = await axiosConfig.post('/contact', {
    ...contactData,
    record_type: 'person',
    privacy    : {
      edit: null,
      read: null
    },
    owner_id: null
  });
  return response.data;
};
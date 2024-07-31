import axiosConfig from '../../lib/shared/config/axiosConfig';

export const deleteContact = async (contactId: number) => {
  const response = await axiosConfig.delete(`/contact/${contactId}`);
  return response.data;
};
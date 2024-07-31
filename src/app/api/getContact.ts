import AxiosConfig from '../../lib/shared/config/axiosConfig';

export const getContactById = async (id: number) => {
  const response = await AxiosConfig.get(`/contact/${id}`);
  return response.data;
};
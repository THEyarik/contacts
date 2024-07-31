import axiosConfig from '../../lib/shared/config/axiosConfig';

export const addTagsToContact = async (id: number, tags: string) => {
  const response = await axiosConfig.put(`/contact/${id}/tags`, { tags });
  return response.data;
};
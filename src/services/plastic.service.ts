import { axiosClassic } from '@/api/interceptors/root.interceptor';
import { TypePlasticRequest } from '@/types/plastic.types';

class PlasticService {
  private BASE_URL = "/plastics";

  async list() {
    const response = await axiosClassic.get(this.BASE_URL);
    return response.data;
  }

  async retrieve(id: string) {
    const response = await axiosClassic.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }

  async create(data: TypePlasticRequest) {
    const response = await axiosClassic.post(this.BASE_URL, { ...data });
    return response.data;
  }

  async update(id: string, data: Partial<TypePlasticRequest>) {
    const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, { ...data });
    return response.data;
  }

  async delete(id: string) {
    const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const plasticService = new PlasticService();
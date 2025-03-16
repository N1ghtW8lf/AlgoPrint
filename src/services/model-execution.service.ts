import { type TypeModelExecutionRequest } from '@/types/model.types';
import { axiosClassic } from '@/api/interceptors/root.interceptor';


class ModelExecutionService {
  private BASE_URL = "/model-executions";

  async list() {
    const response = await axiosClassic.get(this.BASE_URL);
    return response.data;
  }

  async retrieve(id: string) {
    const response = await axiosClassic.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }

  async create(data: TypeModelExecutionRequest) {
    const response = await axiosClassic.post(this.BASE_URL, {...data});
    return response.data;
  }

  async update(id: string, data: Partial<TypeModelExecutionRequest>) {
    const response = await axiosClassic.patch(`${this.BASE_URL}/${id}`, {...data});
    return response.data;
  }

  async delete(id: string) {
    await axiosClassic.delete(`${this.BASE_URL}/${id}`);
  }
}

export const modelExecutionService = new ModelExecutionService();
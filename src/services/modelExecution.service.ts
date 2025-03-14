import { TypeModelExecutionRequest } from '@/types/model.types';
import axios from 'axios';

class ModelExecutionService {
  private BASE_URL = "/model-executions";

  async list() {
    const response = await axios.get(this.BASE_URL);
    return response.data;
  }

  async retrieve(id: string) {
    const response = await axios.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }

  async create(data: TypeModelExecutionRequest) {
    const response = await axios.post(this.BASE_URL, {...data});
    return response.data;
  }

  async update(id: string, data: Partial<TypeModelExecutionRequest>) {
    const response = await axios.put(`${this.BASE_URL}/${id}`, {...data});
    return response.data;
  }

  async delete(id: string) {
    await axios.delete(`${this.BASE_URL}/${id}`);
  }
}

export const modelExecutionService = new ModelExecutionService();
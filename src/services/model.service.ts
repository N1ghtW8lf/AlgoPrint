import { axiosClassic } from '@/api/interceptors/root.interceptor';
import { type TypeModelRequest } from '@/types/model.types';
import axios from 'axios';

class ModelService {
  private BASE_URL = "/models";

  private axiosMultipart = axios.create({
    baseURL: process.env.BASE_API_URL,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });

  async list() {
    const response = await axiosClassic.get(this.BASE_URL);
    return response.data;
  }

  async retrieve(id: string) {
    const response = await axiosClassic.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }
  
  async create(data: TypeModelRequest) {
    const response = await this.axiosMultipart.post(this.BASE_URL, { ...data });
    return response.data;
  }

  async update(id: string, data: Partial<TypeModelRequest>) {
    const response = await this.axiosMultipart.patch(this.BASE_URL, { ...data });
    return response.data;
  }

  async delete(id: string) {
    const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const modelService = new ModelService();
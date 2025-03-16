import { axiosClassic } from '@/api/interceptors/root.interceptor';
import { type TypeOrderRequest } from '@/types/order.types';

class OrderService {
  private BASE_URL = "/orders";

  async list() {
    const response = await axiosClassic.get(this.BASE_URL);
    return response.data;
  }

  async retrieve(id: string) {
    const response = await axiosClassic.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }

  async create(data: TypeOrderRequest) {
    const response = await axiosClassic.post(this.BASE_URL, { ...data });
    return response.data;
  }

  async update(id: string, data: Partial<TypeOrderRequest>) {
    const response = await axiosClassic.patch(`${this.BASE_URL}/${id}`, { ...data });
    return response.data;
  }

  async delete(id: string) {
    const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const orderService = new OrderService();
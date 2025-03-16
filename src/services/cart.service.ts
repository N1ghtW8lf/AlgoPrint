import { axiosClassic } from '@/api/interceptors/root.interceptor';
import { type TypeCartRequest } from '@/types/cart.types';

class CartService {
  private BASE_URL = "/carts";

  async list() {
    const response = await axiosClassic.get(this.BASE_URL);
    return response.data;
  }

  async retrieve(id: string) {
    const response = await axiosClassic.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }

  async create(data: TypeCartRequest) {
    const response = await axiosClassic.post(this.BASE_URL, { ...data });
    return response.data;
  }

  async update(id: string, data: Partial<TypeCartRequest>) {
    const response = await axiosClassic.patch(`${this.BASE_URL}/${id}`, { ...data });
    return response.data;
  }

  async delete(id: string) {
    const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const cartService = new CartService();
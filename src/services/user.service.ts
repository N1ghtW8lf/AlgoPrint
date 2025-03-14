import { axiosClassic } from '@/api/interceptors/root.interceptor';
import { TypeUserRequest } from '@/types/user.types';

class UserService {
  private BASE_URL = "/users";

  async list() {
    const response = await axiosClassic.get(this.BASE_URL);
    return response.data;
  }

  async retrieve(id: string) {
    const response = await axiosClassic.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }

  async create(data: TypeUserRequest) {
    const response = await axiosClassic.post(this.BASE_URL, { ...data });
    return response.data;
  }

  async update(id: string, data: Partial<TypeUserRequest>) {
    const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, { ...data });
    return response.data;
  }

  async delete(id: string) {
    const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const userService = new UserService();
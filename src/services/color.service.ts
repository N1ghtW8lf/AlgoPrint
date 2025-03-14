import { axiosClassic } from '@/api/interceptors/root.interceptor';
import { TypeColorRequest } from '@/types/color.types';
class ColorService {
  private BASE_URL = "/colors";

  async list(){
    const response = await axiosClassic.get(this.BASE_URL);
    return response.data;
  }
  async retrieve(id: string){
    const response = await axiosClassic.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }
  async create(data: TypeColorRequest){
    const response = await axiosClassic.post(this.BASE_URL, { ...data });
    return response.data;
  }
  async update(id: string, data: Partial<TypeColorRequest>){
    const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, { ...data });
    return response.data;
  }
  async delete(id: string){
    const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const colorService = new ColorService();
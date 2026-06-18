import { create } from 'zustand';
import axios from 'axios';

const useProductStore = create((set) => ({
  products: [],
  product: null,
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.get('/api/products');
      set({ products: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchProductById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      set({ product: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useProductStore;

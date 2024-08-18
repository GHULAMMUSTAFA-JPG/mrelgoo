import { OrderStatus } from '@/types/common.types'
import api from '../index'
import { TagTypes, apiTags } from '../tags'
const testimonialApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllTestimonials: build.query<any, void>({
      query: () => ({
        url: `/api/testimonials`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetAllTestimonialsQuery } = testimonialApi

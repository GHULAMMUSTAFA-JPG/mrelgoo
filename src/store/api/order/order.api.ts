import { OrderStatus } from '@/types/common.types'
import api from '../index'
import { TagTypes, apiTags } from '../tags'
const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation<any, any>({
      query: (body) => ({
        url: `/api/orders/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [TagTypes.ORDER],
    }),
    getAllOrders: build.query<
      any,
      { status: OrderStatus; page: number; search: string }
    >({
      query: ({ status, page, search }) => ({
        url: `/api/orders?status=${status}&page=${page}&search=${search}`,
        method: 'GET',
      }),
      providesTags: [TagTypes.ORDER],
    }),
    updateOrderStatus: build.mutation<
      any,
      {
        _id: string
        status: string
        isMailChecked: boolean
        paymentIntent: string
      }
    >({
      query: ({ _id, status, isMailChecked, paymentIntent }) => ({
        url: `/api/orders/update-status/${_id}`,
        method: 'PATCH',
        body: { status, isMailChecked, paymentIntent },
      }),
      invalidatesTags: [TagTypes.ORDER],
    }),
    getStates: build.query<any, void>({
      query: () => ({
        url: `/api/states`,
        method: 'GET',
      }),
      providesTags: [TagTypes.ORDER],
    }),
  }),
})

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useGetStatesQuery,
} = orderApi

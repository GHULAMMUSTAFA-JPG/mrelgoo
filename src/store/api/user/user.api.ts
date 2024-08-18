import api from '../index'
import { TagTypes } from '../tags'

const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, any>({
      query: (body) => ({
        url: `/api/auth/login`,
        method: 'POST',
        body,
      }),
    }),
    adminUpdate: build.mutation<any, any>({
      query: (body) => ({
        url: `/api/auth/update`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useAdminUpdateMutation } = profileApi

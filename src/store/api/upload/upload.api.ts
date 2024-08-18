import api from '../index'
const uploadApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadImages: build.mutation<any, any>({
      query: (body) => ({
        url: `/api/upload/imgages`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useUploadImagesMutation } = uploadApi

import api from '../index'
const emailApi = api.injectEndpoints({
  endpoints: (build) => ({
    contactUs: build.mutation<any, any>({
      query: (body) => ({
        url: `/api/email/contact-us`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [],
    }),
    sendZepto: build.mutation<any, any>({
      query: (body) => ({
        url: `/api/email/zepto`,
        method: 'POST',
        body,
      }),
    }),
    sendZoho: build.mutation<any, any>({
      query: (body) => ({
        url: `/api/email/zoho`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useContactUsMutation,
  useSendZeptoMutation,
  useSendZohoMutation,
} = emailApi

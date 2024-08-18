import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiTags } from './tags'
import { serverUrl } from '@/_data/serverUrl'
// import { performLogoutActions } from '../commonActions'

const deployEnv = process.env.NEXT_PUBLIC_DEPLOY_ENV

export const api = createApi({
  reducerPath: 'api',
  tagTypes: apiTags,
  baseQuery: async (args, WebApi, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: serverUrl,
      prepareHeaders: async (headers, { getState, endpoint }) => {
        const user = getState().user
        const authToken = 'Bearer ' + user.jwt?.token
        headers.delete('Authorization')
        headers.set('Authorization', authToken)

        headers.set('Accept', 'application/json; multipart/form-data')

        return headers
      },
    })

    // perform the initial query
    let result = await baseQuery(args, WebApi, extraOptions)

    if (result.error?.data.status === 403) {
      const refreshToken = WebApi.getState().user.jwt.refreshToken
    }

    return result
  },
  endpoints: (builder) => ({}),
})

export default api

import { configureStore } from '@reduxjs/toolkit'

import api from './api'
import userReducer from './slices/userSlice'
import orderReducer from './slices/orderSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/query'

const persistConfig = {
  version: 1,
  storage,
}
const persistedUserReducer = persistReducer(
  { ...persistConfig, key: 'user' },
  userReducer
)

const persistedOrderReducer = persistReducer(
  {
    ...persistConfig,
    key: 'order',
  },
  orderReducer
)
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    order: persistedOrderReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

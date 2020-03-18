import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '@/store/reducers/user'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  composeWithDevTools()
)
export const persistor = persistStore(store)

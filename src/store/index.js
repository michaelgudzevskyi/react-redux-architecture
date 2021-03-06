import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import counter from "./reducers/counterReducer"

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    counter,
});

const initialState = {}
const middleware = [thunk]
const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
        : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(persistedReducer, initialState, enhancer)

const persistor = persistStore(store)

export { store, persistor }

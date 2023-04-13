import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore, combineReducers,Middleware } from '@reduxjs/toolkit';
import cartListReducer from "../modules/CartList/reducers/CartListSliice"

const middleware: Middleware[] = [
  
];

const reducer = combineReducers({
    cartListReducer
})


const store = configureStore({
    reducer,
    middleware
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
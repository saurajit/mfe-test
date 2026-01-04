import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import counterReducer from './slice/counterSlice'
export {useDispatch, useSelector, useStore} from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
export function StoreProvider({children}) {
    return <Provider store={store}>{children}</Provider>
};

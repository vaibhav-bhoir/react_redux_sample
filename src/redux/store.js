import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./useSlice";

export default configureStore({
    reducer: {
        user: userReducer //here key(user) is state name and value is (call the reducer) from userSlice.js
         // dont forget to wrap App component in provider
    }
})
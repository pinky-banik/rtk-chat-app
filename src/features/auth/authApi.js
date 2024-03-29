import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoints here
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: 'POST',
                body : data,
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.apiSlice,
                        user: result.data.user
                    }
                    ));
                    dispatch(userLoggedIn({
                        accessToken: result.data.apiSlice,
                        user: result.data.user
                    }));
                } catch (error) {
                    //do nothing
                }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: 'POST',
                body : data,
            }), 
            async onQueryStarted(arg,{queryFulfilled,dispatch}) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.apiSlice,
                        user: result.data.user
                    }
                    ));
                    dispatch(userLoggedIn({
                        accessToken: result.data.apiSlice,
                        user: result.data.user
                    }));
                } catch (error) {
                    //do nothing
                }
            }
        }),
    })
})

export const {useLoginMutation,useRegisterMutation} = authApi;


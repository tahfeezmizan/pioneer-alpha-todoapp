import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create user
    signUp: build.mutation({
      query: (data) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useSignUpMutation } = authApi;

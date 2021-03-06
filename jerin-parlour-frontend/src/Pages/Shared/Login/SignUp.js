import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let signInError;

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (error || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message ||  updateError?.message}
        </small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  const navigateToSignIn = () => {
    navigate("/login");
  };
  return (
    <section>
      <Helmet>
        <title>Create Account - Jerins Parlour</title>
      </Helmet>
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md my-20">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-black">
          Jerins Parlour
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <label
              for="username"
              className="block text-sm text-gray-800 dark:text-black"
            >
              Name
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
              type="name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <label
              for="username"
              className="block text-sm text-gray-800 dark:text-black"
            >
              Email
            </label>
            <input
            {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm text-gray-800 dark:text-black"
              >
                Password
              </label>
            </div>

            <input
                 {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
          </div>
          {signInError}

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Signup
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-black hover:underline"
          >
            or login with Social Media
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-black">
          {" "}
          Already have an account?{" "}
          <p
            onClick={navigateToSignIn}
            href="#"
            className="font-medium text-gray-700 dark:text-black hover:underline"
          >
            Signin
          </p>
        </p>
      </div>
    </section>
  );
};

export default SignUp;

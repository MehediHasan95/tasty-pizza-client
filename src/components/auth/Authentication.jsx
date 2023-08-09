import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer } from "react";
import {
  ERRMSG,
  LOADING,
  ROLE,
  SHOWPASS,
  SUCCESS,
  TOGGLE,
} from "../../utilities/auth-constant";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { google } from "../../utilities/image-constant";

const Authentication = () => {
  const initialState = {
    toggle: false,
    showPass: false,
    errMsg: null,
    loading: false,
  };
  const authReducer = (state, action) => {
    switch (action.type) {
      case TOGGLE:
        return {
          ...state,
          toggle: !state.toggle,
        };
      case SHOWPASS:
        return {
          ...state,
          showPass: !state.showPass,
        };
      case ERRMSG:
        return {
          ...state,
          loading: false,
          errMsg: action.payload,
        };
      case LOADING:
        return {
          ...state,
          loading: true,
        };
      case SUCCESS:
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser, createUser, userProfileUpdate, googleSignIn } = useAuth();
  const loaction = useLocation();
  const navigate = useNavigate();

  const from = loaction?.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    dispatch({ type: LOADING });
    if (state.toggle) {
      createUser(data.email, data.pasasword)
        .then(({ user }) => {
          userProfileUpdate(data.displayName)
            .then(() => {
              const { uid, displayName, email, photoURL } = user;
              axios
                .post("https://tasty-pizza-server.vercel.app/users", {
                  uid,
                  displayName,
                  email,
                  photoURL,
                  role: ROLE,
                })
                .then((res) => {
                  if (res.data.insertedId) {
                    dispatch({ type: SUCCESS });
                    navigate(from, { replace: true });
                    navigate(0);
                  }
                });
            })
            .catch((err) => {
              dispatch({ type: ERRMSG, payload: err.code });
            });
        })
        .catch((err) => {
          dispatch({ type: ERRMSG, payload: err.code });
        });
    } else {
      loginUser(data.email, data.pasasword)
        .then(() => {
          dispatch({ type: SUCCESS });
          navigate(from, { replace: true });
          navigate(0);
        })
        .catch((err) => {
          dispatch({ type: ERRMSG, payload: err.code });
        });
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then(({ user }) => {
      const { uid, displayName, email, photoURL } = user;
      axios
        .post("https://tasty-pizza-server.vercel.app/users", {
          uid,
          displayName,
          email,
          photoURL,
          role: ROLE,
        })
        .then((res) => {
          if (res.data.insertedId) {
            dispatch({ type: SUCCESS });
          }
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="">
      <div className="grid lg:grid-cols-2 min-h-screen auth_bg">
        <div className="col-span-1 grid place-items-center">
          <div className="text-center">
            <div className="text-white mb-20">
              <p className="text-3xl lg:text-5xl">Welcome to</p>
              <h1 className="text-6xl lg:text-9xl font-bold my-2">
                Tasty Pizza
              </h1>
              <p className="text-xl lg:text-3xl tracking-[1em]">Restaurant</p>
            </div>

            <p className="my-3 text-white">Sign in with</p>
            <div className="flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="border text-white hover:text-raisinBlack hover:bg-base-100 px-10 py-2 rounded-full flex justify-center items-center"
              >
                <img src={google} alt="google_icon" className="w-4 me-3" />
                <span className="uppercase">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 px-3 grid place-items-center lg:px-0 ">
          <div className="w-full lg:w-3/6 mx-auto p-3 lg:p-5 my-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="pb-3 lg:pb-5 text-2xl text-center text-white">
                {state.toggle ? "Create an account" : "Login"}
              </h1>
              {state.toggle && (
                <>
                  <input
                    type="text"
                    {...register("displayName", {
                      required: "Username is required",
                      pattern: {
                        value: /^[a-z A-Z]{0,}$/i,
                        message:
                          "Username should contain only alphanumeric characters",
                      },
                    })}
                    className="w-full p-3 outline-none border bg-transparent text-white"
                    placeholder="Name"
                  />
                  <p className="text-platinum ms-1 text-xs mb-3">
                    {errors.displayName && (
                      <span>{errors?.displayName?.message}</span>
                    )}
                  </p>
                </>
              )}

              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-3 outline-none border bg-transparent text-white"
                placeholder="Email"
              />
              <p className="text-platinum ms-1 text-xs mb-3">
                {errors.email && <span>{errors?.email?.message}</span>}
              </p>
              <div className="relative">
                <input
                  type={state.showPass ? "text" : "password"}
                  {...register("pasasword", {
                    required: "Password is required",
                    maxLength: {
                      value: 6,
                      message: "Password must be less than 6 characters long",
                    },
                    pattern: {
                      value: /^[^A-Z!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]*$/,
                      message:
                        "Password must be contain a single digit and one uppercase letter, Don't use  uppercase letter and special character",
                    },
                  })}
                  className="w-full p-3 outline-none border bg-transparent text-white"
                  placeholder="Password"
                />
                <p className="text-platinum ms-1 text-xs mb-3">
                  {errors.pasasword && (
                    <span>{errors?.pasasword?.message}</span>
                  )}
                </p>
                <FontAwesomeIcon
                  onClick={() => dispatch({ type: SHOWPASS })}
                  icon={state.showPass ? faEye : faEyeSlash}
                  className="absolute top-[1.10rem] right-3 cursor-pointer text-white"
                />
              </div>
              <button className="w-full p-3 bg-orange hover:bg-white text-white hover:text-raisinBlack duration-300 hover:duration-300">
                {state.loading ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                ) : (
                  <>{state.toggle ? "Register" : "Login"}</>
                )}
              </button>
            </form>
            <p className="text-platinum text-center my-3">{state.errMsg}</p>
            <p className="my-3 text-center text-white">
              {state.toggle ? "Already member?" : "New to TastyPizza?"}
              <button
                onClick={() => dispatch({ type: TOGGLE })}
                className="text-orange hover:underline mx-2"
              >
                {state.toggle ? "Login" : "Register"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

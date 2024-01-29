import { toast } from "react-hot-toast";
import { Login } from "../../interface";
import { setLoading, setLoginUserDeatils, setUser, UserDetails } from "../../store/slices/authSlice";
import { GETUSERS_API, SIGNIN_API, SIGNUP_API } from "../api";
import { apiConnector } from "../apiConnector";



export const signup = (data : UserDetails , navigate : any) => {
    return async (dispatch : any) => {
      dispatch(setLoading(true));
      try {
        const repsonse = await apiConnector("POST", SIGNUP_API, data , "" , "" );
        if (repsonse.status === 200) {
        //   dispatch(setUser(repsonse.data.user));
          toast.success(repsonse.data.message);
          navigate("/");
        }
      } catch (error : any) {
        toast.error(error.response.data.message);
        
      }
      dispatch(setLoading(false));
    };
};

export const signin = (data : Login , navigate : any) => {
    
    return async (dispatch : any) => {
        dispatch(setLoading(true));
        try {
          const repsonse = await apiConnector("POST", SIGNIN_API, data);
          if (repsonse.status === 200) {
            localStorage.setItem("token", repsonse.data.token);
            localStorage.setItem("userDetails", JSON.stringify(repsonse.data.user));
            dispatch(setLoginUserDeatils(repsonse.data.user));
            toast.success(repsonse.data.message);
            navigate("/dashboard");
          }
        } catch (error : any) {
          toast.error(error.response.data.message);
        }
        dispatch(setLoading(false));
    }
}

export const users = (query : string , token : string) => {
    return async (dispatch : any) => {
      dispatch(setLoading(true));
      try {
        const users = await apiConnector("GET", `${GETUSERS_API}${query}`, null, {
          Authorization: `Bearer ${token}`,
        } , "");
        if (users.status === 200) {
          dispatch(setUser(users.data.users));
        }
      } catch (error) {
        console.log(error, "error");
      }
      dispatch(setLoading(false));
    };
  };
  
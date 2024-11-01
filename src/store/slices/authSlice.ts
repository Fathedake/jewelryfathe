import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginApi,} from '../../services/fetchApi'
export interface UserI {
  _id: string,
  firstname: string,
  lastname: string,
  username?:string,
  email:string,
  avatar?: string,
}
export const  initUser : UserI={_id:'',firstname:'',lastname:'',email:'',username:''}
export interface IAuthState {
  isAuth: boolean,
  isConnectedNow: boolean,
  userLoading: boolean,
  user: UserI,
}

const initialState: IAuthState = {
  isAuth: false,
  isConnectedNow: false,
  userLoading: false,
  user: initUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<UserI>) => {
      state.user = action.payload;
    },
    setIsConnectedNow: (state, action: PayloadAction<boolean>) => {
      state.isConnectedNow = action.payload;
    },
    logOut: (state,) => {
      state.user=initUser
      state.isConnectedNow=false;
      state.isAuth=false;
    },

  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.success == true) {
          state.user = action.payload.user;
          state.isConnectedNow = true;
        }
        state.userLoading = false;
      })
      .addCase(login.rejected, (state, action) => {

        state.userLoading = false;

      })
  }
})
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string, password: string }) => {
    return loginApi({
      password: password,
      email: email,
    }).then((response) => {
      return { success: response.data.success, user: response.data.user || initUser, status: response.data.status,}
    })
      .catch((error) => {
        return { success: false, msg: error.response.err, status: error?.response?.status | 0, user: initUser };
      });
  }
  ,
)
export const { setAuth, setUser, setIsConnectedNow,logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;

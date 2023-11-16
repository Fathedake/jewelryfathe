import { createContext } from "react";
import { UserI } from "@/store/slices/authSlice";
import { initUser } from "@/store/slices/authSlice";
const UserContext=createContext<UserI>(initUser);
export default UserContext;
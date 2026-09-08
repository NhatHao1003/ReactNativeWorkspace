import { createContext } from "react";

type User = {
    name : string
}
export const UserContext = createContext<User | null>(null)




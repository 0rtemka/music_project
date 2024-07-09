import { useEffect, useState } from "react"
import { User } from "../models/models"
import axios from "axios";
import { API_URL } from "../http";

export const useUser = (userId: string) => {
    const [user, setUser] = useState<User>({} as User);
    useEffect(() => {
        axios.get(`${API_URL}/users/${userId}`).then(res => {
            setUser(res.data);
        })
    }, [userId]);
    return user;
}
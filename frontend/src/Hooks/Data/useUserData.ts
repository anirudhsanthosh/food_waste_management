import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UserClient } from "../../Api/user";
import { Configurations } from "../../Config";

export function useUserData() {
    const queryClient = useQueryClient()

    const userData = useQuery('user', UserClient.get, { cacheTime: 60000, staleTime: 60000 })

    const update = useMutation(UserClient.update, {

        onSuccess: () => queryClient.invalidateQueries('user'),

    })

    return { user: userData.data, ...userData, update };
}



export function useLogin() {

    const queryClient = useQueryClient()

    const [ loginData, setLoginData ] = useState<string | null>('');


    const savedLoginData = localStorage.getItem(Configurations.LOGIN_STATUS);

    useEffect(() => {
        setLoginData(savedLoginData)
    }, [ savedLoginData ])


    const setLogin = (data: any) => {
        localStorage.setItem(Configurations.LOGIN_STATUS, JSON.stringify(data));
        setLoginData(JSON.stringify(data))

        queryClient.invalidateQueries('user')

    }

    const setLogout = () => {
        localStorage.removeItem(Configurations.LOGIN_STATUS)
        setLoginData(null)

    }

    return { loginData, setLogin, setLogout };
}
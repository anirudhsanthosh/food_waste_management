import { useQuery } from "react-query";
import { UserClient } from "../../Api/user";

export function useUserData(){
    const userData = useQuery('user',UserClient.get,{cacheTime : 60000,staleTime:60000})

    return {user : userData.data,...userData};
}
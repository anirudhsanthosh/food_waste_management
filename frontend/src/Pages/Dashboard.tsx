import { useUserData } from "../Hooks/Data/useUserData"

export const Dashboard : React.FC = ()=>{

    const {user,isError,isLoading,error,isLoadingError} = useUserData()

    console.log('error ====>',isLoadingError)

    return <div>


        

        {isLoading && <div>loading</div>}
        {isError && <div>error : {JSON.stringify((error as any)?.response?.data)}</div>}
        {user && <div>{JSON.stringify(user)}</div>}
    </div>
}
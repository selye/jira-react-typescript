import { useUsers } from "utils/users"
import { IdSelect } from "./IdSelect"

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
    const {data: users} = useUsers()
    return <IdSelect options={users || []} {...props}/>
}
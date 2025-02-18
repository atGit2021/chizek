import { gql, useQuery } from "@apollo/client"
import { User } from "../models/User"

const GET_CURRENT_USER = gql`
    query getCurrentUser {
        getCurrentUser {
            _id
            email
        }
    }
`;

interface UseGetCurrentUserProps {
    skip?: boolean;
}

const useGetCurrentUser = ({ skip = false }: UseGetCurrentUserProps = {}) => {
    return useQuery<{ getCurrentUser: User }>(GET_CURRENT_USER, { skip })
}

export { useGetCurrentUser }

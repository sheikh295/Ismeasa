import { Navigate } from "react-router-dom"
import { validate as uuidValidate } from 'uuid';

export default function Auth({ children }) {
    if (uuidValidate(sessionStorage.getItem('token'))) {
        return children
    }
    else {
        return <Navigate to={'/'} />
    }
}
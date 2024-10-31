import { Redirect,Route } from "react-router-dom/cjs/react-router-dom";
import Cookie from "js-cookie";


const ProtectedRoute = (props) => {
    const jwt_token = Cookie.get('jwt_token')

    if (jwt_token === undefined) {
        return <Redirect to='/login'/>
    }else {
        return <Route {...props} />
    }
}

export default ProtectedRoute
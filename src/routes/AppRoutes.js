import {Routes, Route} from "react-router-dom"
import TableUsers from '../components/TableUsers';
import Home from '../components/Home';
import Login from '../components/Login';
import PrivateRoute from '../routes/PrivateRoutes';
import NotFound from './NotFound';

const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
            <Route
                path="/users"
                element={
                    <PrivateRoute>
                        <TableUsers />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    )
}

export default AppRoutes;
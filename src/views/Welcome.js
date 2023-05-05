import React, {useEffect} from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import LoadingView from "../components/loading/LoadingView";

export default function Welcome() {
    const user = useSelector(({auth}) => auth.user)
    const navigate = useNavigate();
    const [isLoginView, setIsLoginView] = React.useState(true)
    const isChecking = useSelector(({auth}) => auth.isChecking);


    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, [user, navigate]);

    const toggleView = () => {
        setIsLoginView(!isLoginView)
    }
    if (isChecking) {
        return <LoadingView />
    }
    return (
        <div>
            {isLoginView ? <LoginForm toggleView={toggleView}/> : <RegisterForm toggleView={toggleView}/>}
        </div>

    )
}

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useNavigate} from "react-router-dom";
import {logoutAction} from "../actions/authAction";

export default function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user)
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, dispatch]);

    return (
        <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PaulCode</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">学习</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">题库</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">竞赛</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">讨论</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">求职</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                商店
                            </a>
                            <ul className="dropdown-menu">
                                <li><div className="dropdown-item">精品商城</div></li>
                                <li><div className="dropdown-item">PaulCode周边</div></li>
                                <li><div className="dropdown-item">Plus 会员</div></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto nav-user">
                        <li className="nav-item dropdown">
                            {user && (
                                <div className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <img
                                        src={user.avatar}
                                        alt="User Avatar"
                                        width="30"
                                        height="30"
                                        className="rounded-circle me-2"
                                    />
                                    <span className="small" style={{color: 'wheat'}}>Hi, {user.username}</span>
                                </div>
                            )}
                            <ul className="dropdown-menu">

                                <li><div className="dropdown-item" onClick={() => dispatch(logoutAction())}>退出</div></li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

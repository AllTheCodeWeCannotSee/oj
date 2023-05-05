import React from 'react'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginAction} from "../actions/authAction";


export default function LoginForm({toggleView}) {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(loginAction(formData))
    }


    return (
        <div className="card-container" style={{backgroundColor: "#1a1a1a"}}>
            <div className="card" style={{backgroundColor: "#292929", color: "#fff"}}>
                <h4>
                    账号密码登陆
                </h4>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="邮箱"
                            className="form-control"
                            aria-describedby="emailHelp"
                            autoComplete="off"
                        />

                    </div>
                    <div className="mb-3">
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="输入密码"
                            className="form-control"
                        />
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-warning">登录</button>
                    </div>
                </form>
                <div className="text-sm-start mt-3 ">
                    <small
                        className="small-pointer"
                        onClick={toggleView}>没有账号？注册</small>
                </div>
            </div>
        </div>
    )
}

import React from "react";
import {useForm} from "react-hook-form";
import {registerAction} from "../actions/authAction";
import {useDispatch} from "react-redux";



export default function RegisterForm({toggleView}) {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const onsubmit = (formData) => {
        dispatch(registerAction(formData))
    }

    return (
        <div className="card-container" style={{backgroundColor: "#1a1a1a"}}>
            <div className="card" style={{backgroundColor: "#292929", color: "#fff"}}>
                <h4>
                    注册
                </h4>
                <br/>
                <form onSubmit={handleSubmit(onsubmit)}>
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
                            {...register("username")}
                            type="username"
                            placeholder="输入用户名"
                            className="form-control"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="输入密码"
                            className="form-control"
                            autoComplete="off"
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-warning">注册</button>
                    </div>
                </form>
                <div className="text-sm-start mt-3">
                    <small
                        className="small-pointer"
                        onClick={toggleView}>已有账号？ 登录</small>
                </div>
            </div>
        </div>
    )
}

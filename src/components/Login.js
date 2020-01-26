import React from "react";


class Login extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="h-100  row justify-content-center">
                    <form  className=" mt-5 container-fluid form-horizontal " role="form" method="POST" action="/login">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <h2 style={{color: "red"}} >Please Login</h2>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="form-group has-danger">
                                    <label className="sr-only" for="email">E-Mail Address</label>
                                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div className="input-group-addon" ><i className="fa fa-at"></i></div>
                                        <input type="text" name="email" className="form-control" id="email"
                                            placeholder="you@example.com" required autofocus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-control-feedback">
                                    <span className="text-danger align-middle">
                                        <i className="fa fa-close"></i> Example error message
                               </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="sr-only" for="password">Password</label>
                                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div className="input-group-addon" ><i className="fa fa-key"></i></div>
                                        <input type="password" name="password" className="form-control" id="password"
                                            placeholder="Password" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-control-feedback">
                                    <span className="text-danger align-middle">

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6" >
                                <div className="form-check mb-2 mr-sm-2 mb-sm-0">
                                    <label className="form-check-label">
                                        <input className="form-check-input" name="remember"
                                            type="checkbox" />
                                        <span >Remember me</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-success"><i className="fa fa-sign-in"></i> Login</button>
                                <a className="btn btn-link" href="/password/reset">Forgot Your Password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default Login
import { useState } from "react";

const Login = () =>{
    let[msg, updatemsg] = useState("Enter Your Login Details");
    let[username, pickUsername] = useState("");
    let[pass, pickPassword] = useState("");

    const goLogin = () =>{
        if( username == "" || pass == "" ){
            updatemsg("Empty Email or Password !");
        }else{
            updatemsg("Please Wait Validating...");
            let url = "http://localhost:1234/account?email="+username+"&password="+pass;
            fetch(url)
            .then(response=>response.json())
            .then(userinfo=>{
                if(userinfo.length>0)
                {
                    updatemsg("Success : Redirecting...");
                    localStorage.setItem("sellerid", userinfo[0].id);
                    localStorage.setItem("adminname", userinfo[0].fullname);
                    window.location.reload(); // refresh the current page
                }else{
                    updatemsg("Fail : Invalid Email or Password...");    
                }
            })
        }
    }

    return(
       <section className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className="text-center text-danger"> {msg} </p>
                    <div className="card border-0 shadow-lg">
                       
                        <div className="card-header bg-primary text-white text-center">
                            <i className="fa fa-lock"> </i> Login
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label>e-Mail Id</label>
                                <input type="text" className="form-control"
                                onChange={obj=>pickUsername(obj.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control"
                                onChange={obj=>pickPassword(obj.target.value)}/>
                            </div>
                        </div>

                        <div className="card-footer text-center">
                            <button className="btn btn-danger" onClick={goLogin}>
                                Login <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4"></div>
            </div>
       </section>
    )
}

export default Login;
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full shrink-0 shadow-2xl px-5 py-10 m-20">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Login Now!</h1>
                            <p className="py-3  font-semibold">
                                Don't have an account? <a href="/register" className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold hover:underline">Register Now</a>
                            </p>
                        </div>
                        <form>
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label text-base font-semibold text-[#001931]">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                                {/* password */}
                                <label className="label mt-4 text-base font-semibold text-[#001931]">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover text-base text-[#001931]">Forgot password?</a></div>
                                <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-7 text-white border-none hover:opacity-90 transition-all mt-4 text-base">Login</button>

                                <div>
                                    <p className="divider text-base font-semibold text-[#001931] mt-6">OR</p>
                                </div>

                                <button className="btn btn-outline px-7 hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-[#632EE3] font-semibold text-[#632EE3] hover:text-white transition-all text-base"> <FaGoogle size={20}></FaGoogle> Sign In with Google</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react'; 
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthContext';

const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext); 

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const imgUrl = form.imgUrl.value;
        const password = form.password.value;

        // Firebase Email/Password Registration
        createUser(email, password)
            .then(result => {
                const firebaseUser = result.user;

                // Save user to backend
                const newUser = { 
                    name: name, 
                    email: firebaseUser.email,
                    imgUrl: imgUrl || firebaseUser.photoURL || ''
                };

                return fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                });
            })
            .then(res => res.json())
            .then(data => {
                console.log('data after user saved', data);
                form.reset(); //clear form
            })
            .catch(error => {
                console.log('Registration error:', error);
                alert(error.message); // Show Firebase error
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);

                const newUser = { 
                    name: result.user.displayName, 
                    email: result.user.email,
                    image: result.user.photoURL 
                };

                //create user in database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after user saved', data);
                    });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full shrink-0 shadow-2xl px-5 py-10 m-20">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Register Now!</h1>
                            <p className="py-3 font-semibold">
                                Already have an account? <a href="/login" className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold hover:underline">Login Now</a>
                            </p>
                        </div>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* Name */}
                                <label className="label text-base font-semibold text-[#001931]">Name</label>
                                <input type="text"
                                    name='name'
                                    className="input w-full"
                                    placeholder="Your Name" />

                                {/* email */}
                                <label className="label text-base font-semibold text-[#001931]">Email</label>
                                <input type="email"
                                    name='email'
                                    className="input w-full"
                                    placeholder="Your Email" />

                                {/* image Url */}
                                <label className="label text-base font-semibold text-[#001931]">Image-URL</label>
                                <input type="text"
                                    name='imgUrl'
                                    className="input w-full"
                                    placeholder="Image-URL" />

                                {/* password */}
                                <label className="label mt-4 text-base font-semibold text-[#001931]">Password</label>
                                <input type="password"
                                    name='password'
                                    className="input w-full"
                                    placeholder="Password" />

                                <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-7 text-white border-none hover:opacity-90 transition-all mt-4 text-base">Register </button>

                                <div>
                                    <p className="divider text-base font-semibold text-[#001931] mt-6">OR</p>
                                </div>

                                <button onClick={handleGoogleSignIn} className="btn btn-outline px-7 hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-[#632EE3] font-semibold text-[#632EE3] hover:text-white transition-all text-base"> <FaGoogle size={20}></FaGoogle> Sign Up with Google</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
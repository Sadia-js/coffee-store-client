import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
    const { userSignIn, user, setUser } = useContext(AuthContext);

    const handleSignInSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email);
        userSignIn(email, password)
            .then((result) => {
                const creator = result.user;
                console.log(creator)
                const lastSignIn = creator?.metadata?.lastSignInTime;
                console.log(lastSignIn);
                const updatedUser = { email, lastSignIn };
                axios.patch('http://localhost:3000/users', updatedUser)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.modifiedCount) {
                            Swal.fire({
                                text: 'User added successfully',
                                icon: "success",
                                confirmButtonText: 'Ok'
                            });
                        }
                    })
                // fetch('http://localhost:3000/users', {
                //     method: 'PATCH',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(updatedUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log('user created to db', data);
                //         if (data.insertedId) {
                //             Swal.fire({
                //                 text: 'User added successfully',
                //                 icon: "success",
                //                 confirmButtonText: 'Ok'
                //             });
                //         }
                //     })
            })
            .catch((err) => {
                console.log(err.code)
            })
    }
    return (
        <div className='max-w-6xl mx-auto'>

            <div className="hero bg-base-200 min-h-screen">
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">

                    <h1 className="text-2xl font-bold text-center pt-6">Sign In Now</h1>
                    <form onSubmit={handleSignInSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>

                        </div>
                        <p>Have a new Drinker? <Link to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUpSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email);
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, email, createdAt };
                // using axios
                axios.post('http://localhost:3000/users', newUser)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.insertedId) {
                            Swal.fire({
                                text: 'User added successfully',
                                icon: "success",
                                confirmButtonText: 'Ok'
                            });
                        }
                    })

                // using fetch
                // fetch('http://localhost:3000/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(newUser)
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

                    <h1 className="text-2xl font-bold text-center pt-6">Sign Up Now</h1>
                    <form onSubmit={handleSignUpSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Sign Up or Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
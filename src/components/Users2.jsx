import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Users2 = () => {
    const {isPending, data : users,  isError, error} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/users');
            return res.json();
        }
    })
    if(isPending){
        return <span className="loading loading-spinner text-error"></span>;
    }
    if (isError) {
        return <span>Error: {error.message}</span>
      }
    // const [users, setusers] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/users')
    //     .then(res => res.json())
    //     .then(data => {
    //         setusers(data)
    //         console.log(data)
    //     })
    //     .catch(err => console.log(err.code));
    // }, [])

    const deleteHandling = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirmed')
                // send data to server side
                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            // const remaining = users.filter(user => user._id !== id);
                            // setUsers(remaining);
                            // console.log(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className='max-w-6xl mx-auto'>
            {/* <h2>Users : {users.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Sign in</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user && user.createdAt || 'Not Available'}</td>
                                <td>{user && user.lastSignInTime || 'Not Available'}</td>
                                <td className="space-x-2">
                                    <button className="btn">Edit</button>
                                    <button onClick={() => deleteHandling(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users2;
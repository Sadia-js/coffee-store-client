
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, quantity, name, supplier, taste } = coffee;

    const deleteCoffee = (_id) => {
        // console.log(_id)
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
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount>0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-lg p-6">
                <figure className="w-[50%] rounded-lg">
                    <img className="h-full rounded-lg"
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between w-full ml-4">
                    <div className="space-y-4">
                        <h2 className="card-title">{name}</h2>
                        <p>{supplier}</p>
                        <p>Quantity : {quantity}</p>
                        <p>Taste : {taste}, </p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn btn-neutral">View</button>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn btn-neutral">Edit</button>
                            </Link>
                            <button onClick={() => deleteCoffee(_id)} className="btn bg-red-400 text-white">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
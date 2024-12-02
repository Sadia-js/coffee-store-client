
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        // console.log(newCoffee)

          // send data to the server
      
        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Added Coffee Successfully',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] lg:p-24" >
            <form onSubmit={handleFormSubmit}>
                <div>
                    <h2>Add a coffee</h2>
                    <div className="flex gap-6 mb-7">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input className="input input-bordered w-full" type="text" placeholder="Coffee Name" name="name" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input className="input input-bordered w-full" type="text" placeholder="Available Quantity Name" name="quantity" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-6 mb-7">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Spplier</span>
                            </label>
                            <label className="input-group">
                                <input className="input input-bordered w-full" type="text" placeholder="Coffee Spplier Name" name="supplier"/>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input className="input input-bordered w-full" type="text" placeholder="Taste" name="taste" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-6 mb-7">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input className="input input-bordered w-full" type="text" placeholder="Category Name" name="category" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input className="input input-bordered w-full" type="text" placeholder="Coffee Details" name="details" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-7">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input className="input input-bordered w-full" type="text" placeholder="Coffee Photo URL" name="photo" />
                            </label>
                        </div>
                    </div>
                </div>
            <input type="submit" value="Add Coffee" className="btn bg-black btn-block text-white" />
            </form>
        </div>
    );
};

export default AddCoffee;
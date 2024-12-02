import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Update = () => {
  const updateCard = useLoaderData();
  const { _id, photo, quantity, name, supplier, taste, category, details } = updateCard;
  const handleUpdatedCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
    console.log(updatedCoffee);

    // send data to the server

    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount>0) {
          Swal.fire({
            title: 'Success',
            text: 'Updated Coffee Successfully',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
        }
      })
  }
  return (
    <div className="bg-[#F4F3F0] lg:p-24" >
      <form onSubmit={handleUpdatedCoffee}>
        <div>
          <h2>Update Coffee</h2>
          <div className="flex gap-6 mb-7">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input className="input input-bordered w-full" type="text" placeholder="Coffee Name" name="name" defaultValue={name} />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input className="input input-bordered w-full" type="text" placeholder="Available Quantity Name" name="quantity" defaultValue={quantity} />
              </label>
            </div>
          </div>
          <div className="flex gap-6 mb-7">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Spplier</span>
              </label>
              <label className="input-group">
                <input className="input input-bordered w-full" type="text" placeholder="Coffee Spplier Name" name="supplier" defaultValue={supplier} />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input className="input input-bordered w-full" type="text" placeholder="Taste" name="taste" defaultValue={taste} />
              </label>
            </div>
          </div>
          <div className="flex gap-6 mb-7">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input className="input input-bordered w-full" type="text" placeholder="Category Name" name="category" defaultValue={category} />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input className="input input-bordered w-full" type="text" placeholder="Coffee Details" name="details" defaultValue={details} />
              </label>
            </div>
          </div>
          <div className="mb-7">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input className="input input-bordered w-full" type="text" placeholder="Coffee Photo URL" name="photo" defaultValue={photo} />
              </label>
            </div>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn bg-black btn-block text-white" />
      </form>
    </div>
  );
};

export default Update;
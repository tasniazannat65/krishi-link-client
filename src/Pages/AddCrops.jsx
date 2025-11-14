import React, {  useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Container from '../Container/Container';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddCrops = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleCropSubmit = (e)=>{
        e.preventDefault();
        const cropData = {
            name: e.target.name.value,
            type: e.target.type.value,
            pricePerUnit: parseFloat(e.target.pricePerUnit.value),
            unit: e.target.unit.value,
            quantity: parseInt(e.target.quantity.value),
            description: e.target.description.value,
            location: e.target.location.value,
            image: e.target.image.value,
            owner: {
             ownerEmail: user.email || 'unknowon@gmail.com',
             
             ownerName: user.displayName || 'Unknown farmer'
            }
            



        }
        fetch('https://fasal-bridge-server.vercel.app/crops', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cropData)

        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Crops added successfully!')
            // console.log(data)
            navigate('/my-posts')
        })
        .catch(error=>{
            // console.log(error)
            toast.error('Something went wrong')
        })
    }
    
    return (
       <div>
        <title>FasalBridge Agro Platform || Add Crops</title>
       <Container>
          <div className='text-center pt-14'>
                     <h2 className='font-bold text-2xl md:text-3xl  lg:text-4xl text-[#1B5E20]'> Add New <span className='text-[#F9A825]'>Crop </span></h2>
            <p className=' font-medium text-lg  md:text-xl lg:text-xl text-gray-600 hind-siliguri-font max-w-3xl mx-auto mt-5'>Fill out the form below to list your fresh produce on FasalBridge Your crop will appear in <strong>My Posts</strong> once added successfully.</p>
                </div>
         <div className='bg-white shadow-2xl poppins-font rounded-2xl p-8 w-full mx-auto my-14 max-w-3xl border border-green-200'>
            
                
                <form onSubmit={handleCropSubmit} className='space-y-5'>

                    <div>
            <label className="label font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input  w-full rounded-lg focus:ring-2  focus:ring-green-400"
              placeholder="Enter crop name"
            />
          </div> 
             <div>
            <label className="label font-semibold text-gray-700">Category</label>
            <select
              defaultValue={""}
              name="type"
              required
              className="select w-full rounded-lg focus:ring-2  focus:ring-green-400"
            >
              <option value="" disabled>
                Select crop type
              </option>
              
              <option value="Grain">Grain</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fiber">Fiber</option>
              <option value="Cash Crop">Cash Crop</option>
              <option value="Oilseed">Oilseed</option>
              <option value="Vegetable">Spice</option>
              <option value="Fruit">Fruit</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className='grid grid-cols-2 gap-4'>
                     <div>
            <label className="label font-semibold text-gray-700">Price per unit</label>
            <input
              type="number"
              name="pricePerUnit"
              required
              className="input w-full rounded-lg focus:ring-2  focus:ring-green-400"
              placeholder="e.g. 55"
            />
          </div>
          <div>
            <label className='label font-semibold text-gray-700'>Unit</label>
            <input type="text" name='unit' placeholder='e.g. kg, ton' required className='input w-full rounded-lg focus:ring-2  focus:ring-green-400' />
          </div>
          </div>

                   <div>
            <label className='label font-semibold text-gray-700'>Estimated Quantity</label>
            <input
              type="number"
              name="quantity"
              required
              className="input w-full rounded-lg focus:ring-2  focus:ring-green-400"
              placeholder="e.g. 400"
            />
          </div>
           <div>
            <label className='label font-semibold text-gray-700'>Description</label>
            <textarea
              name="description"
              required
              rows="5"
             className="textarea w-full rounded-lg focus:ring-2  focus:ring-green-400"
              placeholder="Write short crop details..."
            ></textarea>
          </div>
                  <div>
            <label className='label font-semibold text-gray-700'>Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-lg focus:ring-2  focus:ring-green-400"
              placeholder="e.g. Bogura, Rajshahi"
            />
          </div>
             <div>
            <label className='label font-semibold text-gray-700'>Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-lg focus:ring-2  focus:ring-green-400"
              placeholder="https://example.com/image.jpg"
            />
          </div>
           <button
            type="submit"
            className="btn bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-500 hover:to-lime-600 text-white font-semibold w-full rounded-full mt-4"
          >
            Add Crop
          </button>

          


                </form>

           
            
        </div>
       </Container>
       </div>
    );
};

export default AddCrops;
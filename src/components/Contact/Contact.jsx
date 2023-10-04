import React from 'react';
import {useForm} from "react-hook-form";

function Contact() {
   const {register,handleSubmit,formState:{errors}} = useForm();
   
   const onSubmit = (data) => {
    console.log(data);
   };

  return (
    <div className='container'>
      <h2 className='display-3'>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col">
          <div className="form-group my-2">
            <label>
              Name <span className='text-danger'>*</span>
            </label>
            <input type="text"
             className='form-control'
             placeholder='Enter ur name'
             {...register("name",{required:true})}
             />
              {errors.name?.type==="required" && <span className='text-danger'>Name is required</span>}
          </div>
        </div>
        <div className="col">
        <div className="form-group my-2">
            <label>
              Email <span className='text-danger'>*</span>
            </label>
            <input type="email"
             className='form-control'
             placeholder='Enter ur email'
             {...register("email",{required:true})}
             />
             {errors.email?.type==="required" && <span className='text-danger'>Email is required</span>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group my-2">
            <label>
              Phone <span className='text-danger'>*</span>
            </label>
            <input type="text"
             className='form-control'
             placeholder='Enter ur phone'
             {...register("phone",{required:true})}
             />
             {errors.phone?.type==="required" && <span className='text-danger'>Phone no is required</span>}
          </div>
        </div>
        <div className="col">
        <div className="form-group my-2">
            <label>
              Website <span className='text-danger'>*</span>
            </label>
            <input type="text"
             className='form-control'
             placeholder='Enter ur website'
             {...register("website",{required:true})}
             />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>
            Message <span className='text-danger'>*</span>
          </label>
          <textarea 
          cols={4}
          rows={5}
          className='form-control'
          name='message'
          placeholder='Enter ur message'
          {...register("message",{required:true})}
          />
        </div>
      </div>
      <div className="row my-2">
        <small className='text-danger'><span className='text-danger'>*</span> Require Field</small>
      </div>
      <div className='row'>
        <div className="col">
          <button className='btn btn-dark my-2 w-25'>Send Message</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Contact

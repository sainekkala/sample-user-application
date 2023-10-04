import React, { useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useTheme} from '../Context/UseContext';

function User() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const {theme} =useTheme();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      setUser(res.data);
      setLoading(false);
    })
    .catch(err => console.log(err));
  },[id]);

  console.log(user);

  return (
    <div className='container'>
       <h2 className='diasplay-4'>User Details</h2>
       <div className="row">
        {loading ? (<h1>loading....</h1>):(
         <>
            <div className="col-md-6 my-2">
            <div className={`card bg-${theme}`}>
              <div className="card-body">
                <div className="p1-2 card-title dispaly-6">{user.name}</div>
                 <ul className="list-group my-3">
                  <li className="list-group-user">
                    <strong>Username :</strong>
                    {user.username}
                  </li>
                  <li className="list-group-user">
                    <strong>Email :</strong>
                    {user.email}
                  </li>
                  <ul className="list-group my-3">
                    <strong>Address Details: </strong>
                    <li className="mx-2">
                      <strong>Street: </strong>
                      {user.address.street}
                    </li>
                    <li className="mx-2">
                      <strong>Suite </strong>
                      {user.address.suite}
                    </li>
                    <li className="mx-2">
                      <strong>City: </strong>
                      {user.address.city}
                    </li>
                    <li className="mx-2">
                      <strong>Zipcode: </strong>
                      {user.address.zipcode}
                    </li>
                  </ul>
                  <li className="list-group-user">
                    <strong>Phone: </strong>({user.phone})
                  </li>
                  <li className="list-group-user">
                    <strong>Website: </strong>
                    {user.website}
                  </li>
                  <ul className="list-group mt-2">
                    <strong>Company Details: </strong>
                    <li className="mx-2">
                      <strong>Name: </strong>
                      {user.company.name}
                    </li>
                    <li className="mx-2">
                      <strong>Catch Phrasey: </strong>
                      {user.company.catchPhrase}
                    </li>
                    <li className="mx-2">
                      <strong>BS: </strong>
                      {user.company.bs}
                    </li>
                  </ul>
                 </ul>
                 <div className='text-center'>
                 <button className='btn btn-outline-dark' onClick={() => navigate('/users')}>Back to Users</button>
                 </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 my-2'>
            <div className="img-thumbnail">
            <img
                className="card-img-top"
                src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Users Photos"
              />
              <p className="text-center lead mt-2">{user.name}'s Photo</p>
            </div>
          </div>
         </>
        )}
       </div>
    </div>
  )
}

export default User

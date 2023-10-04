import React, { useEffect, useState } from 'react';
import  {Link} from "react-router-dom";
import axios from 'axios';
import {useTheme} from '../Context/UseContext';

function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      setData(res.data);
      setLoading(false);
    })
    .catch(err => console.log(err));
  },[])
  console.log(data)
  return (
    <div className='container'>
       <h2 className='display-4'>Users</h2>
      <div className="row">
        {loading ? (<h1 className='display-5'>loading....</h1>):(
          data?.map((user) => {
            return (
              <div className='col-md-3 my-2' key={user.id}>
                <div className={`card bg-${theme}`}>
                  <div className='w-100'>
                    <img 
                    className='card-img-top'
                    src='https://images.unsplash.com/photo-1642425149819-af1b803b2b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt='user-photo'
                    />
                  </div>
                  <div className="card-body">
                    <h5 className='pl-2 card-title'>{user.name}</h5>
                      <ul className="list-group my-3">
                        <li className="list-group-user">
                          <strong>Username: </strong>
                          {user.username}
                        </li>
                        <li className="list-group-user">
                          <strong>Email: </strong>
                          {user.email}
                        </li>
                        <li className="list-group-user">
                          <strong>Phone: </strong>
                          {user.phone}
                        </li>
                     </ul>
                     <Link className='btn btn-outline-danger' to={`/users/${user.id}`}>Show More Data</Link>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>      
    </div>
  )
}

export default Users

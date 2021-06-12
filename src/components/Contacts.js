import React from 'react'
import './css/bootstrap.min.css';
import Table from './Table';
    const action = [
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-sm btn-primary">Update</button>
      <button type="button" class="btn btn-sm btn-danger">Delete</button>
    </div>
  ];

const Contacts = () => {
   

    return (
        <div className="contactstable">
            
        <Table/>
        </div>
    )
}

export default Contacts

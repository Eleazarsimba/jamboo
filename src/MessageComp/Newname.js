import React from 'react'

const Newname = () => {
    return (
        <form className="newcontact">
                <div className="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputTwitter">Twitter</label>
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter twitter"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputIg">Instagram</label>
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter instagram"/>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
    )
}

export default Newname

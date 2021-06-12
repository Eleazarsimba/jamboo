import React from 'react'

const Newtxt = () => {
    return (
            <form className="newmail">
                <h4>Compose new Email</h4>
                <div className="form-group">
                    <label for="exampleInputEmail1">Receiver</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                 </div>
                <div class="form-group">
                    <label for="exampleInputsubject">Subject</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputmessage">Compose</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
    )
}

export default Newtxt

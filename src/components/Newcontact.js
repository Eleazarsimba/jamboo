import React from 'react'
import {Link} from 'react-router-dom';

const Newcontact = () => {
    return (
        <div className="newadd" >
            <Link to='/newcontact' className="menulist"><button type="button" class="btn btn-sm btn-primary">NEW CONTACT</button></Link>
        </div>
    )
}

export default Newcontact

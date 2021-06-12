import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import {BrowserRouter  as Router} from 'react-router-dom';
import Contacts from './Contacts';
import Account from './Account';
import History from './History';
import Communications from './Communications';
import Newtxt from '../MessageComp/Newtxt';
import Newname from '../MessageComp/Newname';

const Mainmenu1 = () => {
    return (
        <Router>
        <div className="body1">
           <div className="mainmenu"> 
            <ul style={{listStyleType:'none'}}>
                <Link to='/' className="menulist"><li>Account</li></Link>
                <Link to='/contacts' className="menulist"><li>Contacts</li></Link>
                <Link to='/history' className="menulist"><li>History</li></Link>
                <Link to='/communication' className="menulist"><li>Chats</li></Link>
            </ul>
            </div>
        <div className="body2">
          <Switch>
            <Route path="/" exact component={Account} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/history" exact component={History} />
            <Route path="/communication" exact component={Communications} />

            <Route path="/newtxt" exact component={Newtxt} />
            <Route path="/newcontact" exact component={Newname} />
          </Switch>
          
        </div>
        </div>
        </Router>
    )
}

export default Mainmenu1

import React from 'react';
import Newcontact from './Newcontact';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import {Link} from 'react-router-dom';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

const action = [
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-sm btn-primary">Update</button>
        <button type="button" class="btn btn-sm btn-danger">Delete</button>
     </div>
 ];
 const chat = [
     <div>
         <Link to='/newtxt' className="menulist"><button type="button" class="btn btn-sm btn-primary">Message</button></Link>
    </div>
 ];
class App extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
        $('#example').DataTable();
    });
 }
  render(){
    //Datatable HTML
  return (
     <div className="MainDiv">
       
        <div className="contactinfo">
            <div className="contactheading">
                <h3 style={{paddingLeft:'20px', paddingTop:'10px'}}>Contact infomation</h3>
            </div>
            <Newcontact />
        </div>
      <div className="container">
          
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Twitter</th>
                    <th>Instagram</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Eleazar Simba</td>
                    <td>eleazarsimba5@gmail.com</td>
                    <td>eleazar_705</td>
                    <td>eleazar.simba</td>
                    <td>{action}</td>
                    <td>{chat}</td>
                </tr>
                <tr>
                    <td>Aaron Nzuva</td>
                    <td>aaron@gmail.com</td>
                    <td>elaron_05</td>
                    <td>aaron98</td>
                    <td>{action}</td>
                    <td>{chat}</td>
                </tr>
                <tr>
                    <td>Sammy Kioko</td>
                    <td>kiokosamm@gmail.com</td>
                    <td>sammy_kioko</td>
                    <td>kiokosam</td>
                    <td>{action}</td>
                    <td>{chat}</td>
                </tr>
                <tr>
                    <td>Willy Kosgei</td>
                    <td>kipkosgei@gmail.com</td>
                    <td>kosgei123</td>
                    <td>kosgei</td>
                    <td>{action}</td>
                    <td>{chat}</td>
                </tr>
                <tr>
                    <td>Onyango Tom</td>
                    <td>onyango95@gmail.com</td>
                    <td>am_onyash5</td>
                    <td>tom_nyash</td>
                    <td>{action}</td>
                    <td>{chat}</td>
                </tr>
            </tbody>
        </table>
          
        </div>
      </div>
  );
}
}
export default App;
import React from 'react'
import {Link} from 'react-router-dom';

const Inbox = () => {

    const chat = [
        <div>
            <Link to='/newtxt' className="menulist"><button type="button" class="btn btn-sm btn-primary">New Message</button></Link>
       </div>
    ];

    return (
		<div class="container-fluid h-100">
			<div class="row justify-content-center h-100">
				<div class="col-md-4 col-xl-3 chat">
                    <div class="card mb-sm-3 mb-md-0 contacts_card">
					
                    <div class="card-header">
						<div class="input-group" >
							<input type="text" placeholder="Search..." name="" class="form-control search" />
						</div>
					</div>


					<div class="card-body contacts_body">
						<ul class="contacts">
                        <li>
							<div class="d-flex bd-highlight">
								<div class="user_info">
									{chat}
								</div>
							</div>
						</li>
						<li class="active">
							<div class="d-flex bd-highlight">
								<div class="user_info">
									<span>Aaron</span>
									<p>Aaron is online</p>
								</div>
							</div>
						</li>
						</ul>
					</div>
					<div class="card-footer"></div>
				</div></div>


				<div className="col-md-8 col-xl-6 chat">
					<div class="card">
						
							<div class="d-flex bd-highlight">  
                                <div class="user_info" style={{fontWeight:'bold'}}>
									<span>Chat with Aaron</span>
									<p>17 Messages</p>
								</div>
                            </div>

						<div class="card-body msg_card_body">
							<div class="d-flex justify-content-start mb-4">
								<div class="msg_cotainer">
									Hi, how are you Aaron?
									<span class="msg_time">8:40 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Hi i am good tnx how about you?
									<span class="msg_time_send">8:55 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="msg_cotainer">
									I am good too, thank you for your chat template
									<span class="msg_time">9:00 AM, Today</span>
								</div>
							</div>
						</div>



						<div class="card-footer">
                            <div class="input-group" >
							    <input type="text" placeholder="Type your message here" name="" class="form-control search" />
						    </div>
						</div>

					</div>
				</div>
			</div>
		</div>
       

    )
}

export default Inbox

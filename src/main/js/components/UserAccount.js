import React from "react";
import UserCount from "./UserCount"
import AccountItem from "./AccountItem";

export default class UserAccount extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			 users: [] 
		}
	}

  render() {
		if (this.state.users.length == 0) {	
			fetch('/api/v1/user/list/')
			.then((response) => {
				return response.json();
			})			
			.then((user) => {
        		this.setState({ users: user })
			  })

			
		}
		if (this.state.users.length > 0) {

			var totalDelSaldo = 0;
			for (var i = 0; i < this.state.users.length; i++) {
				totalDelSaldo+=this.state.users[i].saldo;
			}
		
			var userItems = [];
			this.state.users.forEach(
				(usuario) => {
					userItems.push(<AccountItem user={usuario} />)
				}
			)
		
		return (
				<div>
					{userItems}
					
					<UserCount  count={userItems.length} total={totalDelSaldo}/>
				</div>
			)
			
		
		} else {
			return <p className="text-center">Loading users...</p>
		}


    
  }
}
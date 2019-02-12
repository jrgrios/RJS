import React from "react";
import UserCount from "./UserCount"
import AccountItem from "./AccountItem";

export default class UserAccount extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			 users: [] ,
			 total :""
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
			  
			fetch('/api/v1/user/listSuma/')
			.then((response) => {
				return response.json();
			})			
			.then((total) => {
        		this.setState({ total: total })
      		})
			
		}

		if (this.state.users.length > 0) {
		
			var userItems = [];
			///prueba mia JR
			var totalCalculado=this.state.total;
			//
			this.state.users.forEach(
				(usuario) => {
					userItems.push(<AccountItem user={usuario} />)
				}
			)
		
		return (
				<div>
					{userItems}
					
					<UserCount  count={userItems.length} total={totalCalculado}/>
				</div>
			)
			
		
		} else {
			return <p className="text-center">Loading users...</p>
		}


    
  }
}
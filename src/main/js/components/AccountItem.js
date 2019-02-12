import React from "react";
import Delete from "./Delete"
export default class AccountItem extends React.Component {

	constructor(props) {
		super(props)
	}

  render() {

    const { user } = this.props;
  
    return (
      <div class="well col-md-4 col-md-offset-4" key={user.numeroCuenta}>
        Numero de cuenta: {user.numeroCuenta} saldo: {user.saldo}<br/>
        <Delete id={user.numeroCuenta}/>
      </div> 
    );
  }
}

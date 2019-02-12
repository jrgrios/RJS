import React from "react";


export default class UserCount extends React.Component {

	constructor(props) {
		super(props)
		this.state = { 
			count: props.count,
			totalisimo:props.total
		
		}
	}

  render() {
		
		return (
				<div>
					se muestran {this.state.count} elementos , con un total de {this.state.totalisimo}
				</div>
			)
		

    
  }
}
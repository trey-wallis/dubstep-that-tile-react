import React, { Component } from 'react';

class Register extends Component {

	render(){
		const {ui, domain} = this.props;
		
		return(
		<div className="Register h-100 relative flex justify-center">
			<button className="absolute bottom-2 bg-color--empty outline--none bw0 dim f3" onClick={ () => {ui.setRoute("title")} } >Back</button>
		</div>
		);
	}
}

export default Register;
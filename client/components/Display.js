import React from 'react';

const Display = React.createClass({

	handleSubmit(e){
		e.preventDefault();
		const text = this.refs.input.value;
		if(this.props.data === "rev")
		this.props.textToReverse(text);
		else if(this.props.data==="pal")
			this.props.textToPal(text);
		else
			this.props.textToQuo(text);
		this.refs.form.reset();



	},
	render(){
		return(
			<form className="form" ref="form" onSubmit={this.handleSubmit} >
				<input className="reverseInput" type="text" ref="input" placeholder="Please enter text"/>
			</form>
			)
	}
})

export default Display;
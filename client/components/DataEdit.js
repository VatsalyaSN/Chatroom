import React from 'react';

const Data = React.createClass({
	handleSubmit(){
		var input = this.refs.input.value;
		console.log("INPUT FROM EDIT SUB", input)
		if(this.props.section === "r")
		{
			this.props.handleEdit(input,this.props.editItem);
			this.props.handleCancel("r");
		}
		else if(this.props.section === "p"){
		 	this.props.palhandleEdit(input,this.props.editItem);
		 	this.props.handleCancel("p");
		}
		else{
			console.log("QQQQQQQQQQQQQQQQQ")
		 	this.props.quohandleEdit(input,this.props.editItem);
		 	this.props.handleCancel("q")
		}
	},

	render(){
		console.log("IN DSATA DISPLAY");
		return(

			<div className="editComp">
			<h5 className="textEdit"> Edit text</h5>
				<input className="editInput" type="text" defaultValue={this.props.editItem.data} ref="input" />
				<button className="submit" type="submit" onClick={this.handleSubmit}>Submit</button>
				<button className="dataCancel" onClick={this.props.handleCancel}>Cancel</button>
			</div>

			)
	}
})

export default Data;
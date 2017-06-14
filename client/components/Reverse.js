import React from 'react';
import Display from './Display';
import DataEdit from './DataEdit';

const Reverse = React.createClass({

	handleEditfunction(item,i){
		var item_new={
			data : item.data,
			id : item.id,
			rid : i
		}
		this.props.handleEditCheck(item_new)
		
	},

	renderItems(item,i){
		console.log("i", i,item)
		return(
			<div className="item" key={i} >
			<span className="editCancel" onClick={()=>this.props.handleDelete(item.id,i)}>&times;</span>
			<div onClick={()=>this.handleEditfunction(item,i)}>
			<h4 className="dataDisplay"><span className="subs">actual text : </span>{item.data}</h4>
			<h4 className="resultDisplay"><span className="subs">reversed : </span>{item.result}</h4>
			</div>
			</div>
			)
	},

	render(){
		return(
			<div className="reverse">
			<h4 className="heading">Reverse</h4>
			{
				this.props.editCheck ? <DataEdit handleCancel={this.props.handleCancel} 
				handleEdit={this.props.handleEdit} editItem={this.props.editItem} section="r"/> 
				: 
				" "
			}
			<div className="content">
			{
				this.props.reverseData.map(this.renderItems)
			}
			</div>
			
			<Display textToReverse={this.props.textToReverse} data="rev"/>
			</div>
		)	
	}
})

export default Reverse;
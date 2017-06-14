import React from 'react';
import Display from './Display';
import DataEdit from './DataEdit';

const Quotes = React.createClass({

	handleEditfunction(item,i){
		var item_new={
			data : item.data,
			id : item.id,
			rid : i
		}
		this.props.qhandleEditCheck(item_new)
		
	},

	renderItems(item,i){
		console.log("i", i,item)
		return(
			<div className="item" key={i}>
			<span className="editCancel" onClick={()=>this.props.quohandleDelete(item.id,i)}>&times;</span>
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
			<h4 className="heading">Quotes</h4>
			{
				this.props.quoeditCheck ? <DataEdit handleCancel={this.props.handleCancel} 
				quohandleEdit={this.props.quohandleEdit} editItem={this.props.quoeditItem} section="q"/> 
				: 
				" "
			}
			<div className="content">
			{
				this.props.quoData.map(this.renderItems)
			}
			</div>
			
			<Display textToQuo={this.props.textToQuo} data="quo"/>
			</div>
		)	
	}
})

export default Quotes;
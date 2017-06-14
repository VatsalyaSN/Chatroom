import React from 'react';
import Display from './Display';
import DataEdit from './DataEdit';

const Palindrome = React.createClass({

	handleEditfunction(item,i){
		var item_new={
			data : item.data,
			id : item.id,
			rid : i
		}
		this.props.phandleEditCheck(item_new)
		
	},

	renderItems(item,i){
		console.log("i", i,item)
		if(item.result){
		return(
			<div className="item" key={i} >
			<span className="editCancel" onClick={()=>this.props.palhandleDelete(item.id,i)}>&times;</span>
			<div onClick={()=>this.handleEditfunction(item,i)}>
			<h4 className="dataDisplay"><span className="subs">actual text : </span>{item.data}</h4>
			<h4 className="resultDisplay"><span className="subs">reversed : </span>{item.result.toString()}</h4>
			</div>
			</div>
			)
	}
	},

	render(){
		return(
			<div className="reverse">
			<h4 className="heading">Palindrome</h4>
			{
				this.props.paleditCheck ? <DataEdit handleCancel={this.props.handleCancel} 
				palhandleEdit={this.props.palhandleEdit} editItem={this.props.paleditItem} section="p"/> 
				: 
				" "
			}
			<div className="content">
			{
				this.props.palData.map(this.renderItems)
			}
			</div>
			
			<Display textToPal={this.props.textToPal} data="pal"/>
			</div>
		)	
	}
})

export default Palindrome;
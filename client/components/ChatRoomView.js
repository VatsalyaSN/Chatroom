import React from 'react';
import Reverse from './Reverse';
import Quotes from './Quotes';
import Palindrome from './Palindrome';


const ChatRoomView = React.createClass({
	render(){
		const {reverseData, textToReverse,editItem,editCheck, handleDelete,
		 handleEdit,handleEditCheck,handleCancel,paleditCheck,paleditItem,palData,
		 textToQuo,textToPal,quoData,quoeditItem,quoeditCheck,palhandleDelete,quohandleDelete,
		 qhandleEditCheck, phandleEditCheck,quohandleEdit,palhandleEdit} = this.props;
		return(
			<div>
			<Reverse reverseData={reverseData} textToReverse={textToReverse} handleEdit={handleEdit}
			handleDelete={handleDelete} editCheck={editCheck} editItem={editItem} 
			handleEditCheck={handleEditCheck} handleCancel={handleCancel}/>
			<Quotes quoData={quoData} textToQuo={textToQuo} quohandleEdit={quohandleEdit}
			quohandleDelete={quohandleDelete} quoeditCheck={quoeditCheck} quoeditItem={quoeditItem} 
			qhandleEditCheck={qhandleEditCheck} handleCancel={handleCancel}/>
			<Palindrome palData={palData} textToPal={textToPal} palhandleEdit={palhandleEdit}
			palhandleDelete={palhandleDelete} paleditCheck={paleditCheck} paleditItem={paleditItem} 
			phandleEditCheck={phandleEditCheck} handleCancel={handleCancel}/>
			</div>
			)
	}
})

export default ChatRoomView;
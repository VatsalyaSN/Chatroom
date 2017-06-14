export function textToReverse(item){
	return{
		type:"REVERSE",
		item
	}
}

export function handleEdit(text,item){
	return{
		type : "EDIT",
		text,
		item
	}
}

export function handleDelete(id,i){
	return{
		type : "DELETE",
		id,
		i
	}
}

export function handleEditCheck(item){
	return{
		type:"BUTTON_STATE",
		item
	}
}

export function handleCancel(section){
	var actionType;
	if(section === "r")
		actionType = "CANCEL";
	else if(section === "p")
		actionType = "CANCEL_PAL"
	else
		actionType = "CANCEL_QUO"

	return{
		type : actionType
	}
}

export function textToPal(item){
	return{
		type:"PALINDROME",
		item
	}
}

export function textToQuo(item){
	return{
		type:"QUOTES",
		item
	}
}

export function palhandleDelete(id,i){
	return{
		type : "DELETE_PAL",
		id,
		i
	}
}

export function quohandleDelete(id,i){
	return{
		type : "DELETE_QUO",
		id,
		i
	}
}

export function qhandleEditCheck(item){
	return{
		type:"BUTTON_STATE_QUO",
		item
	}
}

export function phandleEditCheck(item){
	return{
		type:"BUTTON_STATE_PAL",
		item
	}
}

export function quohandleEdit(text,item){
	console.log("quohandleEdit")
	return{
		type : "EDIT_QUO",
		text,
		item
	}
}

export function palhandleEdit(text,item){
	return{
		type : "EDIT_PAL",
		text,
		item
	}
}
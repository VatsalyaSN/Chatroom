function handleReverse(state,item){
	// console.log(item)
	var revText = item.split('').reverse().join('')
	// console.log("REVERSED ",revText);
	var unid = 'id' + (new Date()).getTime();
	var newArr = {
		id : unid, 
		data : item,
		result : revText
	}
	return Object.assign({},state,
		{
			reverseData : [...state.reverseData,newArr]})
	
}

function handleEdit(state,text,item){
	var revText = text.split('').reverse().join('')
	var newArr = {
		id : item.id,
		data : text,
		result: revText
	}
	var x = [...state.reverseData.slice(0,item.rid),
					newArr,
					...state.reverseData.slice(item.rid)]
	console.log("WORKED>>>", x)
	return Object.assign({},state,
		{
			reverseData:[...state.reverseData.slice(0,item.rid),
							newArr,
						...state.reverseData.slice(item.rid+1)]
		})
}



function reverseReducer(state={},action){
	console.log("SDFSDF")
	switch(action.type){
		case "REVERSE":
			return handleReverse(state,action.item);

		case "EDIT":
			return handleEdit(state,action.text,action.item);

		case "DELETE":
			return Object.assign({},state,{
				reverseData : [...state.reverseData.slice(0,action.i),
					...state.reverseData.slice(action.i+1)],
					editCheck : false
			});
			break;

		case "BUTTON_STATE":
			return Object.assign({},state,{
				editItem : action.item,
				editCheck : true
			});

		case "CANCEL":
			return Object.assign({},state,{editCheck : false});

		default : 
			return state;
	}
}

export default reverseReducer;
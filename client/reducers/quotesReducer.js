function handleQuotes(state,item,x){
	var text = item.split(' ');
	var quoText = [];
	for(var i=0;i<text.length;i++){
		quoText.push('"'+text[i]+'"');
	}
	quoText = quoText.join(' ');
	var unid = 'id' + (new Date()).getTime();
	var newArr={};

	if(x === 0)
	{
		console.log("SDFSDFSDFSDFSDFSD===")
		newArr={
		id: unid,
		data:item,
		result : quoText
		}
		return Object.assign({},state,{
			quoData : [...state.quoData,newArr]
				})
	}
	
	else{
		console.log("MMMMMMMMMM")
		newArr={
			id:x.id,
			data : item,
			result : quoText
		}
		return Object.assign({},state,{
			quoData : [...state.quoData.slice(0,x.rid),
						newArr,
						...state.quoData.slice(x.rid+1)]
		})
	}
}


function quotesReducer(state=[],action){
	switch(action.type){
		case "QUOTES":
			return handleQuotes(state,action.item,0);

		case "DELETE_QUO":
			return Object.assign({},state,{
				quoData : [...state.quoData.slice(0,action.i),
					...state.quoData.slice(action.i+1)],
					quoeditCheck : false
			});
			break;

		case "BUTTON_STATE_QUO":
			return Object.assign({},state,{
				quoeditItem : action.item,
				quoeditCheck : true
			});

		case "CANCEL_QUO":
			return Object.assign({},state,{quoeditCheck : false});

		case "EDIT_QUO":
			return handleQuotes(state,action.text,action.item);

		default : 
			return state;
	}
}

export default quotesReducer;
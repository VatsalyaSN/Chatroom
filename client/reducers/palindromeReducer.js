function handlePal(state,item,x){
	var words = item.split(' ');
	var palText = [];
	var test;
	console.log("words", words.toString())
	for(var i=0;i<words.length;i++){
		test = words[i].split('').reverse().join('');
		if(test === words[i])
			palText.push(test)
	}


	var actualText = item.toLowerCase().match(/[a-z]/g).join('');
	var text = item.split('').reverse().join('');
	text = text.toLowerCase().match(/[a-z]/g).join('');
	
	console.log(palText.toString());
	var newArr = [];
	var unid = 'id'+(new Date()).getTime();
	if(x !== 0)
	{
		unid = x.id;
	}

	if(text === actualText){
		palText.push(text);
		console.log("true",palText,item)
	}
	newArr = {
			id : unid,
			data : item,
			result : palText
		}
	if(palText.length === 0){
		newArr = {
			id : unid,
			data : item,
			result : "No Palindrome found"
		}
	}

	if(x === 0)
	{
	return Object.assign({},state,{
			palData : [...state.palData,newArr]
			})
	}
	else{
		return Object.assign({},state,{
			palData : [...state.palData.slice(0,x.rid),
				newArr,
				...state.palData.slice(x.rid+1)]
		})
	}

}

function quohandleEdit(state,text,item){

}

function palindromeReducer(state=[],action){
	switch(action.type){
		case "PALINDROME":
			return handlePal(state,action.item,0);

		case "DELETE_PAL":
			return Object.assign({},state,{
				palData : [...state.palData.slice(0,action.i),
					...state.palData.slice(action.i+1)],
					paleditCheck : false
			});
			break;

		case "BUTTON_STATE_PAL":
			return Object.assign({},state,{
				paleditItem : action.item,
				paleditCheck : true
			});

		case "CANCEL_PAL":
			return Object.assign({},state,{paleditCheck : false});

		case "EDIT_PAL":
			return handlePal(state,action.text,action.item);

		default : 
			return state;
	}
}

export default palindromeReducer;
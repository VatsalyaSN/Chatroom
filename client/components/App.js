import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state){
	return{
		reverseData : state.reverse.reverseData,
		editCheck : state.reverse.editCheck,
		editItem : state.reverse.editItem,
		palData: state.palindrome.palData,
		paleditCheck : state.palindrome.paleditCheck,
		paleditItem : state.palindrome.paleditItem,
		quoData : state.quotes.quoData,
		quoeditItem : state.quotes.quoeditItem,
		quoeditCheck : state.quotes.quoeditCheck
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;
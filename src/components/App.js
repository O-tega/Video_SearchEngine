import React from "react";
import SearchBar from "./SearchBarComponent";
import Youtube from '../Apis/Youtube'

class App extends React.Component {
	onTermSubmit = (item)=> {
		Youtube.get('/search', {
			params:{
				q:'item'
			}
		})

	}

	render() {
		return (
			<div>
				<SearchBar onSubmitForm={this.onTermSubmit}/>
			</div>
		);
	}
}

export default App;

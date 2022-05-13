import React from "react";
import SearchBar from "./SearchBarComponent";
import Youtube from "../Apis/Youtube";

class App extends React.Component {
	state = { videos: [] };

	onTermSubmit = async (item) => {
		const response = await Youtube.get(
			"/search",
			{
				params: {
					q: item,
				},
			}
		);

		console.log(response.data.items);
		this.setState({
			videos: response.data.items,
		});
	};

	render() {
		return (
			<div>
				<SearchBar
					onSubmitForm={
						this.onTermSubmit
					}
				/>
				<h1 className='text-center text-xs text-blue-500 mt-10'>
					found {this.state.videos.length}videos
				</h1>
			</div>
		);
	}
}

export default App;

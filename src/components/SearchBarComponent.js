import React from "react";

class SearchBar extends React.Component {
    state={item: ''}

 handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state.item)

		this.props.onSubmitForm(this.state.item)
    }




	render() {
		return (
			<div className=' flex justify-center mt-8'>
				<div className='w-6/12 flex-wrap'>
					<form
						onSubmit={this.handleSubmit}
						className='flex items-center'
					>
						<label
							className='sr-only'
						>
							Search
						</label>
						<div className='relative w-full'>
							<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
								<svg
									className='w-5 h-5 text-gray-500 dark:text-gray-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										// fill-rule='evenodd'
										d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
										// clip-rule='evenodd'
									></path>
								</svg>
							</div>
							<input
								type='text'
								value={this.state.item}
								onChange={(e) =>
									this.setState({
										item: e.target
											.value,
									})
								}
								id='simple-search'
								className='bg-gray-50 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-300 dark:placeholder-gray-400 dark:text-gray-700'
								placeholder='Search'
								required=''
							/>
						</div>
						<button
							type='submit'
							className='p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									// stroke-linecap='round'
									// stroke-linejoin='round'
									// stroke-width='2'
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								></path>
							</svg>
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchBar;

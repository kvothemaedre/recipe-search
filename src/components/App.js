import React from 'react';
import "./App.css";
import Recipe from "./Recipe.js";


const apiid = `enter your api-id`
const apikey = `enter your api-key`
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			GetRecipe: [],
			search: "",
			query: ""
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}


	handleSearch(event) {
		const { value, name } = event.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.setState({
			query: this.state.search
		})
		this.setState({
			loading: true
		})
		fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=${apiid}&app_key=${apikey}`)
			.then(response => response.json())
			.then(data => this.setState({
				GetRecipe: data.hits
			}))
			.then(data => console.log(data))
		this.setState({
			loading: false
		})
	}


	render() {

		return (
			<div className="mega-container">
				<div className="container">
					<form className="search-form" onSubmit={this.handleSubmit} >
						<input type="text"
							className="search-bar"
							value={this.state.search}
							onChange={this.handleSearch}
							name="search" />
						<button className="search-button" type="submit" name="query" >Search</button>
					</form>
				</div>
				<article className="results">{this.state.GetRecipe.map(recipe => (
					<Recipe title={recipe.recipe.label} key={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories} />
				)
				)}
				</article>

			</div>
		)
	}
}

export default App;

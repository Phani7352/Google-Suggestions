// Write your code here

import {Component} from 'react'
import SuggestionItems from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  displySuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="googlelogo"
          className="google-img"
        />
        <div className="google-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="searchicon"
              className="search-logo"
            />
            <input
              type="search"
              onChange={this.searchUserInput}
              className="search"
            />
          </div>
          <ul className="ul-container">
            {filteredList.map(eachResult => (
              <SuggestionItems
                item={eachResult}
                displySuggestion={this.displySuggestion}
                key={eachResult.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

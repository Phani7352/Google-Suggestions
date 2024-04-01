// Write your code here
import './index.css'

const SuggestionItems = props => {
  const {item, displySuggestion} = props
  const {Suggestion} = item

  const onClickButton = () => {
    displySuggestion(Suggestion)
  }

  return (
    <li className="container">
      <p>{Suggestion}</p>
      <button onClick={onClickButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}

export default SuggestionItems

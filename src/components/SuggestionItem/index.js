// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, updateSearchInput} = props
  const {suggestion} = details
  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button
        className="arrow-button"
        type="button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

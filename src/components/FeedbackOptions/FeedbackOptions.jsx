import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.optionsList}>
      {options.map(optionElem => (
        <li className={css.optionItem} key={optionElem}>
          <button className={css.optionButton} name={optionElem} onClick={onLeaveFeedback}>
            {optionElem.charAt(0).toUpperCase() + optionElem.slice(1)}
          </button>
        </li>
      ))}
    </ul>
)}
  

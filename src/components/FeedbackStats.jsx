import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)    // Access values from FeedbackContext

    // Calculate Ratings Average
    let average = feedback.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')   // `toFixed()` set to 1 decimal point - `replace()` set to regex that gets rid of 0, so it shows full number when applicable

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
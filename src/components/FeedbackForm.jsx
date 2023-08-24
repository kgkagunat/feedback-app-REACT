import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('');                   // Set state to empty string, when send button clicked
    const [rating, setRating] = useState(10);               // Set rating to default 10
    const [btnDisabled, setBtnDisabled] = useState(true);   // isDisabled set `true` by default, dynamically change when 10 letters are typed
    const [message, setMessage] = useState('');             // Used for validation, shows a message

    // Grabbing functions from the `FeedbackContext`
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    // Change state when user clicks edit button on feedback items, it transfers to the feedback form.
    useEffect(() => {
        if (feedbackEdit.edit = true) {
            setBtnDisabled(false);                  // Button is turned active
            setText(feedbackEdit.item.text);        // Text contains the item text 
            setRating(feedbackEdit.item.rating);    // Rating contains rating select
        }
    }, [feedbackEdit])  // feedbackEdit is the dependency state

    // This checks for text verification
    const handleTextChange = (event) => {
        if (text === '') {                  // If no text in <input> field...
            setBtnDisabled(true);           // Button is disabled
            setMessage(null)                // Don't show message
        } else if (text !== '' && text.trim().length <= 10) {   // If text is not empty and text length is less-than/equal-to 10...
            setMessage('Text must be at least 10 characters');  // Display message 
            setBtnDisabled(true);                               // Button is disabled
        } else {
            setMessage(null);           // Don't show message
            setBtnDisabled(false);      // Button is now `Active`
        }
        setText(event.target.value)         // Updates the text state, to users input value
    }

    // This handles the `Submit` button
    const handleSubmit = (event) => {       // Variable function for form submissions
        event.preventDefault();
        if (text.trim().length > 10) {      // If text.length is greater than 10
            const newFeedback = {           // Create a new variable called `newFeedback` with properties of text and rating values passed
                text,
                rating,
            }

            // Checks if feedback is new or going to update
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)   // Updates feedback
            } else {
                addFeedback(newFeedback)        // Creates new feedback
            }

            setText('');            // Reset text state to empty string
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input 
                onChange={handleTextChange} 
                type='text' 
                placeholder='Write a review' 
                value={text} 
                />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 7,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();                  // Added uuid to our new added feedback
        setFeedback([newFeedback, ...feedback])     // This set feedback state to current feedback and new feedback -- NOTE: states are not immutable, therefore need to make a copy of state.
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {       // This is a pop-up window confirmation
            setFeedback(feedback.filter((item) => item.id !== id ))     // Filter through id list, delete the id I selected
        }
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id == id ? {...item, ...updItem} : item))
    }

    // Set items to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider 
        value={{
            feedback,
            feedbackEdit, // It is for the form component for updating -- actual `state` for the form
            deleteFeedback,
            addFeedback,
            editFeedback, // Function that runs
            updateFeedback,
        }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
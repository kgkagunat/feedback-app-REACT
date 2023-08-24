import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
    <Card>
        <div className="num-display">{item.rating}
        </div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
            <FaTimes color='purple'></FaTimes>
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
            <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}
        </div>
    </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem

//============================================================

//* How to incorporate state changes:

// import { useState } from "react"

// function FeedbackItem() {
//     const [rating, setRating] = useState(7);                                    

//     const handleClick = () => {      // Click function
//         setRating((prev) => {        // using function on setRating()
//             console.log(prev);       // logs the previous number
//             return prev + 1          // return the previous number + 1
//         });
//     }

//     return (
//     <div className='card'>
//         <div className="num-display">{rating}</div>
//         <button onClick={handleClick}>Click</button>
//     </div>
//     )
// }

// export default FeedbackItem
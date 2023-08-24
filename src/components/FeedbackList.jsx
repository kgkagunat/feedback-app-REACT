import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext)  // Access values from FeedbackContext

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

  return (        // This is with animation using `framer-motion` npm package
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (     // This one has no animation
  //   <div className='feedback-list'>
  //       {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} 
  //       handleDelete={handleDelete} />
  //       ))}
  //   </div>
  // )
}


export default FeedbackList
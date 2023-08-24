import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'        // Uses the HTML5 History API to keep the UI in sync with the URL (without the `#` hash) -- `Route` defines individual routes -- `Link` provides a way to navigat between these routes.
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes> 
                        <Route 
                        exact path='/' 
                        element = {
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>

                        <Route path='/about' element={<AboutPage />}/>

                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App


//===============================================================

//* Alt version without using JSX (RARELY USED)

// import React from 'react'

// function App() {
//     return React.createElement(
//         'div', 
//         { className: 'container' },
//     React.createElement(
//         'h1', 
//         {}, 
//         'My App'))
// }

// export default App


//===============================================================

//* Things you can do 1:

// function App() {
//     const title = 'Blog Post'
//     const body = 'This is my blog post'
//     const comments = [
//         {id: 1, text: 'Comment 1'},
//         {id: 2, text: 'Comment 2'},
//         {id: 3, text: 'Comment 3'},
//     ]

//     const loading = false;
//     const showComments = true;

//     if(loading) {return (<h1>Loading...</h1>)}

//     const commentBlock = (
//     <div className="comments">
//         <h3>Comments ({comments.length})</h3>
//         <ul>
//             {comments.map((comment, index) => (
//                 <li key={index}>{comment.text}</li>
//             ))}
//         </ul>
//     </div>)
    

//     return (
//         <div className="container">
//             <h1>{title.toUpperCase()}</h1>
//             <p>{body}</p>

//             {showComments && commentBlock}
            
//         </div>
//     )
// }

// export default App

//===============================================================
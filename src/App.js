import React from 'react'
import Main from './container/Main/Main'
import './app.css'

function App() {
    return (
        <div
            style={{
                backgroundImage: 'url(' + '../images/background.jpg' + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="box">
                <Main />
            </div>
        </div>
    )
}

export default App

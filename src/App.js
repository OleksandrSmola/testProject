import React from 'react'
import Main from './container/Main/Main'
import './app.css'
import Header from './container/Header/Header'

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
            <Header />
            <div className="box">
                <Main />
            </div>
        </div>
    )
}

export default App

import React, { useState } from 'react'
import Main from './container/Main/Main'
import './app.css'
import Header from './container/Header/Header'

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [isAddCartState, setIsAddCartState] = useState(true)
    // eslint-disable-next-line no-unused-vars
    const changeAddCartButton = () => {
        setIsAddCartState((prevState) => !prevState)
    }

    const [countCart, setCountCart] = useState(0)

    const someFunction = () => {
        changeAddCartButton()
        isAddCartState
            ? setCountCart(countCart + 1)
            : setCountCart(countCart - 1)
    }

    return (
        <div
            style={{
                backgroundImage: 'url(' + '../images/background.jpg' + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Header countCart={countCart} />
            <div className="box">
                <Main
                    someFunction={someFunction}
                    isAddCartState={isAddCartState}
                />
            </div>
        </div>
    )
}

export default App

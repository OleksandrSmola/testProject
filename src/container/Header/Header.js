import React from 'react'
import Menu from './Menu/Menu'

const Header = ({ countCart }) => {
    return (
        <>
            <Menu countCart={countCart} />
        </>
    )
}

export default Header

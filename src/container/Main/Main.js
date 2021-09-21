import React from 'react'
import ProductsList from '../../components/Products/ProductsList'

const Main = ({ someFunction, isAddCartState }) => {
    return (
        <>
            <ProductsList
                someFunction={someFunction}
                isAddCartState={isAddCartState}
            />
        </>
    )
}

export default Main

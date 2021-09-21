import React from 'react'
import ProductsListItem from './ProductListItem'
import productsArray from './productsArray'
import { Grid } from '@material-ui/core'

const ProductsList = ({ someFunction, isAddCartState }) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(({ id, name, logo, price, image }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductsListItem
                            id={id}
                            name={name}
                            logo={logo}
                            image={image}
                            price={price}
                            someFunction={someFunction}
                            isAddCartState={isAddCartState}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList

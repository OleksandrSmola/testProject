import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from '@material-ui/core'
import './products.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'

const ProductsListItem = ({
    name,
    price,
    image,
    someFunction,
    isAddCartState,
}) => {
    return (
        <>
            <Card>
                <div className="productsListItem">
                    <div className="productImg">
                        <img src={image} />
                    </div>
                    <div className="productsName">{name}</div>
                    <div className="productsPrice">
                        <div>
                            <span className="priceText">Price:</span> {price} ₴{' '}
                        </div>
                        <div className="productsAddButton">
                            <Button onClick={() => someFunction()}>
                                {isAddCartState ? (
                                    <AddShoppingCartIcon
                                        style={{ fontSize: 35 }}
                                    />
                                ) : (
                                    <RemoveShoppingCartIcon
                                        style={{ fontSize: 35 }}
                                    />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

ProductsListItem.propTypes = {
    image: PropTypes.image,
    price: PropTypes.number,
    name: PropTypes.string,
}

export default ProductsListItem

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from '@material-ui/core'
import './products.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const ProductsListItem = ({ name, price, image }) => {
    return (
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
                        <Button>
                            <AddShoppingCartIcon style={{ fontSize: 35 }} />
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

ProductsListItem.propTypes = {
    image: PropTypes.image,
    price: PropTypes.number,
    name: PropTypes.string,
}

export default ProductsListItem

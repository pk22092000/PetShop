import React from 'react'
import PropTypes from 'prop-types'
// import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './ProductCard.scss'

function ProductCard(props) {
  const { product, match } = props;
  // console.log(props)
  return (
    <Link className='p-2' to={match.path + "/" + product.id}>
      <div className='product-card'>
        <img className='product-card__img' src={product.img} alt="img" />
        <div className='product-card__name'> {product.name} </div>
        <div className='product-card__price'> {parseInt(product.price).toLocaleString("fi-FI")} </div>
      </div>
    </Link>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  match: PropTypes.object,
}

export default ProductCard

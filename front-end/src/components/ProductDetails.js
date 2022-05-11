import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productAction';
import "./ProductDetails.scss"
import { Col, Container, Row } from 'react-bootstrap';

function ProductDetails(props) {
  const productID = props.match.params.id;
  const product = useSelector(state => state.productDetails)
  const dispatch = useDispatch();
console.log(product)
  useEffect(() => {
    dispatch(detailsProduct(productID));
  }, [])

  return (
    <Container className='my-4' >
      <Row xs={1} sm={1} md={2} xl={2} xxl={2} >
        <Col className='details__imgs'>
          <img src={product.img} alt="img" />
        </Col>
        <Col className='details'>
          <div className='details__name'> {product.name} </div>
          <div className='details__price'> {parseInt(product.price).toLocaleString("fi-FI", {style: "currency", currency: "VND"})} </div>
          <div className='details__desc'> {product.desc} </div>
          <div className='d-flex justify-content-between my-2'>
            <span className='details__amount'> Số lượng: {product.amount} </span>
            <span className='details__sold'> Đã bán: {product.sold} </span>
          </div>
          <div className='d-flex justify-content-between my-4'>
            <button className='btn btn-primary'> Mua hàng </button>
            <button className='btn btn-primary'> quantity </button>
            <button className='btn btn-primary'> Thêm Vào giỏ hàng </button>
          </div>
        </Col>
      </Row>
      {/* <div className='d-flex'>
        <div className='details__imgs'>
          <img src={product.img} alt="img" />
        </div>
        <div className='details'>
          <div className='details__name'> {product.name} </div>
          <div className='details__price'> {parseInt(product.price).toLocaleString("fi-FI", {style: "currency", currency: "VND"})} </div>
          <div className='details__desc'> {product.desc} </div>
          <div className='details__amount'> {product.amount} </div>
          <div className='details__sold'> {product.sold} </div>
          <button> Thêm Vào giỏ hàng </button>
          <button> Mua hàng </button>
        </div>
      </div> */}
    </Container>
  )
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}

export default ProductDetails

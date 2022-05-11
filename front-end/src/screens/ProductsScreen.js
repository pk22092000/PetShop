import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../actions/productAction'
import { Container, Row, Col } from 'react-bootstrap'
import "./ProductsScreen.scss"
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'

export default function ProductsScreen(props) {
  const dispatch = useDispatch();
  const productsState = useSelector(state => state.products);
  const { products, loading, error } = productsState;

  console.log("products: ", productsState)

  useEffect(() => {
    dispatch(listProduct())
  }, [])

  return (
    <Container className='my-4' >
      <Row >
        <Col>
          <div className='m-2 p-2' style={{background: "#fff"}}>
            Danh Mục
          </div>
        </Col>
        <Col xs={10} sm={10} md={10} xl={10} xxl={10}>
          <Row xs={5} sm={5} md={5} xl={5} xxl={5}>
            {loading 
              ? <Loading></Loading> 
              : error ? <div> ERROR </div>
              : products.map((product) => (
                <ProductCard key={product.id} product={product} {...props} />
              ))
            }      
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

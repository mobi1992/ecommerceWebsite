import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from 'react-router-dom'
import { Container, Col, Row, Card, Form, InputGroup, Button } from 'react-bootstrap'
import './index.css'
import {commerce} from '../../lib/commerce'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  address: '',
  postalCode: '',
  phoneNo: ''
}

const formValues = values => {
  console.log('Form data', values)
  return values
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('This Field is Required'),
  lastName: Yup.string().required('This Field is Required'),
  email: Yup.string().email('Invalid Email Format').required('This Field is Required'),
  city: Yup.string().required('This Field is Required'),
  address: Yup.string().required('This Field is Required'),
  postalCode: Yup.string().required('This Field is Required'),
  phoneNo: Yup.string().required('This Field is Required'),
})
const Information = ({checkoutToken, next}) => {
  const navigate = useNavigate()
  const [shippingCountries, setShippingCountries] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState('')
  const [shippingOption, setShippingOption] = useState('')
  
  // Object.entries(shippingCountries) will give you the array of arrays (in more countries case) with first entry as key and second as the name of the country for example in case of Pakistan this should look like this ['PK', 'Pakistan'], as it is an array so you can map over it
  // Object.entries(shippingCountries).map(([code, name]) => ({id : code, label : name})) is another array with objects having id equal to code and label equal to name, in our case it has one object
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({id : code, label : name}))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id : code, label : name}))
  const shipOptions = Object.entries(shippingOptions).map(([code, name]) => ({id : code, label: `${name.description} - (${name.price.formatted_with_symbol})`}))
  const cout = Object.entries(shippingCountries)
  const sub = Object.entries(shippingSubdivisions)
  // console.log(countries)
  // console.log(shipOptions)
  // console.log(cout)
  // console.log(sub)
  //const shipOptions = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))
  console.log(countries)
  const fetchShippingCountries = async (checkoutTokenId) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
    //Countries are object, we want them to be in an array so that we can loop over them, in our case we only have one country but we will still implemet this step as more countries can be added in the future
   // console.log(countries)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchShippingSubdivions = async(checkoutTokenId,countryCode) => {
    const { subdivisions } = await commerce.services.localeListShippingSubdivisions(checkoutTokenId,countryCode)
   // console.log(subdivisions)
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
    //console.log(Object.keys(subdivisions)[0])
  }

  const fetchShippingOptions = async (checkoutTokenId, country, region=null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})
    //console.log(options)
   setShippingOptions(options)
   setShippingOption(options[0].id)
   //console.log(options[0].id)
}
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])

  // whensoever the shipping country changes we need to call the useEffect again
  useEffect(() => {
    if(shippingCountry) {fetchShippingSubdivions(checkoutToken.id ,shippingCountry)}
  }, [shippingCountry])

  useEffect(() => {
    if(shippingCountry) {fetchShippingOptions(checkoutToken.id, shippingCountry)}
  },[shippingCountry])
  const handleClick = () => {
    setSubmitted(true)
  }

  const handleTheSubmit = (values) => {
    const data = formValues(values)
    data['country'] = shippingCountry;
    data['province'] = shippingSubdivision;
    data['shippingOption'] = shippingOption;
    //console.log(data)
    next(data)
  }
  return (
    <Row style={{ marginLeft: '3vw' }}>
      <div className='checkout-display-on-large-screens mb-3'>
        <Row>
          <Col style={{ fontSize: 'large', fontWeight: 'bold' }}>Contact Information</Col>
          <Col>
            <Row className='justify-content-right'>Already have an account?Log in</Row>
          </Col>
        </Row>
      </div>
      <div style={{ marginLeft: '12px' }} className='checkout-display-on-small-screens mb-3'>
        <Row>
          <Col>
            <Row style={{ fontSize: 'large', fontWeight: 'bold' }}>
              Contact Information
            </Row>
            <Row className='justify-content-right'>Already have an account?Log in</Row>
          </Col>
        </Row>
      </div>
      <Col>
        {/* <Card className='border-0'>
        <Card.Body> */}
        <Formik initialValues={initialValues}
          onSubmit={handleTheSubmit}
          validationSchema={validationSchema}>
          {({ handleSubmit, handleChange, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Control type='text' id='email' name='email' placeholder='Email Address' onChange={handleChange} />
              </Form.Group>
              {(submitted && errors.email) && <div> <div className='text-danger text-center'>{errors.email}</div> <br></br></div>}

              <div style={{ fontSize: 'large', fontWeight: 'bold' }}>Shipping Address</div>
              <Form.Group className='mb-3 mt-3'>
                <Form.Control type='text' id='firstName' name='firstName' placeholder='First Name' onChange={handleChange} />
              </Form.Group>
              {(submitted && errors.firstName) && <div> <div className='text-danger text-center'>{errors.firstName}</div> <br></br></div>}

              <Form.Group className='mb-3'>
                <Form.Control type='text' id='lastName' name='lastName' placeholder='Last Name' onChange={handleChange} />
              </Form.Group>
              {(submitted && errors.lastName) && <div> <div className='text-danger text-center'>{errors.lastName}</div> <br></br></div>}

              <Form.Group className='mb-3'>
                <Form.Select value = {shippingCountry} onChange = {(e) => setShippingCountry(e.target.value)} >
                  {countries.map(country => (
                    <option key = {country.id}>{country.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Select value = {shippingSubdivision} onChange = {(e) => setShippingSubdivision(e.target.value)} >
                  {subdivisions.map(subdivision => (
                    <option key = {subdivision.id}>{subdivision.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Select value = {shippingOption} onChange = {(e) => setShippingOption(e.target.value)} >
                  {shipOptions.map((op) => (
                    <option key = {op.id}>{op.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control type='text' id='city' name='city' placeholder='City' onChange={handleChange} />
              </Form.Group>
              {(submitted && errors.city) && <div> <div className='text-danger text-center'>{errors.city}</div> <br></br></div>}

              <Form.Group className='mb-3'>
                <Form.Control type='text' id='address' name='address' placeholder='Address' onChange={handleChange} />
              </Form.Group>
              {(submitted && errors.address) && <div> <div className='text-danger text-center'>{errors.address}</div> <br></br></div>}

              <Form.Group className='mb-3'>
                <Form.Control type='text' id='postalCode' name='postalCode' placeholder='Postal Code' onChange={handleChange} />
              </Form.Group>
              {(submitted && errors.postalCode) && <div> <div className='text-danger text-center'>{errors.postalCode}</div> <br></br></div>}

              <Form.Group className='mb-3'>
                <Form.Control type='text' id='phoneNo' name='phoneNo' placeholder='Phone' onChange={handleChange} />
              </Form.Group>
              {(submitted && errors.phoneNo) && <div> <div className='text-danger text-center'>{errors.phoneNo}</div> <br></br></div>}

              <div className='mt-4' style = {{display : 'flex', justifyContent:'space-between'}}>
                <Button variant='light' onClick = {() => navigate('/cart')}>Back To Cart</Button>
                <Button onClick = {handleClick} variant='dark' type='submit'>Next</Button>
              </div>
              
            </Form>
          )}
        </Formik>
        {/* </Card.Body>
      </Card> */}
      </Col>
    </Row>
  )
};

export default Information;

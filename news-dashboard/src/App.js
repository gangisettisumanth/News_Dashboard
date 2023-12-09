
import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from './redux/actions';
import NewsList from './components/NewsList';
import { Form, InputGroup, Col } from 'react-bootstrap';

const App = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState('in');

  useEffect(() => {
    dispatch(fetchNews(selectedCountry));
  }, [dispatch, selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="app">
      <h1>News Dashboard</h1>

      <Form.Group controlId="country">
        <Col xs={12} className="text-center">
          <Form.Label>Select Country:</Form.Label>
        </Col>
        <Col xs={12}>
          <InputGroup>
            <Form.Control
              as="select"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-100 text-center" 
            >
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="gb">United Kingdom</option>
              <option value="cn">China</option>
              <option value="jp">Japan</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="ru">Russia</option>
            </Form.Control>
          </InputGroup>
        </Col>
      </Form.Group>

      <NewsList selectedCountry={selectedCountry} />
    </div>
  );
};

export default App;





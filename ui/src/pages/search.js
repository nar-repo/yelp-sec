import { useState} from 'react';
import {VscGithub} from "react-icons/vsc";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Searchyelp from "../components/yelp.js";
import Display from "../components/map.js";



function Search() {

  const [Restaurant, setRestaurant] = useState([]);
  const [CityName, setCityName] = useState("");
  const [Dish, setDish] = useState("");
  const [GmapDisplay, setGmap] = useState(false);
  

  
  const getData = () => {
    fetch(`http://localhost:3000/search?location=${CityName}&term=${Dish}`)
    .then(response => response.json())
    .then(data => JSON.stringify(data))
    .then(stringifiedData => JSON.parse(stringifiedData))
    .then(parsedData => {
        setRestaurant(parsedData);
    })
    .catch((error) => {
        console.log(error);
    });
  };
  

 const handleClick = event => {
    setGmap(current => !current);
  }; 


  return (

    <Container fluid="md" className="d-grid gap-3" >
      <Row className="d-grid gap-1">
      <a href='https://github.com/nar-repo/yelp-search'><VscGithub/></a>
      </Row>
      <Row className="d-grid gap-1">
        <input
        value={Dish}
        placeholder="What are you craving?!" 
        onChange={e => setDish(e.target.value)}/>
        <input
        value={CityName}
        placeholder="Enter a city name. e.g Paris, New York, London, etc..." 
        onChange={e => setCityName(e.target.value)}/>
        <button className="fw-bold" onClick={getData}> Search </button>
      </Row>

      <Row>
        <Col sm={6}>
        <Searchyelp ylist={Restaurant}/>
        </Col>

        <Col sm={4}>
         <button className="d-grid gap-1" onClick={handleClick}>Map result</button>
          {GmapDisplay && <Display marker={Restaurant}/>}
          
        </Col>  
      </Row>
    </Container>
  );          
}   


export default Search;
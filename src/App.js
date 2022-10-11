import './App.css';
import Card from './component/Card';
import data from './data'
import {React,useState} from 'react';
function App() {
  const [index,setIndex] = useState(1)
  
  function nextIndex(){

    setIndex(prevIndex => {

      if(prevIndex > data.length-2)
      return  0
      else
      return  index+1
    })
  }
  function prevIndex(){
    
    setIndex(prevIndex => {
      if(prevIndex === 0)
      return  data.length-1
      else
      return  index-1
  })}

  return (
    <div className="App">
      <h2>Our Reviews</h2>
      <div className='line'></div>
      <Card {...data[index]} prev={prevIndex} next={nextIndex}/> 
      {//data.map(p =>
         //<Card {...p}/>
      //)
      }
    </div>
  );
}

export default App;

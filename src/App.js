// import logo from './logo.svg';
import './App.css'; 
import Card from './Components/Card'; 
import './Components/Style.css' 
import SData from './Components/SData';

function App() {  
  
  return (
    <div className="App"> 

      <h1 className='heading_style'>LIST OF TOP 5 NETFLIX SERIES IN 2022</h1>
      { SData.map((val, index) =>  {  
       return ( 
        <Card imgsrc={val.imgsrc} 
        title={val.title} 
        sname={val.sname} 
        link={val.link} 
      /> 
       );
      })}
    </div>
  );
}

export default App;

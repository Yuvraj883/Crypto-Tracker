import logo from './logo.svg';
import './App.css';

function App() {
  const url = 'https://fakestoreapi.com/products'; 
  // const key = '42ac69f7fcmshf12ad123d54ec4bp165600jsnf5552041810b'; 
  
  async function logJSONData() {
      const response = await fetch(url,{
        method:'GET',
        // headers:{
        //   'X-RapidAPI-Key': key,
	      // 	'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        // }
      });
      const jsonData = await response.json();
      console.log(jsonData);
    }
  
    logJSONData();
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

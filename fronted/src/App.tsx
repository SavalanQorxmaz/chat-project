

function App() {


  fetch('http://localhost:9000',{
    method: 'Get',
    
    headers:{
      "Content-Type": "application/json",
    }
  })
  .then(res=>res.json())
  .then(res=>console.log(res))


  return (
    <div className="App">
      

      
    </div>
  );
}

export default App;

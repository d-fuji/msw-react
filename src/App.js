// import logo from './logo.svg';
import './App.css';
import useSWR from "swr"

function App() {
  const fetcher = async () => {
    const response = await fetch("http://localhost:3001/api/user");
    return response.json();
  }

  const { data, error, isLoading } = useSWR('/api/user', fetcher)
  
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title="Netflix Originals"/>
      <RowPost title="Action Movies" isSmall/>     
    </div>
  );
}

export default App;

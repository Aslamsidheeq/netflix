import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action} from './urls'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title="Netflix Originals"url={originals} />
      <RowPost title="Action Movies" isSmall url={action}/>   
    </div>
  );
}

export default App;

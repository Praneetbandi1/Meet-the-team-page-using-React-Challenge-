import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import {Footer} from './components/Header/Header';


const galleryList=  [
  {
   name: "John Smith",
   role: "Manager",
   photo: "./images/manager.jpg"
  },

  { name:"  Harold Kilpatrick ",
   role:"  Senior level Developer",
   photo: "/image2"
  },

  {
   name:" Jim Braxley",
   role:" Junior  Level Developer",
   photo:"/image3"

  }
];


function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Gallery galleryList={galleryList} />
      <Footer className="App-footer"/>
      
    </div>
  );
}

export default App;

import './App.css';
import Gallery from './components/Gallery/Gallery';


const galleryList=  [
  {
   name: "John Smith",
   role: "Manager",
   photo: "/image1"
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


    <Gallery galleryList={galleryList} />
    


      
    </div>
  );
}

export default App;

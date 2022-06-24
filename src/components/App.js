import video from "../data/video.js";
import VideoComponent from "./VideoComponent.js";


function App() {
  console.log("Here's your data:", video);

  return (
    <div>
      <VideoComponent videoObj={video}/>
    </div>
  );
}

export default App;

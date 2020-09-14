import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'; 
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
    apiKey: "a6cbfba9141a476d952b138162b3e0f4"
});

const ParticlesOptions = {
  particles: {
    number :{
        value: 90,
        density: {
          enable: true,
          value_area: 800
        }
    }
}
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }
  

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width, // because we get percentage of width by the bounding_bxo property
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
  this.setState({input: event.target.value});
  }

    
 
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // THE JPG
        this.state.input 
      )
      .then((response) => {
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch((err) => {
        console.log(err);
      });
    };
  

  render(){
  return (
    <div className="App">
      <Particles className='particles'
        params={ParticlesOptions}
      />        
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />

    </div>
    );
  }
}

export default App;

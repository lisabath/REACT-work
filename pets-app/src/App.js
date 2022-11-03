import logo from './logo.svg';
import './App.css';
import Cat from './components/pets/cat';
import Dog from './components/pets/dog';
import Title from './components/title';

// ROOT COMPONENT
function App() {
  const cssStyles={
    backgroundColor: 'greenyellow'
  }
  return (
    <div className="App">
      <header className="App-header" style={cssStyles}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Title>
          My title
          {/* This is my first react app, the text inside the Title tags are the children prop */}
        </Title>

        <div className="flex">
          <Cat colour="pink" name="Cat" lackOfCommonSense={true} textColour="#000"/>
          <Cat colour="beige
          " name="Fox" lackOfCommonSense={false} textColour="#000"/>
          <Cat colour="purple" name="Badger" lackOfCommonSense={true } textColour="#000"/>
        </div>

        <div className="flex">
          <Dog name="Maisie" colour="pink" dogYears={4} breed="Cockapoo"/>
        </div>
       
        
      </header>
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      isloaded: false,
      shoes: [
        {
          "size": 8,
          "brand_name": "Aldo",
          "color": "http://127.0.0.1:8000/api/shoecolor/1/",
          "manufacturer": "http://127.0.0.1:8000/api/manufacturer/1/",
          "shoe_type": "http://127.0.0.1:8000/api/shoetype/1/",
          "material": "velvet",
          "fasten_type": "Curly Shoelaces"
      }

      ]
    };

  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoes/")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          shoes: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

  }
  

  render() {
      const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {this.state.shoes.map(shoe => (
            <li key={shoe.id}>
            <li>{shoe.brand_name}</li>
            <li>{shoe.size}</li>
            <li>{shoe.manufacturer}</li>
            <li>{shoe.color}</li>
            <li>{shoe.shoe_type}</li>
            <li>{shoe.material}</li>
            <li>{shoe.fasten_type}</li>
            <div>
            <ColoredLine color="black" />
          </div>
            </li>
           
            ))}
          </ul>
         
         
      );
    }
  }
}


export default App;

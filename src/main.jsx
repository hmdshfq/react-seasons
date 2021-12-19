import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay'

class App extends React.Component{
  // We define the constructor function so that we can use the state object
  constructor(props) {
    // super(props) is the reference to the constructor of parent class
    super(props)

    // State object
    this.state = { lat: null }

    /**
     * Getting geolocation takes time and the DOM is already displayed before
     * the location is loaded. To show the location on the page the DOM has to be
     * rerendered with the updated the component with location information. To rerender
     * the DOM we use the state object.
     */
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    )
  }

  // The only function that is required by React
  render() {
    
    return <div>Latitude: { this.state.lat }</div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay'

class App extends React.Component{
  // We define the constructor function so that we can use the state object
  constructor(props) {
    // super(props) is the reference to the constructor of parent class
    super(props)
  }
  // The only function that is required by React
  render() {
    /**
     * Getting geolocation takes time, it is an async operation therefore 
     * it requires the component to be rerendered to show the updated information.
     * For rerendering the component we have to use state.
     */
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    )
    return <div>Latitude: </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay'

class App extends React.Component{
  // We define the constructor function so that we can use the state object
  constructor(props) {
    // super(props) is the reference to the constructor of parent class
    super(props)

    /**
     * State Object
     * 
     * This is the ONLY TIME we do direct assignment to this.state
     * if (lat) and if (errorMessage) will return false which helps use later
     */
    this.state = { lat: null, errorMessage: '' }

    /**
     * Getting geolocation takes time and the DOM is already displayed before
     * the location is loaded. To show the location on the page the DOM has to be
     * rerendered with the updated the component with location information. To rerender
     * the DOM we use the state object.
     */
    window.navigator.geolocation.getCurrentPosition(
      /**
       * getCurrentPosition returns position object if it is successful
       * it returns error object when it fails to fetch location 
       */
      (position) => {
        /**
         * setState method
         * 
         * We always use setState to update the state. Whenever we use setState it will 
         * rerender the component in the DOM
         */
        this.setState({
          /**
           * We get the position.coords.latitude from the position object that can be checked using
           * console.log(position)
           */ 
          lat: position.coords.latitude
        })
      },
      (error) => {
        this.setState({
          /**
           * We get the error.message from the error object that can be checked using
           * console.log(error)
           */ 
          errorMessage: error.message
        })
      }
    )
  }

  // The only function that is required by React
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading ...</div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

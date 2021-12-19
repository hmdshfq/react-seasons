import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay'

class App extends React.Component{
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

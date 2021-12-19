import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay'

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  )
  return <div>Hi there</div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

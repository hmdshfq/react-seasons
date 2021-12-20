import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {
    // We define the constructor function so that we can use the state object
    // constructor(props) {
    //     // super(props) is the reference to the constructor of parent class
    //     super(props);

    //     /**
    //      * State Object
    //      *
    //      * This is the ONLY TIME we do direct assignment to this.state
    //      * if (lat) and if (errorMessage) will return false which helps use later
    //      */
    //     this.state = { lat: null, errorMessage: '' };
    // }

    /**
     * Babel will transpile the statement below into the constructor call above.
     * So we don't need to write the state inside the constructor. The following
     * statement will also work
     */
    state = { lat: null, errorMessage: '' };

    /**
     * This lifecycle method runs after the screen is rendered for the first time
     */
    componentDidMount() {
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
            position => {
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
                    lat: position.coords.latitude,
                });
            },
            error => {
                this.setState({
                    /**
                     * We get the error.message from the error object that can be checked using
                     * console.log(error)
                     */
                    errorMessage: error.message,
                });
            }
        );
    }

    /**
     * This lifecycle method runs after the state gets updated and the content is rerendered
     */
    componentDidUpdate() {}

    // The only function that is required by React
    render() {
        // Show error
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        // Show season
        if (!this.state.errorMessage && this.state.lat) {
            /**
             * When the state updates the SeasonDisplay component will also update because
             * the state is being passed into the SeasonDisplay as a prop
             */

            return <SeasonDisplay lat={this.state.lat} />;
        }
        // Show loading
        return <div>Loading ...</div>;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

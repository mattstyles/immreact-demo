
import './utils/font'

import React from 'react'

import dispatcher from './dispatchers/appDispatcher'
import Toggle from 'toggle'



class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        function get( i ) {
            return i === 'text' ? 'some text' : true
        }

        return (
            <div className="container">
                <h1>Hello React</h1>
                <Toggle cursor={{get: get}} />
            </div>
        )
    }
}

React.render( <App />, document.body )

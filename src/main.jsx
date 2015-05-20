
import './utils/font'

import React from 'react'

import appStore from './stores/appStore'
import Toggle from 'toggle'



class App extends React.Component {
    constructor() {
        super()
    }

    render() {

        let items = this.props.cursor.toList().map( item => <Toggle cursor={ item } /> )

        return (
            <div className="container">
                <h1>Hello React</h1>
                <ul className="Toggle-container">
                    { items }
                </ul>
            </div>
        )
    }
}

function render() {
    React.render( <App cursor={ appStore.cursor() } />, document.body )
}

render()

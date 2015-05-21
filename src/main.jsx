
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
                <h1>Hello Immutable</h1>
                <button onClick={ appStore.load }>Load</button>
                <button onClick={ appStore.save }>Save</button>
                <ul className="Toggle-container">
                    { items }
                </ul>
            </div>
        )
    }
}

function render() {
    React.render( <App cursor={ appStore.structure.cursor() } />, document.body )
}

render()

appStore.structure.on( 'swap', render )


import './utils/font'

import React from 'react'

import appStore from './stores/appStore'
import Toggle from 'toggle'



class App extends React.Component {
    constructor() {
        super()
    }

    onLoad( event ) {
        appStore.load()
    }

    onSave( event ) {
        appStore.save()
    }

    render() {
        let itemData = this.props.cursor.toList()
        let items = itemData.size > 0
            ? itemData.map( item => <Toggle cursor={ item } /> )
            : <span className="Toggle-loader">Fetching, 2 secs...</span>

        return (
            <div className="container">
                <h1>Hello Immutable</h1>
                <button onClick={ this.onLoad }>Load</button>
                <button onClick={ this.onSave }>Save</button>
                <h2 className="table-title">Github Users</h2>
                <ul className="Toggle-container">
                    { items }
                </ul>
            </div>
        )
    }
}

function render() {
    React.render( <App cursor={ appStore.state.cursor() } />, document.body )
}

render()

appStore.state.on( 'swap', render )

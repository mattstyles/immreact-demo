
// import './utils/font'

import React from 'react'

import appStore from './stores/appStore'

import ToggleList from 'toggle'
import Menu from 'menu'


class App extends React.Component {
    constructor() {
        super()
    }

    render() {

        // return (
        //     <div>
        //         <h1>Hello Immutable</h1>
        //         <button onClick={ this.onLoad }>Load</button>
        //         <button onClick={ this.onSave }>Save</button>
        //         <ToggleList cursor={ this.props.cursor } />
        //     </div>
        // )

        return (
            <div>
                <Menu />
                <ToggleList cursor={ this.props.cursor } />
            </div>
        )
    }
}

function render() {
    React.render( <App cursor={ appStore.state.cursor() } />, document.body )
}

render()

appStore.state.on( 'swap', render )

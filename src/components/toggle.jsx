
import React from 'react'
import classNames from 'classnames'

class Toggle extends React.Component {
    constructor( props ) {
        super( props )
    }

    static stuff = {
        foo: 'foo'
    }

    // Either updating or setting works just fine
    onClick = () => {
        // this.props.cursor.update( data => {
        //     return this.props.cursor.merge({
        //         toggle: !this.props.cursor.get( 'toggle' )
        //     })
        // })

        this.props.cursor.set( 'toggle', !this.props.cursor.get( 'toggle' ) )
    }

    render() {
        let toggleClasses = classNames({
            'Toggle-indicator': true,
            'Toggle-indicator--isOn': this.props.cursor.get( 'toggle' )
        })

        return (
            <li className="Toggle" onClick={ this.onClick }>
                <span className={ toggleClasses }></span>
                <span className="Toggle-text">{ this.props.cursor.get( 'text' )}</span>
            </li>
        )
    }
}




export default class ToggleList extends React.Component {
    constructor() {
        super()
    }

    render() {
        let itemData = this.props.cursor.toList()
        let items = itemData.size > 0
            ? itemData.map( item => <Toggle cursor={ item } /> )
            : <span className="Toggle-loader">Fetching, 2 secs...</span>

        return (
            <div className="Toggle-wrapper">
                <h2 className="Toggle-title">Github Users</h2>
                <ul className="Toggle-container">
                    { items }
                </ul>
            </div>
        )
    }
}


import React from 'react'
import classNames from 'classnames'

export default class Toggle extends React.Component {
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

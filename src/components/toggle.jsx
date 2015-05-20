
import React from 'react'
import classNames from 'classnames'

export default class Toggle extends React.Component {
    constructor( props ) {
        super( props )
    }

    static stuff = {
        foo: 'foo'
    }

    myOnClick = () => {
        console.log( this )
    }

    render() {
        let toggleClasses = classNames({
            'Toggle-indicator': true,
            'Toggle-indicator--isOn': this.props.cursor.get( 'toggle' )
        })

        return (
            <li className="Toggle">
                <span className="Toggle-text">{ this.props.cursor.get( 'text' )}</span>
                <span className={ toggleClasses }></span>
            </li>
        )
    }
}

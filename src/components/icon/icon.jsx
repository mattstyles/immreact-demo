
import React from 'react'
import getIcon from 'constants/iconId'

export default class Icon extends React.Component {
    static propTypes = {
        icon: React.PropTypes.string.isRequired,
        classes: React.PropTypes.string,
        rotation: React.PropTypes.number
    }

    static defaultProps = {
        classes: '',
        rotation: 0
    }

    constructor( props ) {
        super( props )
    }

    render() {
        let icon = {
            __html: getIcon( this.props.icon )
        }
        let style = {
            transform: 'rotate( ' + ~~( Math.round( this.props.rotation ) ) + 'deg )',
            WebkitTransform: 'rotate( ' + ~~( Math.round( this.props.rotation ) ) + 'deg )'
        }

        return (
            <i
                className={ this.props.classes + ' u-fill' }
                dangerouslySetInnerHTML={ icon }
                style={ style }>
            </i>
        )
    }
}

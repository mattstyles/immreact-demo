
import React from 'react'
import classNames from 'classnames'

import appStore from '../stores/appStore'
import Icon from 'icon/icon'


class MenuItem extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <li className="Menu-action">
                <button className="Menu-actionButton" onClick={ this.props.onClick }>
                    { this.props.text }
                </button>
            </li>
        )
    }
}

class LoadItem extends React.Component {
    constructor( props ) {
        super( props )

        this.state = {
            open: false
        }
    }

    onMoreClick( event ) {
        this.setState({
            open: !this.state.open
        })
    }

    onLoadClick( event ) {
        console.log( event.currentTarget )
        
        appStore.load()
    }

    render() {
        let loadStates = <span></span>
        if ( this.state.open ) {


            loadStates = (
                <ul className="Load-loadStates">
                    <li className="Menu-action Menu-actionInner">
                        <button className="Menu-actionButton Menu-actionInnerButton" onClick={ this.onLoadClick.bind( this ) }>From localstorage</button>
                    </li>
                </ul>
            )
        }

        let classes = classNames({
            'Menu-action Menu-load': true,
            'Menu-load--isOpen': this.state.open
        })

        return (
            <li className={ classes }>
                <div className="Menu-loadMain u-cf">
                    <button className="Menu-actionButton Menu-loadText" onClick={ this.props.onClick }>
                        { this.props.text }
                    </button>
                    <button className="Menu-actionButton Menu-loadMore" onClick={ this.onMoreClick.bind( this ) }><Icon icon="MORE" /></button>
                </div>
                { loadStates }
            </li>
        )
    }
}


export default class Menu extends React.Component {
    constructor( props ) {
        super( props )
    }

    onLoad( event ) {
        appStore.load()
    }

    onSave( event ) {
        appStore.save()
    }

    render() {
        return (
            <div className="Menu">
                <h1 className="Menu-titleMain">Immreact Demo</h1>
                <ul className="Menu-actions">
                    <LoadItem onClick={ this.onLoad.bind( this ) } text="Load" />
                    <MenuItem onClick={ this.onSave.bind( this ) } text="Save" />
                </ul>
            </div>
        )
    }
}

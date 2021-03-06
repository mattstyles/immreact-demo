
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
            open: false,
            registry: appStore.registry
        }
    }

    componentDidMount() {
        appStore.on( 'change', () => {
            this.setState({
                registry: appStore.registry
            })
        })
    }

    onMoreClick( event ) {
        this.setState({
            open: !this.state.open
        })
    }

    onLoadClick( event, id ) {
        appStore.load( id ? JSON.parse( window.localStorage.getItem( id ) ) : null )
    }

    onInputChange( event ) {
        appStore.load( JSON.parse( event.currentTarget.value ) )
    }

    render() {
        let loadStates = <span></span>
        if ( this.state.open ) {

            let items = this.state.registry
                .map( id => {
                    return {
                        fullId: id,
                        short: id.split( '/' )[ 1 ].split( '-' )[ 0 ]
                    }
                })
                .map( ids => {
                    function onClick( event ) {
                        this.onLoadClick.call( this, event, ids.fullId )
                    }

                    return (
                        <li className="Menu-action Menu-actionInner">
                            <button className="Menu-actionButton Menu-actionInnerButton" onClick={ onClick.bind( this ) }>{ ids.short }</button>
                        </li>
                    )
                })

            loadStates = (
                <ul className="Load-loadStates">
                    <li className="Menu-action Menu-actionInner">
                        <label htmlFor="Load-input" className="Load-inputLabel">Input:</label>
                        <input
                            id="Load-input"
                            className="Load-input"
                            placeholder="paste appData"
                            onChange={ this.onInputChange.bind( this ) }
                        />
                    </li>
                    { items }
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
                <div className="Menu-disclaimer">
                    <p>This is not an exit.</p>
                </div>
            </div>
        )
    }
}

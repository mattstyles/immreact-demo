
import React from 'react'
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
    }

    render() {
        return (
            <li className="Menu-action Menu-load u-cf">
                <button className="Menu-actionButton Menu-loadText" onClick={ this.props.onClick }>
                    { this.props.text }
                </button>
                <button className="Menu-actionButton Menu-loadMore"><Icon icon="MORE" /></button>
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

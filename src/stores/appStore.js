
import immstruct from 'immstruct'
import random from 'lodash.random'
import uuid from 'uuid'

import LS from 'constants/storage'

class AppStore {
    constructor() {
        this.state = immstruct( 'app', [] )

        this.registry = JSON.parse( window.localStorage.getItem( LS.REGISTRY ) ) || []

        // Grab some dummy data from github and load it in
        fetch( 'https://api.github.com/users?since=' + random( 100000 ) )
            .then( res => res.json() )
            .then( users => {
                this.load( users.map( user => {
                    return {
                        text: user.login,
                        toggle: random( 1 ) === 0
                    }
                }))
            })
    }

    load = ( data ) => {
        console.log( 'loading' )

        if ( !data && !this.registry.length ) {
            console.warn( 'No saved data' )
        }

        this.state.cursor().update( cursor => {
            return cursor.merge( data || JSON.parse( window.localStorage.getItem( this.registry[ 0 ] ) ) )
        })
    }

    save = () => {
        let id = LS.ID + '/' + uuid.v4()
        let appData = JSON.stringify( this.state.cursor().deref().toJSON() )
        console.log( 'saving', id )
        console.log( 'Try changing values and copy-pasting this app state into the load input field' )
        console.log( appData )
        this.registry.push( id )

        if ( this.registry.length > 10 ) {
            this.registry.shift()
        }

        window.localStorage.setItem( LS.REGISTRY, JSON.stringify( this.registry ) )
        window.localStorage.setItem( id, appData )
    }
}

export default new AppStore()

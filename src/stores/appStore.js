
import immstruct from 'immstruct'
import range from 'lodash.range'
import random from 'lodash.random'

const LS_ID = 'immutable-test'

class AppStore {
    constructor() {
        this.state = immstruct( 'app', [] )

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
        this.state.cursor().update( cursor => {
            return cursor.merge( data || JSON.parse( window.localStorage.getItem( LS_ID ) ) )
        })
    }

    save = () => {
        console.log( 'saving' )
        let appData = JSON.stringify( this.state.cursor().deref().toJSON() )
        console.log( appData )
        window.localStorage.setItem( LS_ID, appData )
    }
}

export default new AppStore()

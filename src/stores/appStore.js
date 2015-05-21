
import immstruct from 'immstruct'
import range from 'lodash.range'
import random from 'lodash.random'

const LS_ID = 'immutable-test'

const text = 'same shit different day it just goes round'.split( ' ' )

const data = (function() {
    return range( 10 ).map( () => {
        return {
            text: text[ random( text.length - 1 ) ],
            toggle: random( 1 ) === 0
        }
    })
})()

class AppStore {
    constructor() {
        this.state = immstruct( 'app', data )
    }

    load = () => {
        console.log( 'loading' )
        this.state.cursor().update( cursor => {
            console.log( window.localStorage.getItem( LS_ID ) )
            console.log( cursor )
            return cursor.merge( JSON.parse( window.localStorage.getItem( LS_ID ) ) )
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


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
        this.structure = immstruct( 'app', data )
        window.s = this.structure

        for ( let prop in this.structure ) {
            if ( !this[ prop ] ) {
                this[ prop ] = this.structure[ prop ]
            } else {
                console.warn( 'prop already exists on AppStore', prop )
            }
        }
    }

    load = () => {
        console.log( 'loading' )
        this.structure.cursor().update( cursor => {
            console.log( window.localStorage.getItem( LS_ID ) )
            console.log( cursor )
            return JSON.parse( window.localStorage.getItem( LS_ID ) )
        })
    }

    save = () => {
        console.log( 'saving' )
        window.localStorage.setItem( LS_ID, JSON.stringify( this.structure.cursor().deref().toJSON() ) )
    }
}

export default new AppStore()


import immstruct from 'immstruct'
import range from 'lodash.range'
import random from 'lodash.random'

let text = 'same shit different day it just goes round'.split( ' ' )

let data = (function() {
    return range( 10 ).map( () => {
        return {
            text: text[ random( text.length - 1 ) ],
            toggle: random( 1 ) === 0
        }
    })
})()

export default immstruct( 'app', data )

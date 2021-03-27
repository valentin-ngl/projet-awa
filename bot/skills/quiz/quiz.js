import formats from 'newbot-formats'
import code from './quiz.converse'
export default {
    code, 
    skills: {
        formats
    },
    functions: {
        indexOf(array, value) {
            return array.indexOf(value)
        }
    }
}
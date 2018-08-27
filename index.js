var assert = require('chai').assert

const get = () => {
    return 'success'
}

describe('these are my tests', () => {
    describe('#get()', () => {
        it ('should return the word success', () => {
            assert.equal(get(), 'success')
        })
    })
})

/**
 * Tests
 */

const chai = require('chai')
const http = require('chai-http')

const expect = chai.expect
chai.use(http)

// Check if server exists
const server = require('../server')

describe('Server is working', function() {
	it('Should exists', function() {
		expect(server).to.be.a('function')
	})

	it('GET / should return 200 and message', function(done) {
		chai.request(server).get('/')
			.then(function(res) {
				expect(res).to.have.status(200)
				expect(res.body.message).to.contain('Poruka')
				done()
			})
			.catch(function(err) {
				console.log('Error: ' + err.message)
				done(err)
			})
	})
})
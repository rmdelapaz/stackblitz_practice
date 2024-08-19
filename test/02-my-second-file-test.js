const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));

describe('Using npm test', function() {

  it('will run all of the tests in the test folder', function() {
    expect(true).to.be.eq(true);
  });

});

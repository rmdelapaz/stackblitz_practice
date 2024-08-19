const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));

describe('Running npm test test/<some-file-name>', function() {

  it('will run a single test file in the test folder', function() {
    expect(true).to.be.eq(true);
  });

});

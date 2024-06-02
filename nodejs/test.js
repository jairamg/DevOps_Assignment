const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming your app.js is in the root directory

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('App', () => {
  describe('GET /', () => {
    it('should return status 200', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('POST /submit', () => {
    it('should return status 200 and success message', (done) => {
      chai.request(app)
        .post('/submit')
        .send({ name: 'John', exp: '5', skills: 'Node.js' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql('Form Submitted Successfully');
          done();
        });
    });
  });
});

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../index'); // Destructure app and server

chai.use(chaiHttp);
const expect = chai.expect;

describe('Pizzas API', () => {
  it('should get the top 10 pizzas with the highest times values', (done) => {
    chai
      .request(app)
      .get('/pizzas-top-ten')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(10);
        done();
      });
  });

  // Close the server after all tests
  after(() => {
    server.close();
  });
});

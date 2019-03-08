let request = require('supertest');
let test = require('./routes/index.js');

describe('Test', () => {
    it('Should get super test /', (done) => {
        request(test)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            console.log(res.body.user);
            res.body.user.should.equal('Get Super Test');
            if(err) {
                console.log(err);
            }
            done();
        })
    })
})

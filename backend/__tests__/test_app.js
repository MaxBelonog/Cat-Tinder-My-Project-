const request = require('supertest')
const app = require('../app')

jest.mock('../src/models/cat')


describe("App", () => {
    //test route path to make sure everything working.
    it("Tests the root path", () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
    //this checks endpoints
    it("Lists cats", () => {
        return request(app).get("/cats").then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.body.cats[0].name).toBe('Paws')
        })
    })
    //checks if cats are being created...and v
    it("Creates cats", () => {
        return request(app)
            .post("/cats")
            .send({
                name: 'Morris',
                age: 2,
                enjoys: "Catnip"
            })
            .then(response => {
                expect(response.statusCode).toBe(201)
                expect(response.body.cat.name).toBe('Morris')
                expect(response.body.cat.age).toBe(2)
                expect(response.body.cat.enjoys).toBe("Catnip")
            })
    })


    it("Validates name when creating cat", () => {
        return request(app)
            .post("/cats")
            .send({
                age: 2,
                enjoys: "Food!"
            })
            .then(response => {
                expect(response.statusCode).toBe(400)
                const error = response.body.errors.validations[0]
                expect(error.param).toBe('name')
                expect(error.msg).toBe('Is required')
            })
    })


   
})
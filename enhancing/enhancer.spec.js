const enhancer = require('./enhancer.js');
const{repair}=require("./enhancer")
const {succeed} = require("./enhancer")
const {fail} = require("./enhancer")

const item = {
    name: "adrian",
    durability: 50,
    enhancement: 10
  }
  const item1 = {
    name: "adrian",
    durability: 50,
    enhancement: 16
  }
  const theitem = {
    name: "adrian",
    durability: 50,
    enhancement: 10
  }
// test away!
describe("enhancer", function () {
    describe(".repair()", function () {
        it("should restore durability to 100", function () {
            repair(item)
            expect(item.durability).toBe(100)
            
        })

        describe(".succeed()", function () {
            it("return enhancement +1 but not over 20", function () {
                succeed(item)
                expect(item.enhancement).toBe(11)
                
            })
        })
        describe(".fail()", function () {
            it("return enhancement +1 but not over 20", function () {
                fail(theitem)
                expect(theitem.durability).toBe(45)
                
            })
        })
        describe(".fail()", function () {
            it("return enhancement +1 but not over 20", function () {
                fail(item1)
                expect(item1.durability).toBe(40)
                expect(item1.enhancement).toBe(16)
                
            })
        })
    })
})
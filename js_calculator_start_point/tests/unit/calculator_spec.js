var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add 1 to 4 to get 5', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    actual = calculator.previousTotal
    assert.equal(actual, 5)
  })
  it('it can substract 4 from 7 to get 3', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    actual = calculator.previousTotal
    assert.equal(actual, 3)
  })
  it('it can multiply 3 by 5 to get 15', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    actual = calculator.previousTotal
    assert.equal(actual, 15)
  })
  it('it can divide 21 by 7 to get 3', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    actual = calculator.previousTotal
    assert.equal(actual, 3)
  })
  it("it should display the number clicked", function(){
    calculator.numberClick(6)
    assert.equal(6, calculator.runningTotal)
  })

  it("can click operator", function(){
    calculator.operatorClick('+')
    assert.equal('+', calculator.previousOperator)
  })

  it("can clear click", function(){
    calculator.clearClick()
    assert.equal(0,calculator.runningTotal)
  })
});

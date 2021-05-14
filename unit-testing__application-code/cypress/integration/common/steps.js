/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import fizzbuzz from '../../../fizzbuzz'

let inputNumber = 0
let resultat = ''
let resultats = []

Given(`I try with {int}`, (num) => {
  inputNumber = num
})

When(`j'appelle la fonction`, () => {
  resultat = fizzbuzz(inputNumber)
})

Then(`the output shall be: {string} and not {string}`, (text) => {
  expect(resultat).to.eq(text)
})

//  with regular expression to match a string
Then(/^the output shall be \'([^']*)\'$/, (text) => {
  expect(fizzbuzz(inputNumber)).to.eq(text)
})

//  with regular expression to match a string
Then(/^the output shall be \'([^']*)\' and not \'([^']*)\'$/, (text1, text2) => {
  expect(fizzbuzz(inputNumber)).to.eq(text1)
  expect(fizzbuzz(inputNumber)).to.not.eq(text2)
})

Then(/^the number was (-?\d+)$/, (num) => {
  expect(num).to.equal(inputNumber)
})

Given('I try with :', (dataTable) => {
  //console.log('la dataTable, ', dataTable.rawTable.slice(1))
  resultats = dataTable.rawTable
  .slice(1)
  .map(
    (number) => fizzbuzz(number)
  )

  //console.log(resultats)
})

Then('the output shall be', (dataTable) => {
  //console.log('la dataTable de output, ', dataTable.rawTable.slice(1))
  expect(dataTable.rawTable.slice(1).flat()).to.deep.equal(resultats)
})

/*
//  with regular expression to match a string
Then(/^the output shall be (.+)$/, (text) => {
  expect(fizzbuzz(inputNumber)).to.eq(text);
});
*/

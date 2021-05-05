/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import fizzbuzz from '../../../fizzbuzz'

let inputNumber = 0
let resultat = ''

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

/*
//  with regular expression to match a string
Then(/^the output shall be (.+)$/, (text) => {
  expect(fizzbuzz(inputNumber)).to.eq(text);
});
*/

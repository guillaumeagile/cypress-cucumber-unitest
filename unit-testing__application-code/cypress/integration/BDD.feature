Feature: FizzBuzz BDD
  I want to start a FizzBuzz game

Scenario: the number 3 should fizz
    Given I try with 3
    When j'appelle la fonction
    Then the output shall be 'fizz'

Scenario: the number 5 should buzz
    Given I try with 5
    When j'appelle la fonction
    Then the output shall be 'buzz' and not 'fizz'
    And the number was 5

    Scenario: the number 15 should fizzbuzz
    Given I try with 15
    When j'appelle la fonction
    Then the output shall be 'fizzbuzz' and not 'fizz' 
    And the number was 15

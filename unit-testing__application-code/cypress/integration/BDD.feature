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

Scenario Outline: play bowling
  Given I try with <number>
  When j'appelle la fonction
  Then the output shall be '<output>'

  Examples:
    | number | output    | 
    |    3   |  fizz     | 
    |    5   |  buzz     | 
    |    15  |  fizzbuzz | 


 Scenario: two cases in one
    Given I try with :
    |   nombre |
    |   3      |
    |   5      |
    |  15     |
    #When j'appelle la fonction avec les données précédentes
    Then the output shall be
     |   output |
     | fizz     |
     | buzz     |
     | fizzbuzz |

    

Feature: Test Tags feature

@smoke
Scenario: T1
Given Test Scenario T_One

@smoke
Scenario: T2
Given Test Scenario T_Two

@Regression 
Scenario: T3
Given Test Scenario T_Three

@Regression
Scenario: T4
Given Test Scenario T_Four

@smoke @Regression
Scenario: T5
Given Test Scenario T_Five

@test
Scenario: T6
Given Test Scenario T_Six
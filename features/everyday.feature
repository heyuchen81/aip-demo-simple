Feature: Short Smoke Test
  As a guest user
  I want to review the basic site functionality
  In order to pick up any regressions that may have occured in these areas

Background:
  Given user has accessed the Scitation homepage

Scenario: Quick Search Suggestions
  Given user has entered a three letter string into quick search
  When user selects one of the options
  Then search results page is displayed
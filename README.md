# Conga Demo

### By: David Hammond

## Front-End UI/UX

- Used my own custom Layout with CSS Grid
- Tried to use as many Lightning Web Components:
  - Lightning Help Text
  - Lightning Combo Box
  - Lightning Checkbox group
  - Lightning Record View Form
  - Lightning Output FIeld
  - Lightning Data Table
- Allows user to use checkboxes to select the data they wish to see for a particular business and then select the business from the dropdown and view the information about the selected business.

## Front-End Logic

- I did not take on TS with this but woudl have preferred it.
- Used wire service to connect Apex with front end logic

  - Get all contacts to be able to generate total contacts field
  - Get only contacts with Customer Success for generation of
  - Get only contacts with Application Developer for other table
  - Get all account info to populate the ComboBox
  - User selects Combo box and I set selectedRecordId which is tied to the lightning component and it uses the lightning data service to retrieve the record
  - Implemented the Email Domain field and populated using Apex calls in playground

  ## Front-End Testing

  - Used Jest to do basic front end tests and ensure the correct lightning components were being rendered.
  - Felt like I struggled to test components in a non-basic way.

## Back-End Logic

- Set up a series of basic queries to fetch the needed data from the salesforce org.
- Fetches all the base data to power the front end logic.

## Back-End Testing

- Wrote tests using Apex to the queries and ensure that the queries are tested and working appropriately.

## Improvements

- UI/UX wise there is a small glitch in that there is some additional gray hanging at the bottom of the second table, needs some CSS love.
- Product Descision: As a user if there is not data for a field, do I expect to see a blank field or N/A or just not see anything if no data. Right now blank, but I would like to put more thought into what makes sense for a user.
- Apex code could have been cleaner. I would like to spend some time learning this language better.
- Front end tests felt almost worthless. Not comprehensive. I struggled to get the tests to deep render. I would need to read some additional documentation and understand how to more effectively teat these components.

## Screen-Shots

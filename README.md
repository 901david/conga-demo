# Conga Demo: By David Hammond

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

- I did not take on TypeScript with this but would have preferred it.
- Used wire service to connect Apex with front end logic

  - Get all contacts to be able to generate total contacts field
  - Get only contacts with Customer Success in title for generation of the Contacts with Customer Success table
  - Get only contacts with Application Developer in title for generation of the Contacts with Application Developer table
  - Get all account info to populate the ComboBox with appropriate Account name and Record Id
  - User selects Account in Combo Box and I set selectedRecordId which is tied to the lightning component and it uses the lightning data service to retrieve the record. Based on which data fields are selected in the checkbox I dynamically render the data fields
  - Implemented the Email Domain field and populated using Apex calls in playground

## Front-End Testing

- Used Jest to do basic front end tests and ensure the correct lightning components were being rendered.
- Felt like I struggled to test components in a non-basic way.

## Back-End Logic

- Set up a series of basic queries to fetch the needed data from the Salesforce org.
- Fetches all the base data to power the front-end logic.

## Back-End Testing

- Wrote tests using Apex to test and ensure the queries were working as expected.

## Improvements

- UI/UX wise there is a small glitch in that there is some additional gray hanging at the bottom of the second table, needs some CSS love.
- Product Decision: As a user if there is not data for a field, do I expect to see a blank field or N/A or just not see anything if no data. Right now blank, but I would like to put more thought into what makes sense for a user.
- Apex code could have been cleaner. I would like to spend some time learning this language better.
- Front-end tests felt almost worthless. Not comprehensive. I struggled to get the tests to deep render. I would need to read some additional documentation and understand how to more effectively test these components.

## Screen-Shots

### Initial Page Load

[logo]: https://github.com/901david/conga-demo/blob/master/images/initial.png "Initial Page load"

### With Data Loaded

[logo]: https://github.com/901david/conga-demo/blob/master/images/withdata.png "Initial Page load"

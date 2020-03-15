@isTest
public class OrgDataControllerTest {
  static String setUpAccountWithContacts() {
    //Create an Account
    Account myAccount = new Account(name = 'Initech');

    insert myAccount;

    // Add contacts to associated account
    Contact contactOne = new Contact(
      lastname = 'Johnson',
      title = 'Customer Success',
      accountid = myAccount.Id
    );
    Contact contactTwo = new Contact(
      lastname = 'Smith',
      title = 'Sales Manager',
      accountid = myAccount.Id
    );
    Contact contactThree = new Contact(
      lastname = 'Boris',
      title = 'Customer Success',
      accountid = myAccount.Id
    );
    Contact contactFour = new Contact(
      lastname = 'Pringle',
      title = 'Application Developer',
      accountid = myAccount.Id
    );
    Contact contactFive = new Contact(
      lastname = 'Smith',
      title = 'Application Designer',
      accountid = myAccount.Id
    );
    Contact contactSix = new Contact(
      lastname = 'Shmeegle',
      title = 'Sales Manager',
      accountid = myAccount.Id
    );
    insert contactOne;
    insert contactTwo;
    insert contactThree;
    insert contactFour;
    insert contactFive;
    insert contactSix;

    return myAccount.id;
  }

  @isTest
  static void TestGetAllContactsBlank() {
    // Should return Blank list when no  id
    Contact[] emptyResult = OrgDataController.getAllContacts('');
    System.assertEquals(new List<Contact>(), emptyResult);
  }

  @isTest
  static void TestGetAllContactsWithData() {
    //should return correct length of all contacts
    String accountId = OrgDataControllerTest.setUpAccountWithContacts();
    Contact[] populatedResult = OrgDataController.getAllContacts(accountId);
    System.assertEquals(6, populatedResult.size());
  }

  @isTest
  static void TestGetApplicationDeveloperContactsBlank() {
    // Should return Blank list when no  id
    Contact[] emptyResult = OrgDataController.getApplicationDeveloperContacts(
      ''
    );
    System.assertEquals(new List<Contact>(), emptyResult);
  }

  @isTest
  static void TestGetApplicationDeveloperContacts() {
    //should return correct length of all contacts that have Application Developer in Title
    String accountId = OrgDataControllerTest.setUpAccountWithContacts();
    Contact[] populatedResult = OrgDataController.getApplicationDeveloperContacts(
      accountId
    );
    System.assertEquals(1, populatedResult.size());
  }

  @isTest
  static void TestGetCustomerSuccessContactsBlank() {
    // Should return Blank list when no  id
    Contact[] emptyResult = OrgDataController.getCustomerSuccessContacts('');
    System.assertEquals(new List<Contact>(), emptyResult);
  }

  @isTest
  static void TestGetCustomerSuccessContacts() {
    //should return correct length of all contacts that have Customer Success in their Title
    String accountId = OrgDataControllerTest.setUpAccountWithContacts();
    Contact[] populatedResult = OrgDataController.getCustomerSuccessContacts(
      accountId
    );
    System.assertEquals(2, populatedResult.size());
  }

  @isTest
  static void TestGetAllAccountInfo() {
    //should return correct info about accounts
    String accountId = OrgDataControllerTest.setUpAccountWithContacts();
    //Create a Second Account
    Account anotherAccount = new Account(name = 'Initech');
    insert anotherAccount;

    Account[] accountResults = OrgDataController.getAllAccountInfo();
    System.assertEquals(2, accountResults.size());

    String[] expectedResults = new List<String>();
    expectedResults.add(accountId);
    expectedResults.add(anotherAccount.Id);

    Integer accountResultsLength = accountResults.size();

    for (Integer i = 0; i < accountResultsLength; i++) {
      System.assertEquals(accountResults.get(i).Id, expectedResults.get(i));
    }
  }
}

@isTest
public class OrgDataControllerTest {
  @isTest
  static void TestGetAllContactsBlank() {
    // Should return Blank list when no  id
    Contact[] emptyResult = OrgDataController.getAllContacts('');
    System.assertEquals(new List<Contact>(), emptyResult);
  }

  @isTest
  static void TestGetAllContactsWithData() {
    //Create an Account
    Account myAccount = new Account(name = 'Initech');

    insert myAccount;

    // Add contacts and check for correct data
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
    insert contactOne;
    insert contactTwo;
    insert contactThree;
    System.debug('here is the ID' + myAccount.Id);
    Contact[] populatedResult = OrgDataController.getAllContacts(myAccount.Id);
    System.assertEquals(3, populatedResult.size());
  }
}

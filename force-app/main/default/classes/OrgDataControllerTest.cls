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
    List<Contact> myContactList = new List<Contact>();
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

    myContactList.Add(contactOne);
    myContactList.Add(contactTwo);
    myContactList.Add(contactThree);

    Contact[] populatedResult = OrgDataController.getAllContacts(myAccount.Id);
    System.assertEquals(myContactList, populatedResult);
  }
}

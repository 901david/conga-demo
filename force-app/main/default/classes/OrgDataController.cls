public with sharing class OrgDataController {
    public OrgDataController() {
    }

    @AuraEnabled(cacheable=true)
    public static Contact[] getCustomerSuccessContacts(String selectedRecordId) {
        if (String.isBlank(selectedRecordId)) {
          return new List<Contact>();
        }

        Contact[] customerSuccessContacts = [SELECT LastName, Title FROM Contact WHERE AccountId=:selectedRecordId AND Title LIKE 'Customer Success'];
        return customerSuccessContacts;
    }

    @AuraEnabled(cacheable=true)
    public static Contact[] getApplicationDeveloperContacts(String selectedRecordId) {
        if (String.isBlank(selectedRecordId)) {
          return new List<Contact>();
        }

        Contact[] applicationDeveloperContacts = [SELECT LastName, Title FROM Contact WHERE AccountId=:selectedRecordId AND Title LIKE 'Application Developer'];
        return applicationDeveloperContacts;
    }

    @AuraEnabled(cacheable=true)
    public static Contact[] getAllContacts(String selectedRecordId) {
        if (String.isBlank(selectedRecordId)) {
          return new List<Contact>();
        }

        Contact[] allContacts = [SELECT LastName, Title FROM Contact WHERE AccountId=:selectedRecordId];
        return allContacts;
    }
}

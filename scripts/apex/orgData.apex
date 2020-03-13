public with sharing class OrgDataController {
    @AuraEnabled public String FirstProperty {get;set;}

    @AuraEnabled
    public static void initOrgDataController() {
        OrgDataController orgDataController = new OrgDataController();
        orgDataController.FirstProperty = 'Hello World'
        return orgDataController;
    }

    @AuraEnabled
    public static void updateAnnualRevenue(String accountId, Decimal annualRevenue) {
        Account acct = [SELECT Id, Name, BillingCity FROM Account WHERE Id = :accountId];
        acct.AnnualRevenue = annualRevenue;

        // Perform isAccessible() and isUpdateable() checks here 
        update acct;
    }

    
}
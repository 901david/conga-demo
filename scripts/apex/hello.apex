// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

Account[] accounts = [SELECT Id, Name, Website FROM Account];

for (Integer i = 0; i < accounts.size(); i++) {
    
    System.debug('Accoount' + accounts.get(i));
}

Account acct = [SELECT Website, EMAIL_DOMAIN__C FROM Account WHERE Id='0012F00000al0D3QAI'];
System.debug('Previous vlaues' + acct.Website + acct.EMAIL_DOMAIN__C);
acct.EMAIL_DOMAIN__C = 'sforce.com';
update acct;



public with sharing class ContactController {

@AuraEnabled(cacheable = true)
public static List<Contact> contactList(){
try {
        List<Contact> contactList = [Select FirstName, LastName, Email from Contact WITH SECURITY_ENFORCED];
        return contactList;
} catch (Exception e) {
    throw new AuraHandledException(e.getMessage());
}
}
}

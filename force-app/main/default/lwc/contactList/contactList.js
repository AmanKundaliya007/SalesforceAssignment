import { LightningElement, wire } from 'lwc';

import contactList from '@salesforce/apex/ContactController.contactList';
const cols = [
    {label:'First Name', fieldName:'FirstName',type:'text'},
    {label:'Last Name', fieldName:'LastName',type:'text'},
    {label:'Email', fieldName:'Email',type:'Email'},

];

export default class ContactList extends LightningElement {

    contactRecords;
    errors;
    columns = cols;
    

    @wire(contactList)
        wiredContacts({data,error}){
            if(data){
                console.log('data',data);
                this.contactRecords = data;
                console.log('contactRecords',this.contactRecords);
                this.errors = undefined;
            }
            if(error){
                this.errors = error;
                this.data = undefined;
            }
        }


}
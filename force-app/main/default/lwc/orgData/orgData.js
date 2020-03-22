import { LightningElement, track, wire } from "lwc";

import getApplicationDeveloperContacts from "@salesforce/apex/OrgDataController.getApplicationDeveloperContacts";
import getCustomerSuccessContacts from "@salesforce/apex/OrgDataController.getCustomerSuccessContacts";
import getAllContacts from "@salesforce/apex/OrgDataController.getAllContacts";
import getAllAccountInfo from "@salesforce/apex/OrgDataController.getAllAccountInfo";
import { DEFAULT_COLUMN_DATA, DEFAULT_FIELD_DATA } from "./constants";

export default class OrgData extends LightningElement {
  @track selectedRecordId;
  @track fieldValues = { ...DEFAULT_FIELD_DATA };
  @track columns = Array.from(DEFAULT_COLUMN_DATA);
  @track selectedFieldValues = Object.keys(DEFAULT_FIELD_DATA);

  @wire(getAllAccountInfo)
  allAccountInfo;
  @wire(getCustomerSuccessContacts, { selectedRecordId: "$selectedRecordId" })
  customerSuccessContacts;
  @wire(getApplicationDeveloperContacts, {
    selectedRecordId: "$selectedRecordId"
  })
  applicationDeveloperContacts;
  @wire(getAllContacts, { selectedRecordId: "$selectedRecordId" })
  allContacts;

  get totalContacts() {
    if (this.allContacts.data === undefined) return 0;
    return this.allContacts.data.length;
  }

  get checkboxTooltip() {
    return "Allows selection of fields you wish to retrieve for business selected in dropdown";
  }

  get dropdownTooltip() {
    return "Select a company name from the Dropdown to see summary information about it and its related Contacts";
  }

  get checkboxOptions() {
    return Object.keys(DEFAULT_FIELD_DATA).map(key => ({
      value: key,
      label: DEFAULT_FIELD_DATA[key]
    }));
  }

  get summaryRecordsFields() {
    return Object.keys(this.fieldValues).map(key => ({
      value: key,
      label: this.fieldValues[key]
    }));
  }

  get dropdownOptions() {
    if (this.allAccountInfo.data === undefined) return [];

    return this.allAccountInfo.data.map(({ Id, Name }) => ({
      value: Id,
      label: Name
    }));
  }

  handleFieldChange({ detail: { value: selectedRecordId } }) {
    this.generateFieldValues();
    this.selectedRecordId = selectedRecordId;
  }

  handleDataChange(evt) {
    this.selectedFieldValues = evt.detail.value;
  }

  generateFieldValues() {
    this.fieldValues = this.selectedFieldValues.reduce((map, key) => {
      map[key] = DEFAULT_FIELD_DATA[key];
      return map;
    }, {});
  }
}

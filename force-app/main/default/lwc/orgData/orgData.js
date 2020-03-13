import { LightningElement, track, wire } from "lwc";
import { getRecordUi } from "lightning/uiRecordApi";

const DEFAULT_COLUMN_DATA = [
  { label: "Account Name", fieldName: "Name" },
  { label: "Email Domain", fieldName: "email_domain__c" },
  {
    label: "Number of Employees",
    fieldName: "NumberOfEmployees",
    type: "number"
  },
  { label: "Phone", fieldName: "Phone", type: "phone" },
  { label: "Billing Street", fieldName: "BillingStreet" },
  { label: "Billing City", fieldName: "BillingCity" },
  { label: "Billing State", fieldName: "BillingState" },
  { label: "Billing Postalcode", fieldName: "BillingPostalCode" }
];

const DEFAULT_FIELD_DATA = {
  Name: "Name",
  email_domain__c: "Email Domain",
  NumberOfEmployees: "NumberOfEmployees",
  Phone: "Phone",
  BillingStreet: "BillingStreet",
  BillingCity: "BillingCity",
  BillingState: "BillingState",
  BillingPostalCode: "BillingPostalCode"
};

export default class OrgData extends LightningElement {
  @track selectedRecordId = "0012F00000al0CsQAI";
  possibleFields = {
    Name: "Name",
    email_domain__c: "Email Domain",
    NumberOfEmployees: "NumberOfEmployees",
    Phone: "Phone",
    BillingStreet: "BillingStreet",
    BillingCity: "BillingCity",
    BillingState: "BillingState",
    BillingPostalCode: "BillingPostalCode"
  };
  @track fieldValues = { ...DEFAULT_FIELD_DATA };
  @track columns = Array.from(DEFAULT_COLUMN_DATA);
  @track selectedFieldValues = Object.keys(DEFAULT_FIELD_DATA);

  @wire(getRecordUi, {
    recordIds: [
      "0012F00000al0CsQAI",
      "0012F00000al0CtQAI",
      "0012F00000al0CuQAI",
      "0012F00000al0CvQAI",
      "0012F00000al0CwQAI",
      "0012F00000al0CxQAI",
      "0012F00000al0CyQAI",
      "0012F00000al0CzQAI",
      "0012F00000al0D0QAI",
      "0012F00000al0D1QAI",
      "0012F00000al0D2QAI",
      "0012F00000al0D3QAI"
    ],
    layoutTypes: "Full",
    modes: "View"
  })
  records;

  get totalContacts() {
    //TODO: implement
    return [];
  }

  handleFieldChange({ detail: { value: selectedRecordId } }) {
    this.customizeFetchedData();
    this.selectedRecordId = selectedRecordId;
  }

  createColumnStructure() {
    this.columns = DEFAULT_COLUMN_DATA.filter(
      column => column.fieldName in this.fieldValues
    );
  }

  customizeFetchedData() {
    this.fieldValues = this.selectedFieldValues.reduce((map, key) => {
      map[key] = DEFAULT_FIELD_DATA[key];
      return map;
    }, {});
  }

  handleDataChange(evt) {
    this.selectedFieldValues = evt.detail.value;
  }

  get checkboxOptions() {
    return Object.keys(DEFAULT_FIELD_DATA).map(key => ({
      value: key,
      label: DEFAULT_FIELD_DATA[key],
      key
    }));
  }

  get summaryRecordsFields() {
    return Object.keys(this.fieldValues).map(key => ({
      value: key,
      label: this.fieldValues[key],
      key
    }));
  }

  get dropdownOptions() {
    const data = this.recordsData.map(row => ({
      value: row.RecordId,
      label: row.Name,
      key: row.RecordId
    }));

    return data;
  }

  get recordsData() {
    const recordsProxy = Object.assign({}, this.records.data).records;
    const recordsKeys = Object.keys(Object.assign({}, recordsProxy));

    const records = recordsKeys.map(RecordId => {
      const {
        Name: { value: BaseName },
        Phone: { value: Phone },
        NumberOfEmployees: { value: NumberOfEmployees },
        BillingStreet: { value: BillingStreet },
        BillingCity: { value: BillingCity },
        BillingState: { value: BillingState },
        BillingPostalCode: { value: BillingPostalCode }
      } = Object.assign(recordsProxy[RecordId]).fields;
      const Name = BaseName.replace(/&amp;/g, "&");

      return {
        RecordId,
        Name,
        Phone,
        NumberOfEmployees,
        BillingStreet,
        BillingCity,
        BillingState,
        BillingPostalCode
      };
    });

    return records;
  }
}

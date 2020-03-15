import { createElement } from "lwc";
import { registerApexTestWireAdapter } from "@salesforce/wire-service-jest-util";

import OrgData from "c/orgData";
import getApplicationDeveloperContacts from "@salesforce/apex/OrgDataController.getApplicationDeveloperContacts";
import getCustomerSuccessContacts from "@salesforce/apex/OrgDataController.getCustomerSuccessContacts";
import getAllContacts from "@salesforce/apex/OrgDataController.getAllContacts";
import getAllAccountInfo from "@salesforce/apex/OrgDataController.getAllAccountInfo";

const getApplicationDeveloperContactsWireAdapter = registerApexTestWireAdapter(
  getApplicationDeveloperContacts
);
const getCustomerSuccessContactsWireAdapter = registerApexTestWireAdapter(
  getCustomerSuccessContacts
);
const getAllContactsWireAdapter = registerApexTestWireAdapter(getAllContacts);
const getAllAccountInfoWireAdapter = registerApexTestWireAdapter(
  getAllAccountInfo
);

const applicationContactsData = [
  { LastName: "Smith", Title: "Appplication Developer" },
  { LastName: "Mitchell", Title: "Appplication Developer" }
];
const CustomerContactsData = [{ LastName: "Smith", Title: "Customer Success" }];
const allContactsData = [
  { LastName: "Smith", Title: "Appplication Developer" },
  { LastName: "Mitchell", Title: "Appplication Developer" },
  { LastName: "Smith", Title: "Sales Manager" },
  { LastName: "Smith", Title: "Customer Success" }
];
const allAccountInfoData = [
  { Id: "12345", Name: "Initech" },
  { Id: "123456", Name: "Dunder Mifflin" },
  { Id: "1234567", Name: "US  Forestry Service" }
];

describe("OrgData", () => {
  let element;
  beforeEach(() => {
    element = createElement("c-org-data", {
      is: OrgData
    });
    document.body.appendChild(element);

    getApplicationDeveloperContactsWireAdapter.emit(applicationContactsData);
    getCustomerSuccessContactsWireAdapter.emit(CustomerContactsData);
    getAllContactsWireAdapter.emit(allContactsData);
    getAllAccountInfoWireAdapter.emit(allAccountInfoData);
  });

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  test("renders lightning combo box dropdown", async () => {
    await Promise.resolve();
    const comboBox = element.shadowRoot.querySelector("lightning-combobox");
    expect(comboBox).toBeTruthy();
  });

  test("renders two toooltips in header", async () => {
    await Promise.resolve();
    const helperTooltips = element.shadowRoot.querySelectorAll(
      "lightning-helptext"
    );
    expect(helperTooltips.length).toEqual(2);
  });

  test("renders lightning checkbox group", async () => {
    await Promise.resolve();
    const checkboxGroup = element.shadowRoot.querySelector(
      "lightning-checkbox-group"
    );
    expect(checkboxGroup).toBeTruthy();
  });

  test("renders lightning record view form", async () => {
    await Promise.resolve();
    const recordViewForm = element.shadowRoot.querySelector(
      "lightning-record-view-form"
    );
    expect(recordViewForm).toBeTruthy();
  });

  test("renders correct title for Customer success table", async () => {
    await Promise.resolve();
    const customerSuccessTableHeader = element.shadowRoot.querySelector(
      ".customer-success > p"
    );
    expect(customerSuccessTableHeader.textContent).toEqual(
      "Related Contacts: Customer Success"
    );
  });

  test("renders Customer success table", async () => {
    await Promise.resolve();
    const customerSuccessTable = element.shadowRoot.querySelector(
      ".customer-success > lightning-datatable"
    );
    expect(customerSuccessTable).toBeTruthy();
  });

  test("renders correct title for Application Developer table", async () => {
    await Promise.resolve();
    const customerSuccessTableHeader = element.shadowRoot.querySelector(
      ".application-developer > p"
    );
    expect(customerSuccessTableHeader.textContent).toEqual(
      "Related Contacts: Application Developer"
    );
  });

  test("renders Application Developer table", async () => {
    await Promise.resolve();
    const customerSuccessTable = element.shadowRoot.querySelector(
      ".application-developer > lightning-datatable"
    );
    expect(customerSuccessTable).toBeTruthy();
  });
});

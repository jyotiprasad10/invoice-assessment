import React, { useState } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import ActionButtons from "../ActionButtons/ActionButtons";
import logo from "/Users/jyotiprasadpatil/Documents/Jyotiprasad Patil Saarland/Working Student Jobs/invoice-assessment/src/assets/fileUpload.svg";
import vendor from '/Users/jyotiprasadpatil/Documents/Jyotiprasad Patil Saarland/Working Student Jobs/invoice-assessment/src/assets/Vendor.svg'
import invoice from '/Users/jyotiprasadpatil/Documents/Jyotiprasad Patil Saarland/Working Student Jobs/invoice-assessment/src/assets/Invoice.svg'
import comments from '/Users/jyotiprasadpatil/Documents/Jyotiprasad Patil Saarland/Working Student Jobs/invoice-assessment/src/assets/Comments.svg'

const Form = () => {
  const [file, setFile] = useState(null);
  const [activeTab, setActiveTab] = useState("Vendor Details");
  const navigate = useNavigate();

  const vendors = [
    { id: 1, name: "Vendor 1" },
    { id: 2, name: "Vendor 2" },
    { id: 3, name: "Vendor 3" },
  ];

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Selected file:", selectedFile);
    }
  };

  const handleSave = (values) => {
    const formData = { ...values, uploadedFile: file ? file.name : null };
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Saved form data:", formData);
  };

  const handleSubmit = (values) => {
    handleSave(values);
    alert("Form submitted!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.createNewInvoice}>Create New Invoice</h2>
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Vendor Details" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("Vendor Details")}
          >
            Vendor Details
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Invoice Details" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("Invoice Details")}
          >
            Invoice Details
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Comments" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("Comments")}
          >
            Comments
          </button>
        </div>
      </div>

      <div className={styles.formLayout}>
        <div className={styles.leftSection}>
          <div className={styles.uploadContainer}>
            <div className={styles.uploadContent}>
              <h2 className={styles.uploadHeading}>Upload Your Invoice</h2>
              <p className={styles.uploadSubHeading}>
                To auto-populate fields and save time
              </p>
              <div className={styles.imageWrapper}>
                <img
                  src={logo}
                  alt="Invoice Upload Illustration"
                  className={styles.uploadImage}
                />
              </div>
              <div className={styles.uploadButtonWrapper}>
                <input
                  type="file"
                  id="fileUpload"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
                <label htmlFor="fileUpload" className={styles.uploadButton}>
                  Upload File
                </label>
              </div>
              <p className={styles.uploadInstructions}>
                <span className={styles.blueText}>Click to upload</span> or Drag
                and drop
              </p>
              {file && (
                <p className={styles.fileName}>
                  Selected File: <strong>{file.name}</strong>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <Formik
            initialValues={{
              vendor: "",
              purchaseOrderNumber: "",
              invoiceNumber: "",
              invoiceDate: "",
              totalAmount: "",
              paymentTerms: "",
              invoiceDueDate: "",
              glPostDate: "",
              invoiceDescription: "",
              expenseLineAmount: "",
              department: "",
              account: "",
              location: "",
              expenseDescription: "",
              comments: "",
            }}
            onSubmit={handleSubmit}
          >
            {() => (
              <FormikForm>
                <div className={styles.sectionHeader}>
                  <div className={styles.vendorDetailsHeader}>
                    <img
                      src={vendor}
                      alt="Logo"
                      className={styles.vendorLogo}
                    />
                    <h3>Vendor Details</h3>
                  </div>

                  <p>Vendor Information</p>
                  <label htmlFor="vendor">Vendor*</label>
                  <Field
                    as="select"
                    id="vendor"
                    name="vendor"
                    className={styles.inputField}
                  >
                    <option value="">Select Vendor</option>
                    {vendors.map((vendor) => (
                      <option key={vendor.id} value={vendor.name}>
                        {vendor.name}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className={styles.sectionHeader}>
                <div className={styles.vendorDetailsHeader}>
                    <img
                      src={invoice}
                      alt="invoice"
                      className={styles.vendorLogo}
                    />
                    <h3>Invoice Details</h3>
                  </div>
                  <p>General Information</p>
                  <label htmlFor="purchaseOrderNumber">Purchase Order No</label>
                  <Field
                    as="select"
                    id="purchaseOrderNumber"
                    name="purchaseOrderNumber"
                    className={styles.inputField}
                    placeholder = 'Select PO Number'
                  >
                    
                    <option value="PO123">PO123</option>
                    <option value="PO456">PO456</option>
                  </Field>
                </div>

                <div className={styles.sectionHeader}>
                  <h3>Invoice Details</h3>
                  <div className={styles.inlineFields}>
                    <div className={styles.inlineField}>
                      <label htmlFor="invoiceNumber">Invoice Number</label>
                      <Field
                        as="select"
                        id="invoiceNumber"
                        name="invoiceNumber"
                        className={styles.inputField}
                      >
                        <option value="">Select Invoice Number</option>
                        <option value="INV001">INV001</option>
                        <option value="INV002">INV002</option>
                      </Field>
                    </div>

                    <div className={styles.inlineField}>
                      <label htmlFor="invoiceDate">Invoice Date</label>
                      <Field
                        type="date"
                        id="invoiceDate"
                        name="invoiceDate"
                        className={styles.inputField}
                      />
                    </div>
                  </div>

                  <div className={styles.inlineFields}>
                    <div className={styles.inlineField}>
                      <label htmlFor="totalAmount">Total Amount</label>
                      <Field
                        type="number"
                        id="totalAmount"
                        name="totalAmount"
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inlineField}>
                      <label htmlFor="paymentTerms">Payment Terms</label>
                      <Field
                        as="select"
                        id="paymentTerms"
                        name="paymentTerms"
                        className={styles.inputField}
                      >
                        <option value="">Select Payment Terms</option>
                        <option value="30Days">30 Days</option>
                        <option value="60Days">60 Days</option>
                      </Field>
                    </div>
                  </div>

                  <div className={styles.inlineFields}>
                    <div className={styles.inlineField}>
                      <label htmlFor="invoiceDueDate">Invoice Due Date</label>
                      <Field
                        type="date"
                        id="invoiceDueDate"
                        name="invoiceDueDate"
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inlineField}>
                      <label htmlFor="glPostDate">GL Post Date</label>
                      <Field
                        type="date"
                        id="glPostDate"
                        name="glPostDate"
                        className={styles.inputField}
                      />
                    </div>
                  </div>

                  <div className={styles.sectionHeader}>
                    <label htmlFor="invoiceDescription">
                      Invoice Description
                    </label>
                    <Field
                      as="textarea"
                      id="invoiceDescription"
                      name="invoiceDescription"
                      className={styles.inputField}
                    />
                  </div>
                </div>

                
                <div className={styles.sectionHeader}>
                  <h3>Expense Details</h3>
                </div>

                <div className={styles.inlineFields}>
                  <div className={styles.inlineField}>
                    <label htmlFor="expenseLineAmount">Line Amount</label>
                    <Field
                      type="number"
                      id="expenseLineAmount"
                      name="expenseLineAmount"
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.inlineField}>
                    <label htmlFor="department">Department</label>
                    <Field
                      as="select"
                      id="department"
                      name="department"
                      className={styles.inputField}
                    >
                      <option value="">Select Department</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                    </Field>
                  </div>
                </div>

                <div className={styles.inlineFields}>
                  <div className={styles.inlineField}>
                    <label htmlFor="account">Account</label>
                    <Field
                      as="select"
                      id="account"
                      name="account"
                      className={styles.inputField}
                    >
                      <option value="">Select Account</option>
                      <option value="Acc1">Acc1</option>
                      <option value="Acc2">Acc2</option>
                    </Field>
                  </div>

                  <div className={styles.inlineField}>
                    <label htmlFor="location">Location</label>
                    <Field
                      as="select"
                      id="location"
                      name="location"
                      className={styles.inputField}
                    >
                      <option value="">Select Location</option>
                      <option value="NY">NY</option>
                      <option value="LA">LA</option>
                    </Field>
                  </div>
                </div>

                <div className={styles.sectionHeader}>
                  <label htmlFor="expenseDescription">Description</label>
                  <Field
                    as="textarea"
                    id="expenseDescription"
                    name="expenseDescription"
                    placeholder="Enter description"
                    className={styles.inputField}
                  />
                </div>

                
                <div className={styles.sectionHeader}>
                <div className={styles.vendorDetailsHeader}>
                    <img
                      src={comments}
                      alt="comments"
                      className={styles.vendorLogo}
                    />
                    <h3>Comments</h3>
                  </div>
                  <Field
                    as="textarea"
                    id="comments"
                    name="comments"
                    placeholder="Enter comments"
                    className={styles.inputField}
                  />
                </div>

                <ActionButtons onSave={handleSave} onSubmit={handleSubmit} />
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>

      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Form;

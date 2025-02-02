import React from "react";

import { Navigate } from "react-router-dom";
import { DASHBOARD, COMMUNICATIONS, PATIENT, SETTINGS, SCHEDULING, UNSIGNED_VISITS, INTAKE_FORMS, BILLING_ROUTES } from "./constants";

// import PatientListing from "../pages/patient/PatientListing/PatientListing";
// import AddPatient from "../pages/patient/AddPatient/AddPatient";
// import PatientCharting from "../pages/patient/patientCharting/PatientCharting";
// import AccountSettings from "../pages/settings/AccountSettings/AccountSettings";
// import Setting from "../pages/settings/Setting";
// import Appointment from "../pages/settings/appoinments/Appointment";
// import ContactDirectory from "../pages/communications/ContactDirectory/ContactDirectory";
// import Tasks from "../pages/communications/AddTask/Tasks";
// import ProviderDashboard from "../pages/dashboard/provider-dashboard/ProviderDashboard";
// import ProviderGroup from "../pages/settings/providerGroup/ProviderGroup";
// import Login from "../pages/Authentication/login/Login";
// import PatientEncounter from "../pages/scheduling/patientEncounter/PatientEncounter";
// import PatientVideoCall from "../pages/scheduling/patientEncounter/patientVideoCall/PatientVideoCall";
// import Scheduling from "../pages/scheduling/Scheduling";
// import CreateNewPassword from "../pages/Authentication/CceateNewPassword/CreateNewPassword";
// import ProviderDetails from "../pages/settings/providerGroup/groupTabs/users/ProviderDetails";
// import StaffDetails from "../pages/settings/providerGroup/groupTabs/users/StaffDetails";
// import UnsignedVisit from "../pages/unsignedVisits/UnsignedVisit";
// import FormBuilder from "../pages/settings/formBuilder/FormBuilder";
// import CreateVisitNotes from "../pages/settings/formBuilder/visitNotes/createVisitNote/CreateVisitNotes";
// import IntakeForm from "../pages/settings/formBuilder/intakeForm/IntakeForm";
// import AppointmentIntakeForms from "../pages/scheduling/intakeForms/AppointmentIntakeForms";
// import BillingWrapper from "../pages/Billing/BillingWrapper";
// import SuperBillWrapper from "../pages/Billing/ReadyForBilling/SuperBillWrapper";
// import Master from "../pages/settings/Master/Master";
// import VisitNoteFormShown from "../pages/settings/formBuilder/visitNotes/VisitNoteFormShown";
// import UpdateVisitNoteForm from "../pages/settings/formBuilder/visitNotes/createVisitNote/UpdateVisitNoteForm";
// import CreateIntakeForm from "../pages/settings/formBuilder/visitNotes/createIntakeForm/CreateIntakeForm";
// import UpdateIntakePlan from "../pages/settings/formBuilder/visitNotes/createIntakeForm/UpdateIntakePlan";
// import PreviewIntakePlan from "../pages/settings/formBuilder/visitNotes/createIntakeForm/PreviewIntakePlan";
// import IntakePlanFormShown from "../pages/settings/formBuilder/visitNotes/createIntakeForm/IntakePlanFormShown";
// import CreateSuperBill from "../pages/Billing/SuperBill/CreateSuperBill";
// import VisitNotes from "../pages/settings/Templates/Templates/Templates";
// import Templates from "../pages/settings/Templates/Templates/Templates";
// import CreateNewVisitNote from "../pages/settings/Templates/Templates/CreateNewVisitNote";
// import TemplateVisitNoteFormShown from "../pages/settings/Templates/Templates/TemplateVisitNoteFormShown";
// import PreviewTemplateVisit from "../pages/settings/Templates/Templates/PreviewTemplateVisit";
// import UpdateTemplateVisitNote from "../pages/settings/Templates/Templates/UpdateTemplateVisitNote";
// import CreateNewCustomQuestionnaire from "../pages/settings/Templates/Templates/CustomQuestionnaire/CreateNewCustomQuestionnaire";
// import PreviewCustomQuestionnaire from "../pages/settings/Templates/Templates/CustomQuestionnaire/PreviewCustomQuestionnaire";
// import CustomQueFormShown from "../pages/settings/Templates/Templates/CustomQuestionnaire/CustomQueFormShown";

const AUTH_PROTECTED_ROUTES = [
    // { path: `${COMMUNICATIONS.COMMUNICATION}${COMMUNICATIONS.TASKS}`, component: <Tasks /> },
    // { path: `${COMMUNICATIONS.COMMUNICATION}${COMMUNICATIONS.CONTACT_DIRECTORY}`, component: <ContactDirectory /> },

    // { path: `${PATIENT.ADD_PATIENT}`, component: <AddPatient /> },
    // { path: `${PATIENT.ADD_PATIENT}/:patientId`, component: <AddPatient /> },
    // { path: `${PATIENT.ADD_PATIENT}/:patientId/:scheduleId`, component: <AddPatient /> },
    // { path: `${PATIENT.PATIENT_LISTING}`, component: <PatientListing /> },
    // { path: `${PATIENT.PATIENT_LISTING}${PATIENT.PATIENT_CHARTING}/:patientId`, component: <PatientCharting /> },

    // { path: `${SETTINGS.SETTING}`, component: <Setting /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.APPOINTMENT}`, component: <Appointment /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.ACCOUNT_SETTINGS}`, component: <AccountSettings /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.PROVIDER_GROUP}`, component: <ProviderGroup /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.PROVIDER_GROUP}${SETTINGS.PROVIDER_DETAILS}`, component: <ProviderDetails /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.PROVIDER_GROUP}${SETTINGS.STAFF_DETAILS}`, component: <StaffDetails /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.FORM_BUILDER}`, component: <FormBuilder /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.FORM_BUILDER}${SETTINGS.CREATE_VISIT_NOTE}`, component: <CreateVisitNotes /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.FORM_BUILDER}${SETTINGS.UPDATE_VISIT_NOTE}`, component: <UpdateVisitNoteForm /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.FORM_BUILDER}${SETTINGS.CREATE_INTAKE_FORM}`, component: <CreateIntakeForm />},
    // { path: `${SETTINGS.SETTING}${SETTINGS.FORM_BUILDER}${SETTINGS.UPDATE_INTAKE_FORM}`, component: <UpdateIntakePlan /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.FORM_BUILDER}${SETTINGS.PREVIEW_INTAKE_FORM}`, component: <PreviewIntakePlan /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.FORM_BUILDER}${SETTINGS.INTAKE_PLAN_FORM_SHOWN}`, component: <IntakePlanFormShown /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.MASTER}`, component: <Master /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.FORM_BUILDER}${SETTINGS.FORM_SHOWN}`, component: <VisitNoteFormShown /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.TEMPLATES}`, component: <Templates /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.TEMPLATES}${SETTINGS.CREATE_TEMPLATE_VISIT_NOTES}`, component: <CreateNewVisitNote /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.TEMPLATES}${SETTINGS.FORM_SHOWN}`, component: <TemplateVisitNoteFormShown /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.TEMPLATES}${SETTINGS.PREVIEW_TEMPLATE_VISIT_NOTES}`, component: <PreviewTemplateVisit /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.TEMPLATES}${SETTINGS.UPDATE_TEMPLATE_VISIT_NOTES}`, component: <UpdateTemplateVisitNote /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.TEMPLATES}${SETTINGS.CREATE_NEW_CUSTOM_QUESTIONAIRE}`, component: <CreateNewCustomQuestionnaire /> },
    // { path: `${SETTINGS.SETTING}${SETTINGS.TEMPLATES}${SETTINGS.PREVIEW_CUSTOM_QUESTIONNAIRE}`, component: <PreviewCustomQuestionnaire/>  },
    // { path: `${SETTINGS.SETTING}${SETTINGS.TEMPLATES}${SETTINGS.CUSTOM_QUE_FORM_SHOWN}`, component: <CustomQueFormShown /> },

    // { path: `${DASHBOARD.PROVIDER}`, component: <ProviderDashboard /> },

    // { path: `${UNSIGNED_VISITS.UNSIGNED_VISIT}`, component: <UnsignedVisit /> },

    // //scheduling routes
    // { path: `${SCHEDULING.ROUTE}`, component: <Scheduling /> },
    // { path: `${SCHEDULING.ROUTE}${SCHEDULING.PATIENT_ENCOUNTER}/:patientId/:scheduleId`, component: <PatientEncounter /> },


    // { path: `${BILLING_ROUTES.BILLING}`, component: <BillingWrapper /> },
    // { path: `${BILLING_ROUTES.BILLING_READY}${BILLING_ROUTES.GENERATE_SUPERBILL}`, component: <SuperBillWrapper />},
    // { path: `${BILLING_ROUTES.BILLING}${BILLING_ROUTES.CREATE_SUPERBILL}/:patientId`, component: <CreateSuperBill /> },

];

const PUBLIC_ROUTES = [
    // { path: "/login", component: <Login /> },
    // { path: "/create-password", component: <CreateNewPassword /> },
    // // { path: `${SCHEDULING.ROUTE}${SCHEDULING.CLIENT_VIDEO_ROUTE}`, component: <PatientVideoCall /> },
    // { path: "/", component: <Navigate to="/dashboard" /> },
    // { path: "/", component: <Navigate to={`${DASHBOARD.PROVIDER}`} /> },
    // { path: '/video-encounter/:appointmentDetailsId/:type', component: <PatientVideoCall /> },

];

const OPEN_PUBLIC_ROUTES = [
    { path: `${INTAKE_FORMS.ROUTE}/:appointmentId`, component: <AppointmentIntakeForms/> },
];

export { AUTH_PROTECTED_ROUTES, PUBLIC_ROUTES, OPEN_PUBLIC_ROUTES };
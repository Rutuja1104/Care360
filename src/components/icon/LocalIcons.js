import UploadIcon from "./vectors/UploadIcon";
import React from "react";
import { VEC_ICON_NAME } from "./constants";
import RadioButtonIcon from "./vectors/RadioButtonIcon";
import SortIcon from "./vectors/SortIcon";
import StepDoneIcon from "./vectors/StepDoneIcon";
import ExportIcon from "./vectors/ExportIcon";
import PlusIcon from "./vectors/PlusIcon";
import DashboardIcon from "./vectors/DashboardIcon";
import AllergiesIcon from "./vectors/AllergiesIcon";
import DiagnosesIcon from "./vectors/DiagnosesIcon";
import MedicationsIcon from "./vectors/MedicationsIcon";
import VitalsIcon from "./vectors/VitalsIcon";
import LabIcon from "./vectors/LabIcon";
import ImagingIcon from "./vectors/ImagingIcon";
import HistoryIcon from "./vectors/HistoryIcon";
import DocumentsIcon from "./vectors/DocumentsIcon";
import AppointmentsIcon from "./vectors/AppointmentsIcon";
import BillingIcon from "./vectors/BillingIcon";
import InsuranceIcon from "./vectors/InsuranceIcon";
import ProfileIcon from "./vectors/ProfileIcon";
import PortalAccessIcon from "./vectors/PortalAccessIcon";
import CardDetailsIcon from "./vectors/CardDetailsIcon";
import VaccinesIcon from "./vectors/VaccinesIcon";
import CallIcon from "./vectors/CallIcon";
import LocationIcon from "./vectors/LocationIcon";
import FaxIcon from "./vectors/FaxIcon";
import EmailIcon from "./vectors/EmailIcon";
import PstIcon from "./vectors/PstIcon";
import ContactIcon from "./vectors/ContactIcon";
import CalendarIcon from "./vectors/CalendarIcon";
import TranslateIcon from "./vectors/TranslateIcon";
import LocationIcon2 from "./vectors/LocationIcon2";
import ActionMenuIcon from "./vectors/ActionMenuIcon";
import BlackPlusIcon from "./vectors/BlackPlusIcon";
import { UploadCloudImage } from "./vectors/UploadCloudImage";
import CheckboxDashIcon from "./vectors/CheckboxDashIcon";
import CheckBoxIcon from "./vectors/CheckBoxIcon";
import EditIcon from "./vectors/EditIcon";
import DeleteIcon from "./vectors/DeleteIcon";
import CalenderImg from "./vectors/CalenderImg";
import NextIcon from "./vectors/NextIcon";
import AccountImg from "./vectors/AccountImg";
import CloseIcon from "./vectors/CloseIcon";
import VisaIcon from "./vectors/VisaIcon";
import LockIcon from "./vectors/LockIcon";
import RoundedPlusIcon from "./vectors/RoundedPlusIcon";
import ThinkEmrLogoIcon from "./vectors/ThinkEmrLogoIcon";
import BackIcon from "./vectors/BackIcon";
import ImageIcon from "./vectors/ImageIcon";
import ProviderIcon from "./vectors/ProviderIcon";
import TrendingUp from "./vectors/TrendingUp";
import PatientIcon from "./vectors/PatientIcon";
import AppointmentIcon from "./vectors/AppointmentIcon";
import EncountersIcon from "./vectors/EncountersIcon";
import TrendingDown from "./vectors/TrendingDown";
import FilterIcon from "./vectors/FilterIcon";
import BlankTask from "./vectors/BlankTask";
import UpArrow from "./vectors/UpArrow";
import DownArrow from "./vectors/DownArrow";
import ColapseFilter from "./vectors/ColapseFilter";
import FileIcon from "./vectors/FileIcon";
import AddPersonIcon from "./vectors/AddPersonIcon";
import UrlIcon from "./vectors/UrlIcon";
import MessagingIcon from "./vectors/MessagingIcon";
import VideoBackgroundProfile from "./vectors/VideoBackgroundProfile";
import MicroPhoneIcon from "./vectors/MicroPhoneIcon";
import SpeakerIcon from "./vectors/SpeakerIcon";
import VideoCamIcon from "./vectors/VideoCamIcon";
import SuccessFullCheck from "./vectors/SuccessFullCheck";
import UnMuteMicIcon from "./vectors/UnMuteMicIcon";
import MuteMicIcon from "./vectors/MuteMicIcon";
import OffCamera from "./vectors/OffCamera";
import OnCamera from "./vectors/OnCamera";
import ScreenShareIcon from "./vectors/ScreenShareIcon";
import CallRecordingIcon from "./vectors/CallRecordingIcon";
import LeaveMeetingIcon from "./vectors/LeaveMeetingIcon";
import AddGuestIcon from "./vectors/AddGuestIcon";
import ZoomChatIcon from "./vectors/ZoomChatIcon";
import ZoomSettingIcon from "./vectors/ZoomSettingIcon";
import VolumeUpIcon from "./vectors/VolumeUpIcon";
import ExitFullScreen from "./vectors/ExitFullScreen";
import VideoCallIcon from "./vectors/VideoCallIcon";
import ShareDocumentIcon from "./vectors/ShareDocumentIcon";
import SendEmojiIcon from "./vectors/SendEmojiIcon";
import SendMessageIcon from "./vectors/SendMessageIcon";
import CopyIcon from "./vectors/CopyIcon";
import BloodPressureImg from "./vectors/BloodPressureImg";
import RespirationRateImg from "./vectors/RespirationRateImg";
import HeartRateImg from "./vectors/HeartRateImg";
import BodyMassIndexImg from "./vectors/BodyMassIndexImg";
import VisibilityIcon from "./vectors/VisibilityIcon";
import OpenEncounterIcon from "./vectors/OpenEncounterIcon";
import PrinterIcon from "./vectors/PrintIcon";
import ChartIcon from "./vectors/ChartIcon";
import PhoneIcon from "./vectors/PhoneIcon";
import PersonIcon from "./vectors/PersonIcon";
import ClockIcon from "./vectors/ClockIcon";
import ZoomMeetIcon from "./vectors/ZoomMeetIcon";
import DescriptionIcon from "./vectors/DescriptionIcon";
import InfoIcon from "./vectors/InfoIcon";
import EditDetailsIcon from "./vectors/EditDetailsIcon";
import RightTickIcon from "./vectors/RightTickIcon";
import WrongTickIcon from "./vectors/WrongTickIcon";
import StartEncounterIcon from "./vectors/StartEncounterIcon";
import ViewEye from "./vectors/ViewEye";
import TriggerPatientIcon from "./vectors/TriggerPatientIcon";
import UploadIconShort from "./vectors/UploadIconShort";
import CalendarDatePicker from "./vectors/CalendarDatePicker";
import ExpandIcon from "./vectors/ExpandIcon";
import EyeVisibilityIcon from "./vectors/EyeVisibilityIcon";
import EyeVisibilityOffIcon from "./vectors/EyeVisibilityOffIcon";
import ArrowBackIcon from "./vectors/ArrowBackIcon";
import SearchIcon from "./vectors/SearchIcon";
import PaymentSucessIcon from "./vectors/PaymentSuccessIcon";

export default function LocalIcons({ iconName, color, style = {}, transformScale, rotateDeg = 0, onClickCb = () => { } }) {
    const iconProps = {
        style: {
            ...style,
            transform: `scale(${transformScale}) rotate(${rotateDeg}deg)`,
            fill: color,
        },
        fill: color,
        stroke: color,
        onClick: onClickCb,
    };

    /* eslint-disable */
    switch (iconName) {
        case VEC_ICON_NAME.RADIO_BUTTON_ICON:
            return <RadioButtonIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.SORT_ICON:
            return <SortIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.STEP_DONE_ICON:
            return <StepDoneIcon {...iconProps} />;
        case VEC_ICON_NAME.EXPORT_ICON:
            return <ExportIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PLUS_ICON:
            return <PlusIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.UPLOAD_ICON:
            return <UploadIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.DASHBOARD_ICON:
            return <DashboardIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ALLERGIES_ICON:
            return <AllergiesIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.DIAGNOSES_ICON:
            return <DiagnosesIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.MEDICATION_ICON:
            return <MedicationsIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.VITALS_ICON:
            return <VitalsIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.LAB_ICON:
            return <LabIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.IMAGING_ICON:
            return <ImagingIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.HISTORY_ICON:
            return <HistoryIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.DOCUMENTS_ICON:
            return <DocumentsIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.APPOINTMENTS_ICON:
            return <AppointmentsIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.BILLING_ICON:
            return <BillingIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.INSURANCE_ICON:
            return <InsuranceIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CARD_DETAILS_ICON:
            return <CardDetailsIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PROFILE_ICON:
            return <ProfileIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PORTAL_ACCESS_ICON:
            return <PortalAccessIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.VACCINES_ICON:
            return <VaccinesIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CALL_ICON:
            return <CallIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.LOCATION_ICON:
            return <LocationIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.FAX_ICON:
            return <FaxIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.EMAIL_ICON:
            return <EmailIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PST_ICON:
            return <PstIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CONTACT_ICON:
            return <ContactIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CALENDAR_ICON:
            return <CalendarIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.TRANSLATE_ICON:
            return <TranslateIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.LOCATION_ICON_2:
            return <LocationIcon2 {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ACTION_MENU_ICON:
            return <ActionMenuIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.BLACK_PLUS_ICON:
            return <BlackPlusIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.UPLOAD_CLOUD_IMAGE:
            return <UploadCloudImage {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CHECKBOX_DASH_ICON:
            return <CheckboxDashIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CHECKBOX_ICON:
            return <CheckBoxIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.EDIT_ICON:
            return <EditIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.DELETE_ICON:
            return <DeleteIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CALENDER_IMG:
            return <CalenderImg {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.NEXT_ICON:
            return <NextIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ACCOUNT_IMG:
            return <AccountImg {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CLOSE_ICON:
            return <CloseIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.VISA_ICON:
            return <VisaIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.LOCK_ICON:
            return <LockIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ROUNDED_PLUS_ICON:
            return <RoundedPlusIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.THINK_EMR_LOGO_ICON:
            return <ThinkEmrLogoIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.BACK_ICON:
            return <BackIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.IMAGE_ICON:
            return <ImageIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PROVIDER_ICON:
            return <ProviderIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.TRENDING_UP:
            return <TrendingUp {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PATIENT_ICON:
            return <PatientIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.APPOINTMENT_ICON:
            return <AppointmentIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ENCOUNTERS_ICON:
            return <EncountersIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.TRENDING_DOWN:
            return <TrendingDown {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.FILTER_ICON:
            return <FilterIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.BLANK_TASK:
            return <BlankTask {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.UP_ARROW:
            return <UpArrow {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.DOWN_ARROW:
            return <DownArrow {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.COLLAPSE_FITLER:
            return <ColapseFilter {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.FILE_ICON:
            return <FileIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ADD_PERSON_ICON:
            return <AddPersonIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.URL_ICON:
            return <UrlIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.MESSAGING_ICON:
            return <MessagingIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.VIDEO_BACKGROUND_PROFILE:
            return <VideoBackgroundProfile {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.MICROPHONE_ICON:
            return <MicroPhoneIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.SPEAKER_ICON:
            return <SpeakerIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.VIDEO_CAM_ICON:
            return <VideoCamIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.SUCCESSFULLCHECK:
            return <SuccessFullCheck {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.UNMUTE_MIC_ICON:
            return <UnMuteMicIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.MUTE_MIC_ICON:
            return <MuteMicIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.OFF_CAMERA:
            return <OffCamera {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ON_CAMERA:
            return <OnCamera {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.SCREEN_SHARE_ICON:
            return <ScreenShareIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CALL_RECORDING_ICON:
            return <CallRecordingIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.LEAVE_MEETING_ICON:
            return <LeaveMeetingIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ADD_GUEST_ICON:
            return <AddGuestIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ZOOM_CHAT_ICON:
            return <ZoomChatIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ZOOM_SETTING_ICON:
            return <ZoomSettingIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.VOLUME_UP_ICON:
            return <VolumeUpIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.EXIT_FULL_SCREEN:
            return <ExitFullScreen {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.VIDEO_CALL_ICON:
            return <VideoCallIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.SHARE_DOCUMENT_ICON:
            return <ShareDocumentIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.SEND_MESSAGE_ICON:
            return <SendMessageIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.SEND_EMOJI_ICON:
            return <SendEmojiIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.COPY_ICON:
            return <CopyIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.BLOOD_PRESSURE:
            return <BloodPressureImg {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.RESPIRATION_RATE:
            return <RespirationRateImg {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.HEART_RATE:
            return <HeartRateImg {...iconProps} onClick={onClickCb} />
        case VEC_ICON_NAME.BODY_MASS_INDEX:
            return <BodyMassIndexImg {...iconProps} onClick={onClickCb} />
        case VEC_ICON_NAME.VISIBILITY_ICON:
            return <VisibilityIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.OPEN_ENCOUNTER_ICON:
            return <OpenEncounterIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PRINTER_ICON:
            return <PrinterIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CHART_ICON:
            return <ChartIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PHONE_ICON:
            return <PhoneIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.PERSON_ICON:
            return <PersonIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.CLOCK_ICON:
            return <ClockIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.ZOOM_MEET_ICON:
            return <ZoomMeetIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.DESCRIPTION_ICON:
            return <DescriptionIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.INFO_ICON:
            return <InfoIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.EDIT_DETAILS_ICON:
            return <EditDetailsIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.RIGHT_TICK_ICON:
            return <RightTickIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.WRONG_TICK_ICON:
            return <WrongTickIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.START_ENCOUNTER_ICON:
            return <StartEncounterIcon {...iconProps} onClickCb={onClickCb} />;
        case VEC_ICON_NAME.VIEW_EYE:
            return <ViewEye {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.TRIGGER_PATIENT_ICON:
            return <TriggerPatientIcon {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.UPLOAD_ICON_SHORT:
            return <UploadIconShort {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.DATEPICKER_CALENDARL_ICON:
            return <CalendarDatePicker {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.EXPAND_ICON:
            return <ExpandIcon {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.EYE_VISIBILITY_ICON:
            return <EyeVisibilityIcon {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.EYE_VISIBILITY_OFF_ICON:
            return <EyeVisibilityOffIcon {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.ARROW_BACK_ICON:
            return <ArrowBackIcon {...iconProps} onClickCb={onClickCb} />
        case VEC_ICON_NAME.SEARCH_ICON:
            return <SearchIcon  onClickCb={onClickCb} />
        case VEC_ICON_NAME.PAYMENT_SUCCESS_ICON:
            return <PaymentSucessIcon  onClickCb={onClickCb} />
        default:
            return;
    }
    /* eslint-enable */
}

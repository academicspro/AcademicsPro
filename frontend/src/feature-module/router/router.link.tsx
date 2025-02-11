import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Countries from "../content/location/countries";
import BlankPage from "../pages/blankPage";
import Calendar from "../mainMenu/apps/calendar";
import DataTable from "../tables/dataTable";
import BasicTable from "../tables/basicTable";
import DeleteRequest from "../userManagement/deleteRequest";
import Membershipplan from "../membership/membershipplan";
import MembershipAddon from "../membership/membershipaddon";
import Notes from "../application/notes";
import ComingSoon from "../pages/comingSoon";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import TwoStepVerification from "../auth/twoStepVerification/twoStepVerification";
import EmailVerification from "../auth/emailVerification/emailVerification";
import ResetPassword from "../auth/resetPassword/resetPassword";
import ForgotPassword from "../auth/forgotPassword/forgotPassword";
import Accordion from "../uiInterface/base-ui/accordion";
import Avatar from "../uiInterface/base-ui/avatar";
import Borders from "../uiInterface/base-ui/borders";
import Breadcrumb from "../uiInterface/base-ui/breadcrumb";
import Buttons from "../uiInterface/base-ui/buttons";
import ButtonsGroup from "../uiInterface/base-ui/buttonsgroup";
import Cards from "../uiInterface/base-ui/cards";
import Carousel from "../uiInterface/base-ui/carousel";
import Colors from "../uiInterface/base-ui/colors";
import Dropdowns from "../uiInterface/base-ui/dropdowns";
import Grid from "../uiInterface/base-ui/grid";
import Images from "../uiInterface/base-ui/images";
import Lightboxes from "../uiInterface/base-ui/lightbox";
import Media from "../uiInterface/base-ui/media";
import Modals from "../uiInterface/base-ui/modals";
import NavTabs from "../uiInterface/base-ui/navtabs";
import Offcanvas from "../uiInterface/base-ui/offcanvas";
import Pagination from "../uiInterface/base-ui/pagination";
import Popovers from "../uiInterface/base-ui/popover";
import RangeSlides from "../uiInterface/base-ui/rangeslider";
import Progress from "../uiInterface/base-ui/progress";
import Spinner from "../uiInterface/base-ui/spinner";
import Toasts from "../uiInterface/base-ui/toasts";
import Typography from "../uiInterface/base-ui/typography";
import Video from "../uiInterface/base-ui/video";
import Error404 from "../pages/error/error-404";
import Error500 from "../pages/error/error-500";
import Preference from "../settings/websiteSettings/preference";
import UnderMaintenance from "../pages/underMaintenance";
import Todo from "../application/todo";
import Email from "../application/email";
import Chat from "../application/chat";
import Pages from "../content/pages";
import AudioCall from "../application/call/audioCall";
import CallHistory from "../application/call/callHistory";
import FileManager from "../application/fileManager";
import MembershipTransaction from "../membership/membershiptrasaction";
import ClipBoard from "../uiInterface/advanced-ui/clipboard";
import Counter from "../uiInterface/advanced-ui/counter";
import DragAndDrop from "../uiInterface/advanced-ui/dragdrop";
import Rating from "../uiInterface/advanced-ui/rating";
import Stickynote from "../uiInterface/advanced-ui/stickynote";
import TextEditor from "../uiInterface/advanced-ui/texteditor";
import Timeline from "../uiInterface/advanced-ui/timeline";
import Scrollbar from "../uiInterface/advanced-ui/uiscrollbar";
import Apexchart from "../uiInterface/charts/apexcharts";
import FeatherIcons from "../uiInterface/icons/feathericon";
import FontawesomeIcons from "../uiInterface/icons/fontawesome";
import MaterialIcons from "../uiInterface/icons/materialicon";
import PE7Icons from "../uiInterface/icons/pe7icons";
import SimplelineIcons from "../uiInterface/icons/simplelineicon";
import ThemifyIcons from "../uiInterface/icons/themify";
import TypiconIcons from "../uiInterface/icons/typicons";
import WeatherIcons from "../uiInterface/icons/weathericons";
import BasicInputs from "../uiInterface/forms/formelements/basic-inputs";
import CheckboxRadios from "../uiInterface/forms/formelements/checkbox-radios";
import InputGroup from "../uiInterface/forms/formelements/input-group";
import GridGutters from "../uiInterface/forms/formelements/grid-gutters";
import FormSelect from "../uiInterface/forms/formelements/form-select";
import FormMask from "../uiInterface/forms/formelements/form-mask";
import FileUpload from "../uiInterface/forms/formelements/fileupload";
import FormHorizontal from "../uiInterface/forms/formelements/layouts/form-horizontal";
import FormVertical from "../uiInterface/forms/formelements/layouts/form-vertical";
import FloatingLabel from "../uiInterface/forms/formelements/layouts/floating-label";
import FormValidation from "../uiInterface/forms/formelements/layouts/form-validation";
import FormSelect2 from "../uiInterface/forms/formelements/layouts/form-select2";
import FormWizard from "../uiInterface/forms/formelements/form-wizard";
import DataTables from "../uiInterface/table/data-tables";
import TablesBasic from "../uiInterface/table/tables-basic";
import IonicIcons from "../uiInterface/icons/ionicicons";
import Badges from "../uiInterface/base-ui/badges";
import Placeholder from "../uiInterface/base-ui/placeholder";
import Alert from "../uiInterface/base-ui/alert";
import Tooltips from "../uiInterface/base-ui/tooltips";
import Ribbon from "../uiInterface/advanced-ui/ribbon";
import AdminDashboard from "../mainMenu/adminDashboard";
import AlertUi from "../uiInterface/base-ui/alert-ui";
import TeacherDashboard from "../mainMenu/teacherDashboard";
import StudentDasboard from "../mainMenu/studentDashboard";
import ParentDashboard from "../mainMenu/parentDashboard";
import StudentGrid from "../peoples/students/student-grid";
import AddStudent from "../peoples/students/add-student";
import StudentList from "../peoples/students/student-list";
import StudentLibrary from "../peoples/students/student-details/studentLibrary";
import StudentDetails from "../peoples/students/student-details/studentDetails";
import StudentFees from "../peoples/students/student-details/studentFees";
import StudentLeaves from "../peoples/students/student-details/studentLeaves";
import StudentResult from "../peoples/students/student-details/studentResult";
import StudentTimeTable from "../peoples/students/student-details/studentTimeTable";
import AcademicReason from "../academic/academic-reason";
import ClassSyllabus from "../academic/class-syllabus";
import ClassSubject from "../academic/class-subject";
import ClassSection from "../academic/class-section";
import ClassRoom from "../academic/class-room";
import ClassRoutine from "../academic/class-routine";
import ScheduleClasses from "../academic/schedule-classes";
import Exam from "../academic/examinations/exam";
import ExamSchedule from "../academic/examinations/exam-schedule";
import Grade from "../academic/examinations/grade";
import Staff from "../hrm/staff-list/staff";
import Departments from "../hrm/departments";
import Classes from "../academic/classes";
import ClassHomeWork from "../academic/class-home-work";
import ExamResult from "../academic/examinations/exam-results";
import ExamAttendance from "../academic/examinations/exam-attendance";
import StudentPromotion from "../peoples/students/student-promotion";
import TeacherGrid from "../peoples/teacher/teacher-grid";
import TeacherForm from "../peoples/teacher/teacherForm";
import ClassTimetable from "../academic/class-timetable";
import Payroll from "../hrm/payroll";
import Holiday from "../hrm/holidays";
import Designation from "../hrm/designation";
import ListLeaves from "../hrm/leaves/list-leaves";
import StaffDetails from "../hrm/staff-list/staff-details.tsx";
import StaffPayRoll from "../hrm/staff-list/staff-payroll.tsx";
import StaffLeave from "../hrm/staff-list/staff-leave";
import ApproveRequest from "../hrm/leaves/approve-request";
import TeacherList from "../peoples/teacher/teacher-list";
import TeacherDetails from "../peoples/teacher/teacher-details/teacherDetails";
import TeachersRoutine from "../peoples/teacher/teacher-details/teachersRoutine";
import TeacherSalary from "../peoples/teacher/teacher-details/teacherSalary";
import TeacherLeave from "../peoples/teacher/teacher-details/teacherLeave";
import TeacherLibrary from "../peoples/teacher/teacher-details/teacherLibrary";
import ParentGrid from "../peoples/parent/parent-grid";
import ParentList from "../peoples/parent/parent-list";
import GuardianGrid from "../peoples/guardian/guardian-grid";
import GuardianList from "../peoples/guardian/guardian-list";
import FeesGroup from "../management/feescollection/feesGroup";
import Login2 from "../auth/login/login-2";
import Login3 from "../auth/login/login-3";
import ResetPassword2 from "../auth/resetPassword/resetPassword-2";
import ResetPassword3 from "../auth/resetPassword/resetPassword-3";
import TwoStepVerification2 from "../auth/twoStepVerification/twoStepVerification-2";
import TwoStepVerification3 from "../auth/twoStepVerification/twoStepVerification-3";
import Register2 from "../auth/register/register-2";
import Register3 from "../auth/register/register-3";
import ForgotPassword2 from "../auth/forgotPassword/forgotPassword-2";
import ForgotPassword3 from "../auth/forgotPassword/forgotPassword-3";
import ResetPasswordSuccess from "../auth/resetPasswordSuccess/resetPasswordSuccess";
import ResetPasswordSuccess2 from "../auth/resetPasswordSuccess/resetPasswordSuccess-2";
import ResetPasswordSuccess3 from "../auth/resetPasswordSuccess/resetPasswordSuccess-3";
import FeesTypes from "../management/feescollection/feesTypes";
import FeesMaster from "../management/feescollection/feesMaster";
import FeesAssign from "../management/feescollection/feesAssign";
import CollectFees from "../management/feescollection/collectFees";
import StudentAttendance from "../hrm/attendance/student-attendance";
import TeacherAttendance from "../hrm/attendance/teacher-attendance";
import StaffAttendance from "../hrm/attendance/staff-attendance";
import AddStaff from "../hrm/staff-list/add-staff";
import EditStaff from "../hrm/staff-list/edit-staff";
import StaffsAttendance from "../hrm/staff-list/staffs-attendance";
import LibraryMember from "../management/library/libraryMember";
import Books from "../management/library/books";
import IssueBook from "../management/library/issuesBook";
import ReturnBook from "../management/library/returnBook";
import SportsList from "../management/sports/sportsList";
import PlayersList from "../management/sports/playersList";
import HostelRooms from "../management/hostel/hostelRooms";
import HostelList from "../management/hostel/hostelList";
import HostelType from "../management/hostel/hostelType";
import TransportRoutes from "../management/transport/transportRoutes";
import TransportPickupPoints from "../management/transport/transportPickupPoints";
import TransportVehicleDrivers from "../management/transport/transportVehicleDrivers";
import TransportVehicle from "../management/transport/transportVehicle";
import TransportAssignVehicle from "../management/transport/transportAssignVehicle";
import RolesPermissions from "../userManagement/rolesPermissions";
import Permission from "../userManagement/permission";
import Manageusers from "../userManagement/manageusers";
import Profilesettings from "../settings/generalSettings/profile";
import Securitysettings from "../settings/generalSettings/security";
import Notificationssettings from "../settings/generalSettings/notifications";
import ConnectedApps from "../settings/generalSettings/connectedApps";
import CompanySettings from "../settings/websiteSettings/companySettings";
import Localization from "../settings/websiteSettings/localization";
import Prefixes from "../settings/websiteSettings/prefixes";
import Socialauthentication from "../settings/websiteSettings/socialAuthentication";
import Languagesettings from "../settings/websiteSettings/language";
import InvoiceSettings from "../settings/appSettings/invoiceSettings";
import CustomFields from "../settings/appSettings/customFields";
import EmailSettings from "../settings/systemSettings/emailSettings";
import Emailtemplates from "../settings/systemSettings/email-templates";
import SmsSettings from "../settings/systemSettings/smsSettings";
import OtpSettings from "../settings/systemSettings/otp-settings";
import GdprCookies from "../settings/systemSettings/gdprCookies";
import PaymentGateways from "../settings/financialSettings/paymentGateways";
import TaxRates from "../settings/financialSettings/taxRates";
import SchoolSettings from "../settings/academicSettings/schoolSettings";
import Religion from "../settings/academicSettings/religion";
import Storage from "../settings/otherSettings/storage";
import BanIpAddress from "../settings/otherSettings/banIpaddress";
import AllBlogs from "../content/blog/allBlogs";
import BlogCategories from "../content/blog/blogCategories";
import BlogComments from "../content/blog/blogComments";
import BlogTags from "../content/blog/blogTags";
import Faq from "../content/faq";
import Cities from "../content/location/cities";
import States from "../content/location/states";
import Testimonials from "../content/testimonials";
import AccountsIncome from "../accounts/accounts-income";
import AccountsInvoices from "../accounts/accounts-invoices";
import AccountsTransactions from "../accounts/accounts-transactions";
import AddInvoice from "../accounts/add-invoice";
import EditInvoice from "../accounts/edit-invoice";
import Expense from "../accounts/expense";
import ExpensesCategory from "../accounts/expenses-category";
import Invoice from "../accounts/invoice";
import NoticeBoard from "../announcements/notice-board";
import Tickets from "../support/tickets";
import TicketGrid from "../support/ticket-grid";
import TicketDetails from "../support/ticket-details";
import FeesReport from "../report/fees-report/feesReport";
import LeaveReport from "../report/leave-report/leaveReport";
import GradeReport from "../report/grade-report/gradeReport";
import StudentReport from "../report/student-report/studentReport";
import ClassReport from "../report/class-report/classReport";
import AttendanceReport from "../report/attendance-report/attendanceReport";
import ContactMessages from "../support/contactMessages";
import Events from "../announcements/events";
import Profile from "../pages/profile";
import StudentAttendanceType from "../report/attendance-report/studentAttendanceType";
import StaffReport from "../report/attendance-report/staffReport";
import TeacherReport from "../report/attendance-report/teacherReport";
import StaffDayWise from "../report/attendance-report/staffDayWise";
import TeacherDayWise from "../report/attendance-report/teacherDayWise";
import StudentDayWise from "../report/attendance-report/studentDayWise";
import DailyAttendance from "../report/attendance-report/dailyAttendance";
import LockScreen from "../auth/lockScreen";
import EmailVerification2 from "../auth/emailVerification/emailVerification-2";
import EmailVerification3 from "../auth/emailVerification/emailVerification-3";
import NotificationActivities from "../pages/profile/activities";
import Videocallss from "../application/call/videocalls";
import Videocall from "../application/call/videoCall";

const routes = all_routes;

export const publicRoutes = [
  // {
  //   path: "/",
  //   name: "Root",
  //   element: <Navigate to="/login" />,
  //   route: Route,
  // },
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: routes.teacherDashboard,
    element: <TeacherDashboard />,
    route: Route,
  },
  {
    path: routes.studentDashboard,
    element: <StudentDasboard />,
    route: Route,
  },
  {
    path: routes.parentDashboard,
    element: <ParentDashboard />,
    route: Route,
  },
  {
    path: routes.audioCall,
    element: <AudioCall />,
    route: Route,
  },
  {
    path: routes.callHistory,
    element: <CallHistory />,
    route: Route,
  },
  {
    path: routes.callHistory,
    element: <CallHistory />,
    route: Route,
  },

  {
    path: routes.connectedApps,
    element: <ConnectedApps />,
    route: Route,
  },
  {
    path: routes.countries,
    element: <Countries />,
    route: Route,
  },
  {
    path: routes.blankPage,
    element: <BlankPage />,
    route: Route,
  },
  {
    path: routes.calendar,
    element: <Calendar />,
    route: Route,
  },

  {
    path: routes.membershipplan,
    element: <Membershipplan />,
  },
  {
    path: routes.membershipAddon,
    element: <MembershipAddon />,
  },
  {
    path: routes.membershipTransaction,
    element: <MembershipTransaction />,
  },
  {
    path: routes.notes,
    element: <Notes />,
  },
  {
    path: routes.countries,
    element: <Countries />,
    route: Route,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
    route: Route,
  },
  {
    path: routes.dataTables,
    element: <DataTable />,
    route: Route,
  },
  {
    path: routes.tablesBasic,
    element: <BasicTable />,
    route: Route,
  },

  {
    path: routes.deleteRequest,
    element: <DeleteRequest />,
    route: Route,
  },
  {
    path: routes.cities,
    element: <Cities />,
    route: Route,
  },

  {
    path: routes.accordion,
    element: <Accordion />,
    route: Route,
  },
  {
    path: routes.avatar,
    element: <Avatar />,
    route: Route,
  },
  {
    path: routes.badges,
    element: <Badges />,
    route: Route,
  },
  {
    path: routes.border,
    element: <Borders />,
    route: Route,
  },
  {
    path: routes.breadcrums,
    element: <Breadcrumb />,
    route: Route,
  },
  {
    path: routes.button,
    element: <Buttons />,
    route: Route,
  },
  {
    path: routes.buttonGroup,
    element: <ButtonsGroup />,
    route: Route,
  },
  {
    path: routes.cards,
    element: <Cards />,
    route: Route,
  },
  {
    path: routes.carousel,
    element: <Carousel />,
    route: Route,
  },
  {
    path: routes.colors,
    element: <Colors />,
    route: Route,
  },
  {
    path: routes.dropdowns,
    element: <Dropdowns />,
    route: Route,
  },
  {
    path: routes.grid,
    element: <Grid />,
    route: Route,
  },
  {
    path: routes.images,
    element: <Images />,
    route: Route,
  },
  {
    path: routes.lightbox,
    element: <Lightboxes />,
    route: Route,
  },
  {
    path: routes.media,
    element: <Media />,
    route: Route,
  },
  {
    path: routes.modals,
    element: <Modals />,
    route: Route,
  },
  {
    path: routes.navTabs,
    element: <NavTabs />,
    route: Route,
  },
  {
    path: routes.offcanvas,
    element: <Offcanvas />,
    route: Route,
  },
  {
    path: routes.pagination,
    element: <Pagination />,
    route: Route,
  },
  {
    path: routes.popover,
    element: <Popovers />,
    route: Route,
  },
  {
    path: routes.rangeSlider,
    element: <RangeSlides />,
    route: Route,
  },
  {
    path: routes.progress,
    element: <Progress />,
    route: Route,
  },
  {
    path: routes.spinner,
    element: <Spinner />,
    route: Route,
  },

  {
    path: routes.typography,
    element: <Typography />,
    route: Route,
  },
  {
    path: routes.video,
    element: <Video />,
    route: Route,
  },
  {
    path: routes.toasts,
    element: <Toasts />,
    route: Route,
  },
  {
    path: routes.banIpAddress,
    element: <BanIpAddress />,
    route: Route,
  },
  // {
  //   path: routes.localization,
  //   element: <Localization />,
  //   route: Route,
  // },
  {
    path: routes.preference,
    element: <Preference />,
    route: Route,
  },
  {
    path: routes.todo,
    element: <Todo />,
    route: Route,
  },
  {
    path: routes.email,
    element: <Email />,
    route: Route,
  },
  {
    path: routes.videoCall,
    element: <Videocall />,
    route: Route,
  },
  {
    path: routes.chat,
    element: <Chat />,
    route: Route,
  },
  {
    path: routes.pages,
    element: <Pages />,
    route: Route,
  },

  {
    path: routes.fileManager,
    element: <FileManager />,
    route: Route,
  },
  {
    path: routes.faq,
    element: <Faq />,
    route: Route,
  },

  {
    path: routes.states,
    element: <States />,
    route: Route,
  },
  {
    path: routes.testimonials,
    element: <Testimonials />,
    route: Route,
  },
  {
    path: routes.clipboard,
    element: <ClipBoard />,
    route: Route,
  },
  {
    path: routes.counter,
    element: <Counter />,
    route: Route,
  },
  {
    path: routes.dragandDrop,
    element: <DragAndDrop />,
    route: Route,
  },
  {
    path: routes.rating,
    element: <Rating />,
    route: Route,
  },
  {
    path: routes.stickyNotes,
    element: <Stickynote />,
    route: Route,
  },
  {
    path: routes.textEditor,
    element: <TextEditor />,
    route: Route,
  },
  {
    path: routes.timeLine,
    element: <Timeline />,
    route: Route,
  },
  {
    path: routes.scrollBar,
    element: <Scrollbar />,
    route: Route,
  },
  {
    path: routes.apexChat,
    element: <Apexchart />,
    route: Route,
  },
  {
    path: routes.featherIcons,
    element: <FeatherIcons />,
    route: Route,
  },
  {
    path: routes.falgIcons,
    element: <FeatherIcons />,
    route: Route,
  },
  {
    path: routes.fantawesome,
    element: <FontawesomeIcons />,
    route: Route,
  },
  {
    path: routes.fantawesome,
    element: <FontawesomeIcons />,
    route: Route,
  },
  {
    path: routes.materialIcon,
    element: <MaterialIcons />,
    route: Route,
  },
  {
    path: routes.pe7icon,
    element: <PE7Icons />,
    route: Route,
  },
  {
    path: routes.simpleLineIcon,
    element: <SimplelineIcons />,
    route: Route,
  },
  {
    path: routes.themifyIcon,
    element: <ThemifyIcons />,
    route: Route,
  },
  {
    path: routes.typicon,
    element: <TypiconIcons />,
    route: Route,
  },
  {
    path: routes.basicInput,
    element: <BasicInputs />,
    route: Route,
  },
  {
    path: routes.weatherIcon,
    element: <WeatherIcons />,
    route: Route,
  },
  {
    path: routes.checkboxandRadion,
    element: <CheckboxRadios />,
    route: Route,
  },
  {
    path: routes.inputGroup,
    element: <InputGroup />,
    route: Route,
  },
  {
    path: routes.gridandGutters,
    element: <GridGutters />,
    route: Route,
  },
  {
    path: routes.formSelect,
    element: <FormSelect />,
    route: Route,
  },
  {
    path: routes.formMask,
    element: <FormMask />,
    route: Route,
  },
  {
    path: routes.fileUpload,
    element: <FileUpload />,
    route: Route,
  },
  {
    path: routes.horizontalForm,
    element: <FormHorizontal />,
    route: Route,
  },
  {
    path: routes.verticalForm,
    element: <FormVertical />,
    route: Route,
  },
  {
    path: routes.floatingLable,
    element: <FloatingLabel />,
    route: Route,
  },
  {
    path: routes.formValidation,
    element: <FormValidation />,
    route: Route,
  },
  {
    path: routes.reactSelect,
    element: <FormSelect2 />,
    route: Route,
  },
  {
    path: routes.formWizard,
    element: <FormWizard />,
    route: Route,
  },
  {
    path: routes.dataTable,
    element: <DataTables />,
    route: Route,
  },
  {
    path: routes.tableBasic,
    element: <TablesBasic />,
    route: Route,
  },
  {
    path: routes.iconicIcon,
    element: <IonicIcons />,
    route: Route,
  },
  // {
  //   path: routes.chart,
  //   element: <ChartJs />,
  //   route: Route,
  // },

  {
    path: routes.placeholder,
    element: <Placeholder />,
    route: Route,
  },
  {
    path: routes.sweetalert,
    element: <Alert />,
    route: Route,
  },
  {
    path: routes.alert,
    element: <AlertUi />,
    route: Route,
  },
  {
    path: routes.tooltip,
    element: <Tooltips />,
    route: Route,
  },
  {
    path: routes.ribbon,
    element: <Ribbon />,
    route: Route,
  },

  // Peoples Module
  {
    path: routes.studentGrid,
    element: <StudentGrid />,
  },
  {
    path: routes.studentList,
    element: <StudentList />,
  },
  {
    path: routes.addStudent,
    element: <AddStudent />,
  },
  {
    path: routes.editStudent,
    element: <AddStudent />,
  },
  {
    path: routes.studentLibrary,
    element: <StudentLibrary />,
  },
  {
    path: routes.studentDetail,
    element: <StudentDetails />,
  },
  {
    path: routes.studentFees,
    element: <StudentFees />,
  },
  {
    path: routes.studentLeaves,
    element: <StudentLeaves />,
  },
  {
    path: routes.studentResult,
    element: <StudentResult />,
  },
  {
    path: routes.studentTimeTable,
    element: <StudentTimeTable />,
  },
  {
    path: routes.studentPromotion,
    element: <StudentPromotion />,
  },
  {
    path: routes.AcademicReason,
    element: <AcademicReason />,
  },
  {
    path: routes.classSyllabus,
    element: <ClassSyllabus />,
  },
  {
    path: routes.classSubject,
    element: <ClassSubject />,
  },
  {
    path: routes.classSection,
    element: <ClassSection />,
  },
  {
    path: routes.classRoom,
    element: <ClassRoom />,
  },
  {
    path: routes.classRoutine,
    element: <ClassRoutine />,
  },
  {
    path: routes.sheduleClasses,
    element: <ScheduleClasses />,
  },
  {
    path: routes.exam,
    element: <Exam />,
  },
  {
    path: routes.examSchedule,
    element: <ExamSchedule />,
  },
  {
    path: routes.grade,
    element: <Grade />,
  },
  {
    path: routes.staff,
    element: <Staff />,
  },
  {
    path: routes.departments,
    element: <Departments />,
  },
  {
    path: routes.classes,
    element: <Classes />,
  },
  {
    path: routes.classHomeWork,
    element: <ClassHomeWork />,
  },
  {
    path: routes.examResult,
    element: <ExamResult />,
  },
  {
    path: routes.examAttendance,
    element: <ExamAttendance />,
  },
  {
    path: routes.teacherGrid,
    element: <TeacherGrid />,
  },
  {
    path: routes.teacherList,
    element: <TeacherList />,
  },
  {
    path: routes.addTeacher,
    element: <TeacherForm />,
  },
  {
    path: routes.editTeacher,
    element: <TeacherForm />,
  },
  {
    path: routes.teacherDetails,
    element: <TeacherDetails />,
  },
  {
    path: routes.teachersRoutine,
    element: <TeachersRoutine />,
  },
  {
    path: routes.teacherSalary,
    element: <TeacherSalary />,
  },
  {
    path: routes.teacherLeaves,
    element: <TeacherLeave />,
  },
  {
    path: routes.teacherLibrary,
    element: <TeacherLibrary />,
  },
  {
    path: routes.parentGrid,
    element: <ParentGrid />,
  },
  {
    path: routes.parentList,
    element: <ParentList />,
  },
  {
    path: routes.classTimetable,
    element: <ClassTimetable />,
  },
  {
    path: routes.payroll,
    element: <Payroll />,
  },
  {
    path: routes.holidays,
    element: <Holiday />,
  },
  {
    path: routes.designation,
    element: <Designation />,
  },
  {
    path: routes.listLeaves,
    element: <ListLeaves />,
  },
  {
    path: routes.staffDetails,
    element: <StaffDetails />,
  },
  {
    path: routes.staffPayroll,
    element: <StaffPayRoll />,
  },
  {
    path: routes.staffLeave,
    element: <StaffLeave />,
  },

  {
    path: routes.layoutDefault,
    element: <AdminDashboard />,
  },
  {
    path: routes.layoutMini,
    element: <AdminDashboard />,
  },
  {
    path: routes.layoutRtl,
    element: <AdminDashboard />,
  },
  {
    path: routes.layoutBox,
    element: <AdminDashboard />,
  },
  {
    path: routes.layoutDark,
    element: <AdminDashboard />,
  },
  {
    path: routes.guardiansGrid,
    element: <GuardianGrid />,
  },
  {
    path: routes.guardiansList,
    element: <GuardianList />,
  },
  {
    path: routes.feesGroup,
    element: <FeesGroup />,
  },
  {
    path: routes.feesType,
    element: <FeesTypes />,
  },
  {
    path: routes.feesMaster,
    element: <FeesMaster />,
  },
  {
    path: routes.feesAssign,
    element: <FeesAssign />,
  },
  {
    path: routes.collectFees,
    element: <CollectFees />,
  },
  {
    path: routes.libraryMembers,
    element: <LibraryMember />,
  },
  {
    path: routes.libraryBooks,
    element: <Books />,
  },
  {
    path: routes.libraryIssueBook,
    element: <IssueBook />,
  },
  {
    path: routes.libraryReturn,
    element: <ReturnBook />,
  },
  {
    path: routes.sportsList,
    element: <SportsList />,
  },
  {
    path: routes.playerList,
    element: <PlayersList />,
  },
  {
    path: routes.hostelRoom,
    element: <HostelRooms />,
  },
  {
    path: routes.hostelType,
    element: <HostelType />,
  },
  {
    path: routes.hostelList,
    element: <HostelList />,
  },
  {
    path: routes.transportRoutes,
    element: <TransportRoutes />,
  },
  {
    path: routes.transportAssignVehicle,
    element: <TransportAssignVehicle />,
  },
  {
    path: routes.transportPickupPoints,
    element: <TransportPickupPoints />,
  },
  {
    path: routes.transportVehicleDrivers,
    element: <TransportVehicleDrivers />,
  },
  {
    path: routes.transportVehicle,
    element: <TransportVehicle />,
  },
  {
    path: routes.approveRequest,
    element: <ApproveRequest />,
  },
  {
    path: routes.studentAttendance,
    element: <StudentAttendance />,
  },
  {
    path: routes.teacherAttendance,
    element: <TeacherAttendance />,
  },

  {
    path: routes.staffAttendance,
    element: <StaffAttendance />,
  },
  {
    path: routes.staffsAttendance,
    element: <StaffsAttendance />,
  },
  {
    path: routes.addStaff,
    element: <AddStaff />,
  },
  {
    path: routes.editStaff,
    element: <EditStaff />,
  },

  {
    path: routes.accountsIncome,
    element: <AccountsIncome />,
  },
  {
    path: routes.accountsInvoices,
    element: <AccountsInvoices />,
  },
  {
    path: routes.accountsTransactions,
    element: <AccountsTransactions />,
  },
  {
    path: routes.addInvoice,
    element: <AddInvoice />,
  },
  {
    path: routes.editInvoice,
    element: <EditInvoice />,
  },
  {
    path: routes.guardiansList,
    element: <GuardianList />,
  },
  {
    path: routes.expense,
    element: <Expense />,
  },
  {
    path: routes.expenseCategory,
    element: <ExpensesCategory />,
  },
  {
    path: routes.invoice,
    element: <Invoice />,
  },
  {
    path: routes.events,
    element: <Events />,
  },
  {
    path: routes.noticeBoard,
    element: <NoticeBoard />,
  },

  //Settings

  {
    path: routes.profilesettings,
    element: <Profilesettings />,
  },
  {
    path: routes.securitysettings,
    element: <Securitysettings />,
  },
  {
    path: routes.notificationssettings,
    element: <Notificationssettings />,
  },
  {
    path: routes.connectedApps,
    element: <ConnectedApps />,
  },
  {
    path: routes.companySettings,
    element: <CompanySettings />,
  },
  {
    path: routes.localization,
    element: <Localization />,
  },
  {
    path: routes.prefixes,
    element: <Prefixes />,
  },
  {
    path: routes.socialAuthentication,
    element: <Socialauthentication />,
  },
  {
    path: routes.language,
    element: <Languagesettings />,
  },
  {
    path: routes.invoiceSettings,
    element: <InvoiceSettings />,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
  },
  {
    path: routes.emailSettings,
    element: <EmailSettings />,
  },
  {
    path: routes.emailTemplates,
    element: <Emailtemplates />,
  },
  {
    path: routes.smsSettings,
    element: <SmsSettings />,
  },
  {
    path: routes.optSettings,
    element: <OtpSettings />,
  },
  {
    path: routes.gdprCookies,
    element: <GdprCookies />,
  },

  {
    path: routes.paymentGateways,
    element: <PaymentGateways />,
  },
  {
    path: routes.taxRates,
    element: <TaxRates />,
  },
  {
    path: routes.schoolSettings,
    element: <SchoolSettings />,
  },
  {
    path: routes.religion,
    element: <Religion />,
  },
  {
    path: routes.storage,
    element: <Storage />,
  },
  {
    path: routes.rolesPermissions,
    element: <RolesPermissions />,
  },
  {
    path: routes.permissions,
    element: <Permission />,
  },
  {
    path: routes.manageusers,
    element: <Manageusers />,
  },
  {
    path: routes.allBlogs,
    element: <AllBlogs />,
  },
  {
    path: routes.blogCategories,
    element: <BlogCategories />,
  },
  {
    path: routes.blogComments,
    element: <BlogComments />,
  },
  {
    path: routes.blogTags,
    element: <BlogTags />,
  },
  {
    path: routes.tickets,
    element: <Tickets />,
  },
  {
    path: routes.ticketGrid,
    element: <TicketGrid />,
  },
  {
    path: routes.ticketDetails,
    element: <TicketDetails />,
  },
  {
    path: routes.feesReport,
    element: <FeesReport />,
  },
  {
    path: routes.leaveReport,
    element: <LeaveReport />,
  },
  {
    path: routes.gradeReport,
    element: <GradeReport />,
  },
  {
    path: routes.studentReport,
    element: <StudentReport />,
  },
  {
    path: routes.classReport,
    element: <ClassReport />,
  },
  {
    path: routes.attendanceReport,
    element: <AttendanceReport />,
  },
  {
    path: routes.studentAttendanceType,
    element: <StudentAttendanceType />,
  },
  {
    path: routes.dailyAttendance,
    element: <DailyAttendance />,
  },
  {
    path: routes.studentDayWise,
    element: <StudentDayWise />,
  },
  {
    path: routes.teacherDayWise,
    element: <TeacherDayWise />,
  },
  {
    path: routes.staffDayWise,
    element: <StaffDayWise />,
  },
  {
    path: routes.teacherReport,
    element: <TeacherReport />,
  },
  {
    path: routes.staffReport,
    element: <StaffReport />,
  },
  {
    path: routes.contactMessages,
    element: <ContactMessages />,
  },
  {
    path: routes.events,
    element: <Events />,
  },
  {
    path: routes.profile,
    element: <Profile />,
  },
  {
    path: routes.activity,
    element: <NotificationActivities />,
  },
];

export const authRoutes = [
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
    route: Route,
  },
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.login2,
    element: <Login2 />,
    route: Route,
  },
  {
    path: routes.login3,
    element: <Login3 />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
  {
    path: routes.twoStepVerification,
    element: <TwoStepVerification />,
    route: Route,
  },
  {
    path: routes.twoStepVerification2,
    element: <TwoStepVerification2 />,
    route: Route,
  },
  {
    path: routes.twoStepVerification3,
    element: <TwoStepVerification3 />,
    route: Route,
  },
  {
    path: routes.emailVerification,
    element: <EmailVerification />,
    route: Route,
  },
  {
    path: routes.emailVerification2,
    element: <EmailVerification2 />,
    route: Route,
  },
  {
    path: routes.emailVerification3,
    element: <EmailVerification3 />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
  {
    path: routes.register2,
    element: <Register2 />,
    route: Route,
  },
  {
    path: routes.register3,
    element: <Register3 />,
    route: Route,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
    route: Route,
  },
  {
    path: routes.resetPassword2,
    element: <ResetPassword2 />,
    route: Route,
  },
  {
    path: routes.resetPassword3,
    element: <ResetPassword3 />,
    route: Route,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
  },
  {
    path: routes.forgotPassword2,
    element: <ForgotPassword2 />,
    route: Route,
  },
  {
    path: routes.forgotPassword3,
    element: <ForgotPassword3 />,
    route: Route,
  },
  {
    path: routes.error404,
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.error500,
    element: <Error500 />,
    route: Route,
  },
  {
    path: routes.underMaintenance,
    element: <UnderMaintenance />,
    route: Route,
  },
  {
    path: routes.lockScreen,
    element: <LockScreen />,
  },
  {
    path: routes.resetPasswordSuccess,
    element: <ResetPasswordSuccess />,
  },
  {
    path: routes.resetPasswordSuccess2,
    element: <ResetPasswordSuccess2 />,
  },
  {
    path: routes.resetPasswordSuccess3,
    element: <ResetPasswordSuccess3 />,
  },
];

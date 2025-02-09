import NotFound from "../pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductManager from "../pages/SFP/ProductManager";
import Payment from "../pages/Payment/Payment";
import PaymentCheck from "../pages/PaymentCheck/PaymentCheck";
import PaymentProceedd from "../pages/PaymentProceedd/PaymentProceedd";
import HomePagePart2 from "../pages/SecondHome/HomePagePart2";
import Courses from "../pages/Courses/Courses";
import DPMI from "../pages/DPM/DPMI";
import AIPF from "../pages/AIPF/AIPF";
import ACPF from "../pages/ACFP/ACPF";
import AIPP from "../pages/AIPP/AIPP";
import ACPP from "../pages/ACPP/ACPP";
import LMS from "../pages/LMS/AISimulation";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Companies from "../pages/Companies/Companies";
import CertificationList from "../pages/CertificationList/CertificationList";
import OurServices from "../pages/OurServices/OurServices";
import CertificationDetails from "../pages/CertificationDetails/CertificationDetails";
import AISimulation from "../pages/LMS/AISimulation";
import TermsOfUse from "../pages/Terms/TermStatement";
import PrivacyStatement from "../pages/Terms/Privacy";
import ClassesDeatil from "../pages/ClassesDetail/ClassesDeatil";
import ScrollToTop from "./ScrollTop";
import MyNeedsDetail from "../pages/MyNeeds/MyNeedsDetail";
import MySkillsDetail from "../pages/MySkills/MySkillsDetail";
import AnaimationPage from "../pages/Animations/AnaimationPage";
import LegalNotice from "../pages/Legalnotice/Legalnotice";

export const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <HomePagePart2 /> },
      { path: "/home", element: <HomePagePart2 /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courses/:courseId", element: <CourseDetails /> },
      { path: "/sfp-course", element: <ProductManager /> },
      { path: "/aisimulation", element: <AISimulation /> },
      { path: "/dpm-course", element: <DPMI /> },
      { path: "/aipf-course", element: <AIPF /> },
      { path: "/aipp-course", element: <AIPP /> },
      { path: "/acfp-course", element: <ACPF /> },
      { path: "/acpp-course", element: <ACPP /> },
      { path: "/elearning", element: <LMS /> },
      { path: "/companies", element: <Companies /> },
      { path: "/classes", element: <Payment /> },
      { path: "/classes/:courseId", element: <ClassesDeatil /> },
      { path: "/payment", element: <PaymentCheck /> },
      { path: "/paymentprocedd", element: <PaymentProceedd /> },
      { path: "/certificates", element: <CertificationList /> },
      {
        path: "/certificates/:certificateId",
        element: <CertificationDetails />,
      },
      { path: "/ourservices", element: <OurServices /> },
      { path: "/termofuse", element: <TermsOfUse /> },
      { path: "/privacy", element: <PrivacyStatement /> },
      {path:'/mychallanges',element:<MyNeedsDetail/>},
      { path: "/myskills", element: <MySkillsDetail /> },
      {path:'/animation',element:<AnaimationPage/>},
      {path:'/legalnotice',element:<LegalNotice/>},
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

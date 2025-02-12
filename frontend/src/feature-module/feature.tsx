import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import Header from "../core/common/header";
import Sidebar from "../core/common/sidebar";
import ThemeSettings from "../core/common/theme-settings";
import Loader from "../core/common/loader";
import { useEffect, useState } from "react";
import { all_routes } from "./router/all_routes";
const Feature = () => {
  const routes = all_routes;
  const [showLoader, setShowLoader] = useState(true);
  const mobileSidebar = useSelector(
    (state: any) => state.sidebarSlice.mobileSidebar
  );
  const miniSidebar = useSelector(
    (state: any) => state.sidebarSlice.miniSidebar
  );
  const expandMenu = useSelector((state: any) => state.sidebarSlice.expandMenu);

  const dataLayout = useSelector((state: any) => state.themeSetting.dataLayout);
  const dataTopBar = useSelector((state: any) => state.themeSetting.dataTopBar);
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const dataSidebar = useSelector(
    (state: any) => state.themeSetting.dataSidebar
  );
  const dataSidebarBg = useSelector(
    (state: any) => state.themeSetting.dataSidebarBg
  );
  const dataColor = useSelector((state: any) => state.themeSetting.dataColor);
  const location = useLocation();
  useEffect(() => {
    if (dataTheme === "dark_data_theme") {
      document.documentElement.setAttribute("data-theme", "darks");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  }, [dataTheme]);
  useEffect(() => {
    if (
      location.pathname === routes.adminDashboard ||
      location.pathname === routes.teacherDashboard ||
      location.pathname === routes.studentDashboard ||
      location.pathname === routes.parentDashboard
    ) {
      // Show the loader when navigating to a new route
      setShowLoader(true);

      // Hide the loader after 2 seconds
      const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout when component unmounts
      };
    } else {
      setShowLoader(false);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const Preloader = () => {
    return (
      <div id="global-loader">
        <div className="page-loader"></div>
      </div>
    );
  };
  return (
    <div
      className={`
       ${dataLayout === "mini_layout" ? "mini-sidebar" : ""}
      ${miniSidebar && dataLayout !== "mini_layout" ? "mini-sidebar" : ""}
     ${
       (expandMenu && miniSidebar) ||
       (expandMenu && dataLayout === "mini_layout")
         ? "expand-menu"
         : ""
     }
      ${dataLayout === "default_layout" ? "default-layout" : ""}
      ${dataLayout === "boxed_layout" ? "layout-box-mode" : ""}

      ${dataTheme === "dark_data_theme" ? "dark-data-theme" : ""}
      ${dataLayout === "dark_data_theme" ? "dark-data-theme" : ""}
      ${dataLayout === "rtl" ? "layout-mode-rtl" : ""}

      ${dataTopBar === "default_topbar_color" ? "default-topbar" : ""}
      ${dataTopBar === "dark_topbar_color" ? "dark-topbar" : ""}
      ${dataTopBar === "primary_topbar_color" ? "primary-topbar" : ""}
      ${dataTopBar === "grey_topbar_color" ? "grey-topbar" : ""}
      ${dataTheme === "default_data_theme" ? "default-data-theme" : ""}
      
      ${dataSidebar === "default_data_sidebar" ? "default-data-sidebar" : ""}
      ${dataSidebar === "dark_data_sidebar" ? "dark-data-sidebar" : ""}
      ${dataSidebar === "primary_data_sidebar" ? "primary-data-sidebar" : ""}
      ${
        dataSidebar === "darkblack_data_sidebar" ? "darkblack-data-sidebar" : ""
      }
      ${dataSidebar === "darkblue_data_sidebar" ? "darkblue-data-sidebar" : ""}
      ${
        dataSidebarBg === "default_data_sidebar_bg"
          ? "default-data-sidebar-bg"
          : ""
      }
      ${dataSidebarBg === "data_sidebar_1" ? "data-sidebar-1" : ""}
      ${dataSidebarBg === "data_sidebar_2" ? "data-sidebar-2" : ""}
      ${dataSidebarBg === "data_sidebar_3" ? "data-sidebar-3" : ""}
      ${dataSidebarBg === "data_sidebar_4" ? "data-sidebar-4" : ""}
      ${dataSidebarBg === "data_sidebar_5" ? "data-sidebar-5" : ""}
      ${dataSidebarBg === "data_sidebar_6" ? "data-sidebar-6" : ""}
      ${dataColor === "default_data_color" ? "default-data-color" : ""}
      ${dataColor === "violet_data_color" ? "violet-data-color" : ""}
      ${dataColor === "pink_data_color" ? "pink-data-color" : ""}
      ${dataColor === "orange_data_color" ? "orange-data-color" : ""}
      ${dataColor === "green_data_color" ? "green-data-color" : ""}
      ${dataColor === "red_data_color" ? "red-data-color" : ""}
      `}
    >
      {showLoader ? (
        <>
          <Preloader />
          <div
            className={`main-wrapper 
        ${mobileSidebar ? "slide-nav" : ""}`}
          >
            <Header />
            <Sidebar />
            <Outlet />
            {!location.pathname.includes("layout") && <ThemeSettings />}
          </div>
        </>
      ) : (
        <>
          <div
            className={`main-wrapper 
        ${mobileSidebar ? "slide-nav" : ""}`}
          >
            <Header />
            <Sidebar />
            <Outlet />
            {!location.pathname.includes("layout") && <ThemeSettings />}
          </div>
        </>
      )}
      {/* <Loader/> */}

      <div className="sidebar-overlay"></div>
    </div>
  );
};

export default Feature;

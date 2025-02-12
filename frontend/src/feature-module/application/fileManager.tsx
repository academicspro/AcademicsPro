import { useState } from "react";
import { Sliders, Upload } from "react-feather";
import Select from "react-select";
import { Link } from "react-router-dom";

import {
  Clock,
  File,
  Folder,
  FolderMinus,
  HardDrive,
  PlusCircle,
  Send,
  Settings,
  Star,
  UploadCloud,
  FileText,
  Target,
  Trash2,
} from "react-feather";

import FileContent from "./fileContent";
import FileModal from "./fileModal";
import { all_routes } from "../router/all_routes";
import TooltipOption from "../../core/common/tooltipOption";

const FileManager = () => {
  const [isOpen, setOpen] = useState(false);
  const options = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
    { value: "Recently Viewed", label: "Recently Viewed" },
    { value: "Recently Added", label: "Recently Added" },
    { value: "Creation Date", label: "Creation Date" },
  ];
  const routes = all_routes;
  return (
    <div className={`page-wrapper `}>
      <div className="content pb-4">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3 pb-3 border-bottom position-relative">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">File Manager</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item">Application</li>
                <li className="breadcrumb-item active" aria-current="page">
                  File Manager
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <TooltipOption />
          </div>
          <Link
            id="toggle_btn2"
            className="notes-tog position-absolute start-0 avatar avatar-sm rounded-circle bg-primary text-white"
            to="#"
            onClick={() => setOpen(!isOpen)}
          >
            <i className="fas fa-chevron-left" />
          </Link>
        </div>

        <div className="row">
          <div
            className={`col-lg-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget  ${
              isOpen && "section-notes-dashboard"
            }`}
          >
            <div className="stickybar">
              <aside className="border bg-white rounded-3 p-4 mb-3 mt-4 custom-sticky">
                <h5 className="d-flex align-items-center border-bottom mb-3 pb-3">
                  <span className="me-2 d-flex align-items-center0">
                    <i className="ti ti-folder fs-20" />
                  </span>
                  Files
                </h5>
                <Link
                  to="#"
                  className="d-flex align-items-center justify-content-center btn btn-primary mb-3 btn-icon w-100"
                >
                  <i className="ti ti-square-rounded-plus me-2" /> New
                </Link>
                <div className="d-flex flex-column active-dark-btn mb-3">
                  <Link
                    to="file-manager"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 active mb-1"
                  >
                    <i className="ti ti-file-text me-2" />
                    My Files
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-star me-2" />
                    Google Drive
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-send me-2" />
                    Dropbox
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-file-alert me-2" />
                    Shared With Me
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-file-analytics me-2" />
                    Document
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-clock me-2" />
                    Recent
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-stars me-2" />
                    Favourites
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-shield me-2" />
                    Archived
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-trash me-2" />
                    Deleted
                  </Link>
                  <Link
                    to="#"
                    className="rounded p-2 d-flex align-items-center fw-medium fs-15 mb-1"
                  >
                    <i className="ti ti-settings me-2" />
                    Settings
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <h6>Storage</h6>
                  </div>
                  <span>70%</span>
                </div>
                <div className="progress progress-sm my-2">
                  <div
                    className="progress-bar bg-danger rounded"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <span>78.5 GB of 1 TB Free Used</span>
              </aside>
            </div>
          </div>

          <div
            className={`col-lg-9 budget-role-notes  ${
              isOpen && "budgeted-role-notes"
            }`}
          >
            {isOpen ? <FileContent /> : <FileContent />}
          </div>
        </div>
        {/* <FileModal /> */}
      </div>
    </div>
  );
};

export default FileManager;

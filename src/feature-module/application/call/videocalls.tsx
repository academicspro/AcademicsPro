import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
import { useDispatch, useSelector } from "react-redux";
import Scrollbars from "react-custom-scrollbars-2";
import { ChevronUp, Phone, Plus, RotateCcw, X } from "react-feather";
import Slider from "react-slick";
import { OverlayTrigger, Tooltip, TooltipProps } from "react-bootstrap";
import { JSX } from "react/jsx-runtime";
type MicStatus = {
  mic1: boolean;
  mic2: boolean;
  mic3: boolean;
  mic4: boolean;
  mic5: boolean;
  mic6: boolean;
  mic7: boolean;
  mic8: boolean;
  mic9: boolean;
  mic10: boolean;
  mic11: boolean;
  mic12: boolean;
};
type VideoStatusType = {
  video1: boolean;
  video2: boolean;
  video3: boolean;
  video4: boolean;
  video5: boolean;
  video6: boolean;
  video7: boolean;
  video8: boolean;
 
};

const Videocallss = () => {
  const [videoStatus, setVideoStatus] = useState<VideoStatusType>({
    video1: false,
    video2: false,
    video3: false,
    video4: false,
    video5: false,
    video6: false,
    video7: false,
    video8: false,
    
  });
  const toggleVideo = (videoKey: keyof VideoStatusType) => {
    setVideoStatus((prevStatus) => ({
      ...prevStatus,
      [videoKey]: !prevStatus[videoKey],
    }));
  };

  const [addClass, setAddClass] = useState(false);
  const [isShow, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const [isMuted, setIsMuted] = useState(false);
  const [isAudioMuted, setAudioIsMuted] = useState(false);
  const [micStatus, setMicStatus] = useState<MicStatus>({
    mic1: false,
    mic2: false,
    mic3: false,
    mic4: false,
    mic5: false,
    mic6: false,
    mic7: false,
    mic8: false,
    mic9: false,
    mic10: false,
    mic11: false,
    mic12: false,
  });

  const [isVideoOff, setIsVideoOff] = useState(false);

  // const toggleVideo = () => {
  //   setIsVideoOff((prevIsVideoOff) => !prevIsVideoOff);
  // };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const toggleAudioMute = () => {
    setAudioIsMuted(!isAudioMuted);
  };
  const toggleMic = (micKey: keyof MicStatus) => {
    setMicStatus((prevState) => ({
      ...prevState,
      [micKey]: !prevState[micKey],
    }));
  };

  const handleShowClass = () => {
    setShow(true);
    setAddClass(true);
    setIsVisible(false);
  };

  const handleShowremoveClass = () => {
    setShow(false);
    setAddClass(false);
  };

  const handleAddVisible = () => {
    setIsVisible(true);
    setAddClass(true);
    setShow(false);
  };

  const handleRemoveVisible = () => {
    setIsVisible(false);
    setAddClass(false);
  };

  const settings = {
    dots: false,
    autoplay: true,
    arrows:true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="page-wrapper">
    <div className="content">
      {/* /product list */}
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-12">
              <div className="conference-meet-group">
                <div className="meeting-list">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="mb-3">
                      <h4 className="mb-1">2023 Stock Conference Meeting</h4>
                      <p>Thursday, 19 January 2023</p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to="#"
                        className="btn btn-primary me-2"
                      >
                        <i className="ti ti-plus me-2" />
                        Add Participants
                      </Link>
                      <span className="partispant-chat btn btn-outline-light btn-icon me-2">
                        <Link to="#" id="show-message">
                          <i className="ti ti-message" />
                        </Link>
                      </span>
                      <span className="partispant-users btn btn-outline-light btn-icon">
                        <Link to="#" id="add-partispant">
                          <i className="bx bx-user" />
                        </Link>
                      </span>
                    </div>
                  </div>
                  {/* Horizontal View */}
                  <div className="join-contents horizontal-view fade-whiteboard">
                    <div className="join-video user-active">
                      <ImageWithBasePath
                        src="assets/img/join-call.jpg"
                        className="img-fluid"
                        alt="Logo"
                      />
                      <div className="video-avatar">
                        <div className="text-avatar">
                          <div className="text-box">S</div>
                        </div>
                      </div>
                      <div className="record-time">
                        <span>40:12</span>
                      </div>
                      <div className="audio-volume">
                        <input
                          className="custom-input"
                          type="range"
                          min={0}
                          max={100}
                          step="any"
                          defaultValue={0}
                        />
                        <span className="volume-icons">
                          <Link to="#">
                            <i className="feather feather-volume-2" />
                          </Link>
                        </span>
                      </div>
                      <div className="more-icon">
                        <Link to="#" className="mic-off">
                          <i className="bx bx-microphone-off" />
                        </Link>
                      </div>
                    </div>
                    <Slider {...settings} className="owl-carousel video-slide d-flex owl-theme">
                      <div className="join-video single-user">
                        <ImageWithBasePath
                          src="assets/img/users/user-01.jpg"
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name sub-part-name">
                          <h4>Barbara</h4>
                        </div>
                        <div className="more-icon">
                          <Link to="#" className="other-mic-off">
                            <i className="bx bx-microphone" />
                          </Link>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <ImageWithBasePath
                          src="assets/img/users/user-02.jpg"
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name sub-part-name">
                          <h4>Linnea</h4>
                        </div>
                        <div className="more-icon">
                          <Link to="#" className="other-mic-off">
                            <i className="bx bx-microphone" />
                          </Link>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <ImageWithBasePath
                          src="assets/img/users/user-05.jpg"
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name sub-part-name">
                          <h4>Richard</h4>
                        </div>
                        <div className="more-icon">
                          <Link to="#" className="other-mic-off">
                            <i className="bx bx-microphone" />
                          </Link>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <ImageWithBasePath
                          src="assets/img/users/user-03.jpg"
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name sub-part-name">
                          <h4>Freda</h4>
                        </div>
                        <div className="more-icon">
                          <Link to="#" className="other-mic-off">
                            <i className="bx bx-microphone" />
                          </Link>
                        </div>
                      </div>
                    </Slider>
                  </div>
                  {/* /Horizontal View */}
                </div>
                <div
                  className="right-user-side right-partisipants right-side-party theiaStickySidebar mb-2"
                  id="add-party"
                >
                  <div className="card slime-grp">
                    <div className="card-header d-flex align-items-center justify-content-between pb-0">
                      <h5 className="mb-3">Participant</h5>
                      <Link
                        to="#"
                        className="close_profile close_profile4 mb-3 link-danger"
                      >
                        <i className="ti ti-x" />
                      </Link>
                    </div>
                    <div className="card-body card-body-blk slimscroll">
                      <div className="party-msg-blk ">
                        <ul className="user-list mt-2">
                          <li>
                            <div className="user-list-item">
                              <div className="avatar ">
                                <ImageWithBasePath
                                  src="assets/img/users/user-02.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="users-list-body">
                                <div className="name-list-user out-going-call">
                                  <h5>Maybelle</h5>
                                </div>
                                <div className="last-call-time">
                                  <div className="call-recent recent-part me-1">
                                    <Link
                                      to="#"
                                      className="other-mic-off"
                                    >
                                      <i className="bx bx-microphone" />
                                    </Link>
                                  </div>
                                  <div className="call-recent recent-part">
                                    <Link
                                      to="#"
                                      className="other-video-off"
                                    >
                                      <i className="bx bx-video" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-list-item">
                              <div className="avatar ">
                                <ImageWithBasePath
                                  src="assets/img/users/user-03.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="users-list-body">
                                <div className="name-list-user out-going-call">
                                  <h5>Benjamin</h5>
                                </div>
                                <div className="last-call-time">
                                  <div className="call-recent recent-part me-1">
                                    <Link
                                      to="#"
                                      className="other-mic-off"
                                    >
                                      <i className="bx bx-microphone" />
                                    </Link>
                                  </div>
                                  <div className="call-recent recent-part">
                                    <Link
                                      to="#"
                                      className="other-video-off"
                                    >
                                      <i className="bx bx-video" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-list-item">
                              <div className="avatar ">
                                <ImageWithBasePath
                                  src="assets/img/users/user-04.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="users-list-body">
                                <div className="name-list-user out-going-call">
                                  <h5>Kaitlin</h5>
                                </div>
                                <div className="last-call-time">
                                  <div className="call-recent recent-part me-1">
                                    <Link
                                      to="#"
                                      className="other-mic-off"
                                    >
                                      <i className="bx bx-microphone" />
                                    </Link>
                                  </div>
                                  <div className="call-recent recent-part">
                                    <Link
                                      to="#"
                                      className="other-video-off"
                                    >
                                      <i className="bx bx-video" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-list-item">
                              <div className="avatar ">
                                <ImageWithBasePath
                                  src="assets/img/users/user-05.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="users-list-body">
                                <div className="name-list-user out-going-call">
                                  <h5>Alwin</h5>
                                </div>
                                <div className="last-call-time">
                                  <div className="call-recent recent-part me-1">
                                    <Link
                                      to="#"
                                      className="other-mic-off"
                                    >
                                      <i className="bx bx-microphone" />
                                    </Link>
                                  </div>
                                  <div className="call-recent recent-part">
                                    <Link
                                      to="#"
                                      className="other-video-off"
                                    >
                                      <i className="bx bx-video" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-list-item">
                              <div className="avatar ">
                                <ImageWithBasePath
                                  src="assets/img/users/user-06.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="users-list-body">
                                <div className="name-list-user out-going-call">
                                  <h5>Freda</h5>
                                </div>
                                <div className="last-call-time">
                                  <div className="call-recent recent-part me-1">
                                    <Link
                                      to="#"
                                      className="other-mic-off"
                                    >
                                      <i className="bx bx-microphone" />
                                    </Link>
                                  </div>
                                  <div className="call-recent recent-part">
                                    <Link
                                      to="#"
                                      className="other-video-off"
                                    >
                                      <i className="bx bx-video" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-list-item">
                              <div className="avatar ">
                                <ImageWithBasePath
                                  src="assets/img/users/user-08.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="users-list-body">
                                <div className="name-list-user out-going-call">
                                  <h5>John Doe</h5>
                                </div>
                                <div className="last-call-time">
                                  <div className="call-recent recent-part me-1">
                                    <Link
                                      to="#"
                                      className="other-mic-off"
                                    >
                                      <i className="bx bx-microphone" />
                                    </Link>
                                  </div>
                                  <div className="call-recent recent-part">
                                    <Link
                                      to="#"
                                      className="other-video-off"
                                    >
                                      <i className="bx bx-video" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-list-item">
                              <div className="avatar ">
                                <ImageWithBasePath
                                  src="assets/img/users/user-09.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="users-list-body">
                                <div className="name-list-user out-going-call">
                                  <h5>John Blair</h5>
                                </div>
                                <div className="last-call-time">
                                  <div className="call-recent recent-part me-1">
                                    <Link
                                      to="#"
                                      className="other-mic-off"
                                    >
                                      <i className="bx bx-microphone" />
                                    </Link>
                                  </div>
                                  <div className="call-recent recent-part">
                                    <Link
                                      to="#"
                                      className="other-video-off"
                                    >
                                      <i className="bx bx-video" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-list-item mb-0">
                              <div className="avatar ">
                                <ImageWithBasePath
                                  src="assets/img/users/user-10.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="users-list-body">
                                <div className="name-list-user out-going-call">
                                  <h5>Joseph Collins</h5>
                                </div>
                                <div className="last-call-time">
                                  <div className="call-recent recent-part me-1">
                                    <Link
                                      to="#"
                                      className="other-mic-off"
                                    >
                                      <i className="bx bx-microphone" />
                                    </Link>
                                  </div>
                                  <div className="call-recent recent-part">
                                    <Link
                                      to="#"
                                      className="other-video-off"
                                    >
                                      <i className="bx bx-video" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="right-user-side chat-rooms theiaStickySidebar mb-2"
                  id="chat-room"
                >
                  <div className="card slime-grp">
                    <div className="card-header d-flex align-items-center justify-content-between pb-0">
                      <h5 className="mb-3">Message</h5>
                      <Link
                        to="#"
                        className="close_profile close_profile4 mb-3 link-danger"
                      >
                        <i className="ti ti-x" />
                      </Link>
                    </div>
                    <div className="card-body slimscroll  p-0">
                      <div className="chat-msg-blk ">
                        <div className="chats">
                          <div className="avatar avatar-lg flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>Hi Everyone.!</h4>
                            </div>
                            <div className="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div className="chats chats-right">
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>
                                Good Morning..! Today we have meeting about the
                                new product.
                              </h4>
                            </div>
                            <div className="chat-profile-name text-end">
                              <h6>
                                <i className="bx bx-check-double" /> 10:00
                              </h6>
                            </div>
                          </div>
                          <div className="avatar avatar-lg flex-shrink-0 ms-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-02.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="chats">
                          <div className="avatar avatar-lg flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>Hi.! Good Morning all.</h4>
                            </div>
                            <div className="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div className="chats">
                          <div className="avatar avatar-lg flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>Nice..which category it belongs to?</h4>
                            </div>
                            <div className="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div className="chats">
                          <div className="avatar avatar-lg flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>
                                Great.! This is the second new product that comes
                                in this week.
                              </h4>
                            </div>
                            <div className="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div className="chats">
                          <div className="avatar avatar-lg flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>Hi.! Good Morning all.</h4>
                            </div>
                            <div className="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div className="chats">
                          <div className="avatar avatar-lg flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>Nice..which category it belongs to?</h4>
                            </div>
                            <div className="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div className="chats chats-right">
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>
                                Good Morning..! Today we have meeting about the
                                new product.
                              </h4>
                            </div>
                            <div className="chat-profile-name text-end">
                              <h6>
                                <i className="bx bx-check-double" /> 10:00
                              </h6>
                            </div>
                          </div>
                          <div className="avatar avatar-lg flex-shrink-0 ms-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-02.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="chats mb-0">
                          <div className="avatar avatar-lg flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded"
                              alt="image"
                            />
                          </div>
                          <div className="chat-content">
                            <div className="message-content">
                              <h4>
                                Great.! This is the second new product that comes
                                in this week.
                              </h4>
                            </div>
                            <div className="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-footer">
                        <form>
                          <div className="smile-col comman-icon">
                            <Link to="#">
                              <i className="far fa-smile" />
                            </Link>
                          </div>
                          <div className="attach-col comman-icon">
                            <Link to="#">
                              <i className="fas fa-paperclip" />
                            </Link>
                          </div>
                          <div className="micro-col comman-icon">
                            <Link to="#">
                              <i className="bx bx-microphone" />
                            </Link>
                          </div>
                          <input
                            type="text"
                            className="form-control chat_form"
                            placeholder="Enter Message....."
                          />
                          <div className="send-chat comman-icon">
                            <Link to="#">
                              <i data-feather="send" />
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="meet-call-menu-blk">
                <div className="video-call-action">
                  <ul className="nav">
                    <li>
                      <Link to="#" className="mute-bt ">
                        <i className="bx bx-microphone" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="call-end">
                        <i data-feather="phone" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="mute-video">
                        <i className="bx bx-video" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /product list */}
    </div>
  </div>
  
  );
};

export default Videocallss;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import StarIcon from "@material-ui/icons/Star";
import FaceIcon from "@material-ui/icons/Face";

import ProgressBar from "../../../Component/ProgressBar";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
  },
}));

export default function Feedback() {
  const classes = useStyles();
  return (
    <div className="section-wrapper">
      <div className="text-left mb-3">
        <span className="section-header">Feedback</span>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-center align-items-center comment-header mb-2">
          <div>
            <StarIcon style={{ color: "#17a2b8" }} />
          </div>
          <div>5.0</div>
          <div className="ml-2">17 comments</div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col mr-5">
              <div className="d-flex flex-row align-items-center">
                <div className="mr-auto">communication</div>
                <ProgressBar percentage={90} style={{ width: "30%" }} />
                <div className="ml-2">4.9</div>
              </div>
            </div>

            <div className="col">
              <div className="d-flex flex-row align-items-center">
                <div className="mr-auto">communication</div>
                <ProgressBar percentage={90} style={{ width: "30%" }} />
                <div className="ml-2">4.9</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col mr-5">
              <div className="d-flex flex-row align-items-center">
                <div className="mr-auto">communication</div>
                <ProgressBar percentage={90} style={{ width: "30%" }} />
                <div className="ml-2">4.9</div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-row align-items-center">
                <div className="mr-auto">communication</div>
                <ProgressBar percentage={90} style={{ width: "30%" }} />
                <div className="ml-2">4.9</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5"/>
        <div className="d-flex flex-row justify-content-between comment-area-all flex-wrap">
          <div className="d-flex flex-column align-items-start comment-area-person mb-5">
            <div className="d-flex flex-row align-items-center mb-2">
              <div className="mr-2">
              <Avatar className={classes.avatar}>
                <FaceIcon />
              </Avatar>
              </div>
              <div className="d-flex flex-column align-items-start">
                <div className="person-name">Andy Chow</div>
                <div className="date">2021-01-01</div>
              </div>
            </div>
            <div className="comment-content">
              My family and I stayed here for the weekend and we had a blast!
              Location was great, accessibility to food delivery services is
              easy, very accommodating staff, clean space, and cozy vibe.
              Exactly what we needed to destress from the hustle and bustle from
              Manila ☺️
            </div>
          </div>

          <div className="d-flex flex-column align-items-start comment-area-person mb-5">
            <div className="d-flex flex-row align-items-center mb-2">
             <div className="mr-2">
              <Avatar className={classes.avatar}>
                <FaceIcon />
              </Avatar>
              </div>
              <div className="d-flex flex-column align-items-start">
                <div className="person-name">Andy Chow</div>
                <div className="date">2021-01-01</div>
              </div>
            </div>
            <div className="comment-content">
              My family and I stayed here for the weekend and we had a blast!
              Location was great, accessibility to food delivery services is
              easy, very accommodating staff, clean space, and cozy vibe.
              Exactly what we needed to destress from the hustle and bustle from
              Manila ☺️
            </div>
          </div>

          <div className="d-flex flex-column align-items-start comment-area-person mb-5">
            <div className="d-flex flex-row align-items-center mb-2">
             <div className="mr-2">
              <Avatar className={classes.avatar}>
                <FaceIcon />
              </Avatar>
              </div>
              <div className="d-flex flex-column align-items-start">
                <div className="person-name">Andy Chow</div>
                <div className="date">2021-01-01</div>
              </div>
            </div>
            <div className="comment-content">
              My family and I stayed here for the weekend and we had a blast!
              Location was great, accessibility to food delivery services is
              easy, very accommodating staff, clean space, and cozy vibe.
              Exactly what we needed to destress from the hustle and bustle from
              Manila ☺️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

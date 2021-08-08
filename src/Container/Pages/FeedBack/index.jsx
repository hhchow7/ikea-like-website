import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import StarIcon from "@material-ui/icons/Star";
import FaceIcon from "@material-ui/icons/Face";

import axios from "../../../api";
import ProgressBar from "../../../Component/ProgressBar";

import "./style.css";

const scoreTypes = [
  { type: "communication", name: "Communication" },
  { type: "delivery", name: "Delivery" },
  { type: "price", name: "Price" },
  { type: "userFriendliness", name: "User-Friendliness" },
];

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
  },
}));

export default function Feedback() {
  const classes = useStyles();
  const [feedbacks, setFeedBacks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/feedbacks");
      setFeedBacks(response.data);
    }
    fetchData();
  }, []);

  const userScoreCalculation = (scoreObj) => {
    let avgScore = scoreObj.reduce((p, c) => p + c.score, 0) / scoreObj.length;
    return avgScore;
  };

  const scoreTypeCalculation = (type) => {
    let totalScore = 0;
    feedbacks.map((feedback) => {
      let scoreObj = feedback.score;
      let score = scoreObj.find((obj) => obj.type === type).score;
      totalScore += score;
    });
    return (Math.round((totalScore / feedbacks.length) * 10) / 10).toFixed(1);
  };

  const overAllScoreCalculation = () => {
    let types = scoreTypes;
    let totalScore = 0;
    types.map(type => {
      let score = scoreTypeCalculation(type.type);
      totalScore += score;
    })
    console.log(totalScore)
  }

  return (
    <div className="section-wrapper">
      <div className="text-left">
        <span className="section-header">Feedback</span>
      </div>
      <div className="mb-3" />
      <div className="d-flex flex-column comment-area-all">
        <div className="d-flex flex-row justify-content-center align-items-center comment-header">
          <div>
            <StarIcon style={{ color: "#17a2b8" }} />
          </div>
  <div>{overAllScoreCalculation()}</div>
          <div className="ml-2">{feedbacks.length} comments</div>
        </div>
        <div className="mb-5" />
        <div className="d-flex flex-row justify-content-between flex-wrap">
          {scoreTypes
            ? scoreTypes.map((scoreType) => {
                return (
                  <div className="d-flex flex-row align-items-center comment-area-person mb-3">
                    <div className="mr-auto">{scoreType.name}</div>
                    <ProgressBar percentage={(scoreTypeCalculation(scoreType.type)/5) * 100} style={{ width: "30%" }} />
                    <div className="ml-2">
                      {scoreTypeCalculation(scoreType.type)}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        <div className="mb-5" />
        <div className="d-flex flex-row justify-content-between flex-wrap">
          {feedbacks
            ? feedbacks.map((feedback) => {
                return (
                  <div
                    key={feedback.id}
                    className="d-flex flex-column align-items-start comment-area-person mb-5"
                  >
                    <div className="d-flex flex-row align-items-center justify-content-between w-100">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="mr-2">
                          <Avatar className={classes.avatar}>
                            <FaceIcon />
                          </Avatar>
                        </div>
                        <div className="d-flex flex-column align-items-start">
                          <div className="person-name">{feedback.name}</div>
                          <div className="date">{feedback.date}</div>
                        </div>
                      </div>
                      <div>
                        <Rating
                          name="read-only"
                          value={userScoreCalculation(feedback.score)}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="comment-content">{feedback.comment}</div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

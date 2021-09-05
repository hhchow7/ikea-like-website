import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Rating from "@material-ui/lab/Rating";
import _ from "lodash";

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
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  const classes = useStyles();
  const [feedbacks, setFeedBacks] = useState([]);
  const [avgScoreByType, setAvgScoreByType] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/feedbacks");
      let userData = response.data.map((user) => {
        let userTotalScore = 0;
        user.score.map((score) => {
          userTotalScore += score.score;
        });
        return {
          ...user,
          avgScore: _.round(userTotalScore / user.score.length, 1),
        };
      });

      let typeTotalScore = {
        communication: 0,
        delivery: 0,
        price: 0,
        userFriendliness: 0,
      };
      response.data.map((user) => {
        user.score.map((score) => {
          switch (score.type) {
            case "communication":
              typeTotalScore["communication"] += score.score;
              break;
            case "delivery":
              typeTotalScore["delivery"] += score.score;
              break;
            case "price":
              typeTotalScore["price"] += score.score;
              break;
            case "userFriendliness":
              typeTotalScore["userFriendliness"] += score.score;
              break;
            default:
              break;
          }
        });
      });
      setFeedBacks(userData);
      // count avg score by type
      let avgScoreObj = {};
      let total = 0;
      for (const [key, value] of Object.entries(typeTotalScore)) {
        avgScoreObj[key] = _.round(value / userData.length, 1);
        total += avgScoreObj[key];
      }
      avgScoreObj = {
        ...avgScoreObj,
        overall: _.round(total / Object.entries(avgScoreObj).length, 1),
      };
      setAvgScoreByType(avgScoreObj);
    }
    fetchData();
  }, []);

  return (
    <div className="section-wrapper" id="feedback">
      <div className="text-left">
        <span className="section-header">Feedback</span>
      </div>
      <div className="mb-3" />
      {/* <div className="d-flex flex-column comment-area-all"> */}
      <div className="feedback__content">
        <div className="feedback__content__overall">
          <div>
            <StarIcon style={{ color: "#17a2b8" }} />
          </div>
          <div>{avgScoreByType["overall"]}</div>
          <div className="ml-2"> - {feedbacks.length} comments</div>
        </div>
        {isBigScreen && (
          <>
            <div className="mb-5" />
            <div className="feedback__content__type">
              {scoreTypes
                ? scoreTypes.map((scoreType) => {
                    return (
                      <div
                        key={scoreType.type}
                        className="feedback__content__type__item mb-3"
                      >
                        <div className="mr-auto">{scoreType.name}</div>
                        <ProgressBar
                          percentage={
                            (avgScoreByType[scoreType.type] / 5) * 100
                          }
                          style={{ width: "30%" }}
                        />
                        <div className="ml-2">
                          {typeof avgScoreByType[scoreType.type] === "number"
                            ? avgScoreByType[scoreType.type].toFixed(1)
                            : ""}
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </>
        )}
        <div className="mb-5" />
        <div className="feedback__content__persons">
          {feedbacks
            ? feedbacks.map((feedback) => {
                return (
                  <div
                    key={feedback.id}
                    className="feedback__content__persons__item mb-5"
                  >
                    <div className="feedback__content__persons__item__header">
                      <div className="feedback__content__persons__item__header__about mb-2">
                        <div className="mr-2">
                          <Avatar className={classes.avatar}>
                            <FaceIcon />
                          </Avatar>
                        </div>
                        <div className="feedback__content__persons__item__header__about__text">
                          <div className="feedback__content__persons__item__header__about__text__name">
                            {feedback.name}
                          </div>
                          <div className="feedback__content__persons__item__header__about__text__date">
                            {feedback.date}
                          </div>
                        </div>
                      </div>
                      <div>
                        <Rating
                          name="read-only"
                          value={feedback.avgScore}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="feedback__content__persons__item__comment">
                      {feedback.comment}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

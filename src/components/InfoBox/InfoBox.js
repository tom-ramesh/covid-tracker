import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./infobox.css";

const InfoBox = ({ title, cases, total, ...props }) => {
  return (
    <Card
      className={`info-box ${props.active && "info-box--selected"} ${
        props.isRed && "info-box--red"
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className="info-box__title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`info-box__cases ${
            !props.isRed && "info-box__cases--green"
          }`}
        >
          {cases}
        </h2>
        <Typography className="info-box__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;

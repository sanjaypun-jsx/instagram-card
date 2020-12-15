import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const ICON = styled.i`
  font-size: 30px;
  border-radius: 50%;
  color: black;
  cursor: pointer;
  padding: 0.4rem 1rem;
  &:nth-child(2) {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;
const DivWrapper = styled.div`
  max-height: 600px;
  width: 400px;
  margin-top: 2rem;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Headerwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IMG = styled.img`
  max-width: 398px;
  border: 1px solid black;
`;

const InstagramCard = ({ data }) => {
  const [heartClick, setHeartClick] = useState(false);
  const [bookmarkClick, setBookmarkClick] = useState(false);
  const [dotsClick, setDotsClick] = useState(false);

  const HeartClick = () => {
    setHeartClick(!heartClick);
  };
  const BookmarkClick = () => {
    setBookmarkClick(!bookmarkClick);
  };
  const DotsClick = () => {
    setDotsClick(!dotsClick);
  };
  return (
    <DivWrapper>
      <Headerwrapper>
        <DivHeader>
          <IMG
            src={data.image}
            style={{
              border: "none",
              height: 30,
              borderRadius: "50%",
              padding: "0rem 1rem"
            }}
            alt="sanji"
          />
          <p style={{ marginTop: 12, fontWeight: "bolder" }}>{data.userName}</p>
        </DivHeader>
        <ICON className="fas fa-ellipsis-h" />
      </Headerwrapper>
      <IMG src={data.image} alt="sanji" />
      <Headerwrapper>
        <DivHeader>
          <ICON
            onClick={HeartClick}
            className={heartClick ? "fas fa-heart" : "far fa-heart"}
            style={{ color: heartClick ? "tomato" : "black" }}
          />
          <ICON style={{ paddingLeft: "1rem" }} className="far fa-comment" />
        </DivHeader>
        <ICON
          onClick={BookmarkClick}
          className={bookmarkClick ? "fas fa-bookmark" : "far fa-bookmark"}
        />
      </Headerwrapper>
      <p style={{ textAlign: "left", padding: "0rem 1rem" }}>
        <span style={{ fontWeight: "bold" }}>{data.userName} </span>
        {data.details}
      </p>
    </DivWrapper>
  );
};
export default InstagramCard;

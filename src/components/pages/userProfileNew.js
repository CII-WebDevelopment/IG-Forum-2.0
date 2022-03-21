import React from "react";
import FeedNav from "../../components/feed/FeedNav";
import UserInfo from "../userProfile/UserInfo";
import UserPosts from "../userProfile/UserPosts";

const userProfileNew = () => {
  return (
    <div>
      <FeedNav></FeedNav>
      <UserInfo></UserInfo>
      <hr
        style={{
          color: 'black',
          backgroundColor:'black',
          borderColor: 'black',
          marginBottom: 30,
          weight: 2,
          height: 2
        }}
      />
      <UserPosts></UserPosts>
    </div>
  );
};

export { userProfileNew };

import React from "react";
import FeedNav from "../../components/feed/FeedNav";
import FeedMain from "../feed/FeedMain";

const FeedPage = () => {
  return (
    <div>
      <FeedNav></FeedNav>
      <FeedMain></FeedMain>
    </div>
  );
};

export { FeedPage };

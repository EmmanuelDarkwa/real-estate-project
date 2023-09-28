import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

const HouseList = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  const allPosts = state.allPosts;
  const postId = allPosts.postId;
  const { houses, loading } = useContext(HouseContext);
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }
  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="mb-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {/* {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })} */}

          {allPosts.map((post) => {
            const firstImageUrl = post.propertyPictures[0];
            return (
              <div key={post.postId}>
                {" "}
                <Link to={`/property/${post.postId}`} key={post.postId}>
                  <House post={post} firstImageUrl={firstImageUrl} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;

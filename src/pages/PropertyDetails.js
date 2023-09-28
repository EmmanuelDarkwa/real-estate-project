import React from "react";
import { housesData } from "../data";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PropertyDetailsCard from "../components/PropertyDetailsCard";

const PropertyDetails = () => {
  const { id } = useParams();
  const state = useSelector((state) => {
    return state.userReducer;
  });
  const allPosts = state.allPosts;
  return (
    <div>
      {allPosts.map((post) => {
        if (id === post.postId) {
          return (
            <section key={post.postId}>
              <PropertyDetailsCard post={post} />
            </section>
          );
        }
      })}
    </div>
  );
};

export default PropertyDetails;

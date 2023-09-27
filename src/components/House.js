import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = (props) => {
  const post = props.post;
  return (
    <div
      className="bg-white shadow-1 p-5 rounded-lg 
  rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={props.firstImageUrl} alt="property" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">
          {post.propertyInfo.protype}
        </div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {post.propertyInfo.proloc}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">
        {post.propertyInfo.address}
      </div>

      <div className="flex flex-row ">
        {" "}
        <div className="flex items-center text-gray-600 gap-1 mr-2">
          <div className="text-[20px] ">
            <div>
              <BiBed />
            </div>
          </div>
          <div>{post.propertyInfo.proroom}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1 mr-2">
          <div className="text-[20px] ">
            <div>
              <BiBath />
            </div>
          </div>
          <div>{post.propertyInfo.probath}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1 mr-2">
          <div className="text-[20px] ">
            <div>
              <BiArea />
            </div>
          </div>
          <div>{post.propertyInfo.sarea}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4 ">
        {post.propertyInfo.price}₵
      </div>
    </div>
  );
};

export default House;

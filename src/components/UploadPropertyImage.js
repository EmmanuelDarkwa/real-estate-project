import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { storage } from "../firebase/firebase";
import { updatePropertyPictures } from "../slice/usersSlice";

const UploadPropertyImage = (props) => {
  const setDisableButton = props.setDisableButton;
  const dispatch = useDispatch();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrlList, setImageUrlList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const pushImageUrl = (url) => {
    setImageUrlList((prevUrls) => [...prevUrls, url]);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (imageUpload == null) {
      alert("Select File To Upload");
      return;
    }
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    setUploading(true);
    uploadBytes(imageRef, imageUpload)
      .then((response) => {
        getDownloadURL(response.ref)
          .then((url) => {
            pushImageUrl(url);
            dispatch(updatePropertyPictures(url));
            setDisableButton(false);
            setUploading(false);
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            setUploading(false);
          });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setUploading(false);
      });
  };
  const renderImages = () => {
    if (imageUrlList.length === 0) {
      return <span>No Images Uploaded</span>;
    }

    return imageUrlList.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`Image ${index}`}
        style={{ margin: "10px", width: "50px", height: "50px" }}
      />
    ));
  };

  return (
    <div className="my-3 flex flex-col items-center">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          overflowX: "scroll",
        }}>
        {renderImages()}
      </div>
      <div className="w-full md:w-96 md:max-w-full mx-auto mt-5 mb-5">
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <div>
            <label className="block mb-4 ">
              <span className="text-gray-700">Property Images</span>
              <input
                required
                name="photo"
                type="file"
                accept="image/*"
                className="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                onChange={(e) => {
                  setImageUpload(e.target.files[0]);
                }}
              />
            </label>
            <div>
              <button
                type="submit"
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                disabled={uploading}
                onClick={uploadImage}>
                {uploading ? <span className="loader"></span> : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPropertyImage;

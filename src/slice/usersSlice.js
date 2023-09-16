import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const initialState = {
  userInfo: {},
  loginId: "",
  propertyData: {
    propertyInfo: {
      protype: "",
      proloc: "",
      address: "",
      price: 0,
      probath: 0,
      proroom: 0,
      sarea: 0,
      proabout: "",
    },
    propertyPictures: [],
    userId: "",
    postId: "",
    dateUploaded: null,
  },
};

const usersSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    pushNewUser: (state, action) => {
      const userId = action.payload.userId;
      setDoc(doc(db, "allUsers", userId), action.payload);
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    mergePropertyData: (state, action) => {
      state.propertyData.propertyInfo = {
        ...state.propertyData.propertyInfo,
        ...action.payload,
      };
    },
    submitPost: (state) => {
      console.log("Moved");
      const data = state.propertyData;
      const dbRef = collection(db, "allPosts");
      addDoc(dbRef, data)
        .then((docRef) => {
          console.log("Document has been added successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateLoginId: (state, action) => {
      state.loginId = action.payload;
    },
    updatePropertyPictures: (state, action) => {
      const newPayloadObject = { ...action.payload };
      const charArray = Object.values(newPayloadObject);
      const joinedString = charArray.join("");
      state.propertyData.propertyPictures.push(joinedString);
    },
    updateOtherFields: (state, action) => {
      const { userId, postId, dateUploaded } = action.payload;
      state.propertyData.userId = userId;
      state.propertyData.postId = postId;
      state.propertyData.dateUploaded = dateUploaded;
    },
    resetState: (state) => {
      state.userInfo = {};
      state.loginId = "";
      state.propertyData = {
        propertyInfo: {
          protype: "",
          proloc: "",
          address: "",
          price: 0,
          probath: 0,
          proroom: 0,
          sarea: 0,
          proabout: "",
        },
        propertyPictures: [],
        userId: "",
        postId: "",
        dateUploaded: null,
      };
    },
  },
});

export const {
  pushNewUser,
  setUserInfo,
  mergePropertyData,
  submitPost,
  updateLoginId,
  updatePropertyPictures,
  updateOtherFields,
  resetState,
} = usersSlice.actions;
export default usersSlice.reducer;

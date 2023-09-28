import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const initialState = {
  userInfo: {},
  allPosts: [],
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
    fullName: "",
    phone: "",
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
      const data = state.propertyData;
      const dbRef = collection(db, "allPosts");
      addDoc(dbRef, data)
        .then((docRef) => {})
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
      const { userId, postId, dateUploaded, phone, fullName } = action.payload;
      state.propertyData.userId = userId;
      state.propertyData.fullName = fullName;
      state.propertyData.phone = phone;
      state.propertyData.postId = postId;
      state.propertyData.dateUploaded = dateUploaded;
    },
    updateAllPosts: (state, action) => {
      state.allPosts = action.payload;
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
        fullName: "",
        phone: "",
      };
    },
    resetPropertyPost: (state) => {
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
        fullName: "",
        phone: "",
      };
      console.log("erased");
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
  updateAllPosts,
  resetPropertyPost,
} = usersSlice.actions;
export default usersSlice.reducer;

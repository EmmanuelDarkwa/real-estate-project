import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { resetState, setUserInfo, updateLoginId } from "../slice/usersSlice";
import { doc, getDoc } from "firebase/firestore";
import { BiUserCircle } from "react-icons/bi";

const HeaderAuth = () => {
  const [authenticatedUser, setauthenticatedUser] = useState("");
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setauthenticatedUser(user);
        const uuid = user.uid;
        const docRef = doc(db, "allUsers", uuid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          dispatch(updateLoginId(uuid));
          const userDoc = docSnap.data();
          setUserData(userDoc);
          dispatch(setUserInfo(userDoc));
        }
      } else {
        setauthenticatedUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  const userSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(resetState());
        console.log("User Signed out wai");
      })
      .catch((error) => {
        console.log("ERROR SIGNING OUT");
      });
  };
  const username =
    userData.fname && userData.lname
      ? `${userData.fname} ${userData.lname}`
      : "";
  return (
    <>
      {authenticatedUser === null ? (
        <>
          <Link className="hover:text-violet-900 transtion" to="/login">
            Log In
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/signup">
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] ">
              <div>
                <BiUserCircle />
              </div>
            </div>
            <div className="capitalize">{username}</div>
          </div>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/"
            onClick={userSignout}>
            Log Out
          </Link>
        </>
      )}
    </>
  );
};

export default HeaderAuth;

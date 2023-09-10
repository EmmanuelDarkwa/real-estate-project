import { createSlice } from "@reduxjs/toolkit"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

const initialState = {
    userInfo: [],
    postInfo: [],
}

const usersSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        pushNewUser: (state, action) => {
            const userId = action.payload.userId;
            setDoc(doc(db, "allUsers", userId), action.payload);
        },
        setUserInfo: (state, action) => {
            state.userInfo.push(action.payload);
            console.log(action.payload)
        },
        pushPost: (state, action) => {
            state.postInfo.push(action.payload);
            console.log(action.payload)
        },
        submitPost: (state, action) => {
            state.postInfo.push(action.payload);
            const allpostInfo = state.user;
            setDoc(doc(db, "allPosts", 122), allpostInfo);
        }

    }
})

export const { pushNewUser, setUserInfo, pushPost, submitPost } = usersSlice.actions;
export default usersSlice.reducer;
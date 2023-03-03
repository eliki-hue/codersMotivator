import axios from "axios";


const mainUrl = 'http://127.0.0.1:8000/'

const registrationUrl =`${mainUrl}/registration`
const loginUrl =`${mainUrl}/login`
const userUpdateUrl =`${mainUrl}//update_user/<pk>/`
const getAllUsersUrl =`${mainUrl}/all_users/`
const viewPostUrl = `${mainUrl}/api/post/`
const postLikeUrl = `${mainUrl}/posts/<int:pk>/like/`
const postUnlikeUrl =`${mainUrl}/posts/<int:pk>/unlike/`
const commentUrl =`${mainUrl}/comments/`


export const register =(user)=> axios.post(registrationUrl, user)
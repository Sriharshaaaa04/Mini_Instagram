import firebaseApp from "./firebase.js";
import{getAuth,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const auth=getAuth(firebaseApp);

onAuthStateChanged(auth,(user)=>{
  if(!user){
    // location.replace("index.html")  -->if not user replaces the location to index page
  }
  else{
    document.getElementById("mockmsg").innerHTML=user.email
  }
})
//function of the logout 
document.getElementById("logout").addEventListener('click',function(){
    signOut(auth);
})
document.getElementById("profile").addEventListener('click',function(){
  location.replace("profile_page.html");
})
document.getElementById("upload").addEventListener('click',function(){
  location.replace("upload.html");
})


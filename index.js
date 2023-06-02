document.getElementById("loginform").addEventListener("submit",(event)=>{
  event.preventDefault();
})
import firebaseApp from "./firebase.js";
import{getAuth,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

export const auth=getAuth(firebaseApp);

onAuthStateChanged(auth,(user)=>{
  if(user){
    location.replace("open.html")
  }
})


document.getElementById("loginbx").addEventListener('click',function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("finalpassword").value;
  signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
          document.getElementById("errormsg").innerHTML = error.message
      })
})
document.getElementById("signupbx").addEventListener("click",function(e){
  checkdata();
})
var usersname=document.getElementById("username");
var emailname=document.getElementById("emails")

function checkdata(){
  var usersnamevalue=usersname.value.trim();
  var emailnamevalue=emailname.value.trim();
  if(usersnamevalue==""){
    setError(usersname,"Username can't be blank");
    document.getElementById("signupbx").addEventListener("click",function(e){
      e.preventDefault();
    })
  }
  else{
    setSuccuss(usersname)
  }  
  if(emailnamevalue==""){
    setErrors(emailname,"Email can't be blank")
    document.getElementById("signupbx").addEventListener("click",function(e){
      e.preventDefault();
    })
  }
  else if(!validemail){
    setErrors(emailname,"Email is not valid")
    document.getElementById("signupbx").addEventListener("click",function(e){
      e.preventDefault();
    })
  }
  else{
    setSuccusss(emailname)
  }
}
function setError(u,msg){
  var parentbx=u.parentElement;
  parentbx.className="name_details errors"
  var span=parentbx.querySelector("span")
  var fa=parentbx.querySelector(".fa")
  span.innerText=msg;
  fa.className="fa fa-exclamation-circle"
}
function setSuccuss(u){
  var parentbx=u.parentElement;
  parentbx.className="name_details succuss"
  var fa=parentbx.querySelector(".fa");
  fa.className="fa fa-check-circle"
}

function setErrors(u,msg){
  var parentbx=u.parentElement;
  parentbx.className="name_detail errors"
  var span=parentbx.querySelector("span")
  var fa=parentbx.querySelector(".fa")
  span.innerText=msg;
  fa.className="fa fa-exclamation-circle"
}
function setSuccusss(u){
  var parentbx=u.parentElement;
  parentbx.className="name_detail succuss"
  var fa=parentbx.querySelector(".fa");
  fa.className="fa fa-check-circle"
}

document.getElementById("signupbx").addEventListener('click',function(){
  const email=document.getElementById("emails").value
  const username=document.getElementById("username").value
  const password=document.getElementById("password").value
  const conformpassword=document.getElementById("conformpassword").value
   createUserWithEmailAndPassword(auth,email,password)
  
})



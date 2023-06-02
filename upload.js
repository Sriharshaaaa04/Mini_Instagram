
// import{initializeApp} from "./firebase.js"
import{getStorage,ref as sRef,uploadBytesResumable,getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-storage.js";
// import { getFireStore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js'
// import{doc,getDoc,setDoc,collection,addDoc} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
//  import { getFirestore } from "./firebase.js";
// const clouddb=getFireStore();
import{getDatabase,ref,set,child,get,update,remove} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
import firebaseApp from "./firebase.js";
const realdb=getDatabase();

var files=[];
var reader=new FileReader();

var namebx=document.getElementById('namebox');
var extlab=document.getElementById('extlab');
var myimg=document.getElementById('myimg');
var proglab=document.getElementById('upprogress');
var Selbtn=document.getElementById('selbn');
var Upbtn=document.getElementById('upbn');
var Downbtn=document.getElementById('downbn');
var sharebtn=document.getElementById('sharebn');

var input=document.createElement('input')
input.type='file'
input.onchange=e=>{
    files=e.target.files;
    var extension=GetFileExt(files[0])
    var name=GetFileName(files[0])
    namebx.value=name;
    extlab.innerHTML=extension
    reader.readAsDataURL(files[0])

}
var mock;
reader.onload=function(){
    myimg.src=reader.result;
}
// ------------------------------------------------------------------------//
Selbtn.onclick=function(){
    input.click();
}
function GetFileExt(file){
    var temp=file.name.split('.');
    var ext=temp.slice((temp.length-1),(temp.length));
    return '.'+ext[0];
}
function GetFileName(file){
    var temp=file.name.split('.');
    var fname=temp.slice(0,-1).join('.');
    return fname;
}
// ------------------------------------------------------------------------//
var ImgName;
async function UploadProcess(){
    var ImgToUpload=files[0];
    ImgName=namebx.value+extlab.innerHTML
    if(!ValideName){
        alert('name cannot contain ".","#","$","[", or "]"');
    }
    const metaData={
        contentType:ImgToUpload.type
    }
    const storage=getStorage();
    const storageRef=sRef(storage,"Images/"+ImgName)
    const UploadTask=uploadBytesResumable(storageRef,ImgToUpload,metaData);
    UploadTask.on('state-changed',(snapshot)=>{
        var progess=(snapshot.bytesTransferred/snapshot.totalBytes)*100
        proglab.innerHTML="Upload "+progess+"%";
    },
    (error)=>{
        alert("error:image is not uploaded")
    },
    ()=>{
        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
            SaveURLtoRealtimeDB(downloadURL)
            mock=downloadURL;
            // function gettingurl(){
            // document.getElementById('space').innerHTML=downloadURL
            // }
            sharebtn.onclick=shareimg
        })
    });
}

Upbtn.onclick=UploadProcess
function shareimg(){
    document.getElementById("copy").value=mock;
}
sharebtn.onclick=shareimg


//------------------------------------------------------------------------------------//
document.getElementById("home").addEventListener('click',function(){
    location.replace("open.html");
  })
 //-------------------------------------------//
function SaveURLtoRealtimeDB(URL){
    var name=namebx.value;
    var ext=extlab.innerHTML;
    set(ref(realdb,"ImagesLinks/"+name),{
        ImageName:(name+ext),
        ImgUrl:URL
    });
} 
function ValideName(){
    var regex=/[\.#$\[\]]/
    return !(regex.test(namebx.value));
}
function GetUrlfromRealtimeDB(){
    UploadProcess();
    shareimg();
    var name=namebx.value
    var dbref=ref(realdb)
    get(child(dbref,"ImagesLinks/"+name)).then((snapshot)=>{
        if(snapshot.exists()){
            myimg.src=snapshot.val().ImgUrl;
        }
    })
}
Downbtn.onclick=GetUrlfromRealtimeDB;
//--------------------------------------------------------------------
let copytext=document.querySelector(".copy-text");
copytext.querySelector("button").addEventListener("click",function(){
    let input=copytext.querySelector("input.text")
    input.select();
    document.execCommand("copy");
    copytext.classList.add("active")
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        copytext.classList.remove("active")
    },2500)
})
//----------------------------------------------------------------------------------

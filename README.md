# MINI-INSTA

## DESCRIPTION
Mini-Instagram is a mini social media website similar to Instagram,
Facebook up to some extent. It is a free online application where users can upload photos
and can share it with other users also.

## FEATURES
1. USER AUTHENTICATION
2. PERSONAL PROFILE
3. LIKE FEATURE
4. SHARING FEATURE
5. SEARCH BAR
6. SECURE

## TECHNICAL STACK USED
#### FRONTEND
- HTML
- CSS
- JAVASCRIPT
#### BACKEND
- FIREBASE

## IMPLEMENTATION DETAILS
#### 1. FIREBASE INTEGRATION WITH HTML
 A link of CDN'S will be available in the firebase console after creating the project ,copy them and paste it in the javascript file and add it to all neccessary html files.The javacript file should be of type module.
 
#### 2. USER AUTHENTICATION
  We will make use of the firebase inbuilt function that are already available for the user authentication.The code corresponding to it is written in index.js.
  ##### [USER AUTHENTICATION DOC](https://firebase.google.com/docs/auth/web/start)

#### 3. PERSONAL PROFILE
  We will make use of the firebase realtime database for storing an image.We can also retreive it from database using firebase functions.All the code related to it is written in personal_page.js , upload.js.
  ##### [REALTIME DATABASE DOC](https://firebase.google.com/docs/database/web/start)
  
#### 4. LIKE FEATURE
  We will use onclick event of javascript which helps us to change the style when the icon in on clicked by the user. The code related to this feature is written in open.js.
  
#### 5. SHARING FEATURE  
  We will use get the url of the uploaded image if we click on get url after uploading.We can copy the link from there and can send it to any other user or non user.
  The code related to this is written in upload.js.
  
#### 6. SEARCH BAR
  There will an option avialable in the webpage where we can type the image tag and click on retreive image so that the image will be appeared on the screen.The code related to this is available in upload.js.
  
  ## FLOW CHART OF THE WEBSITE
   This is the flow of the website
   ![TABLE](https://user-images.githubusercontent.com/101788547/163723906-85ff43ac-6bbe-4fb6-bb04-bbb4b17ea64c.png)
   
 ## HOW TO USE ?
   First a user have to create a account by clicking the signup tag present in authentication page after entering the neccessary information click on the signup button which will be redirected to home page.Where user can see a number of images and like them and add a comment on the picture.The user can now click on the upload page where user can upload, share using url, and can also retreive image. Now user can click on the profile page so that he can be directed to profile page where he can see a personal photo gallery.








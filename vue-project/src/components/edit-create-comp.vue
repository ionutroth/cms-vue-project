<template>
    <div class="row justify-content-center mt-4 mb-4" >
        <div class="col col-11 col-sm-11 col-md-10 col-lg-8 col-xl-6  shadow" id="create-form" v-show="edit == false">
            <div class="form-group w-75 mx-auto">
                <label for="firstname">Firstname</label>
                <input type="text" class="form-control" id="firstname" placeholder="Enter your firstname" required v-model="firstnameCreate">
            </div>
            <div class="form-group w-75 mx-auto">
                <label for="lastname">Lastname</label>
                <input type="text"  class="form-control" id="lastname" placeholder="Enter your lastname" required v-model="lastnameCreate">
            </div>
            <div class="form-group w-75 mx-auto">
                <label for="email">Email</label>
                <input type="email"  class="form-control" id="email" placeholder="something@something.com" aria-describedby="email" required v-model="emailCreate">
            </div>
            <div class="form-group w-75 mx-auto">
                <label for="sex">Sex</label>
                <select class="form-control"  id="sex" v-model="sexCreate">
                    <option value="m" slected="selected">Male</option>
                    <option value="f">Female</option>
                    <option value="d">Dog(I'm here accidentally)</option>
                    <option value="y">Yes, please</option>
                </select>
            </div>
            <div class="form-group w-75 mx-auto">
                <label for="date">Date</label>
                <input type="date" class="form-control" v-model="dateCreate">
            </div>
            <div class="input-group mb-3 w-75 mx-auto">
                <div class="custom-file">
                    <input type="file" id="image" name="image">
                </div>
            </div>
            <img src="@/assets/user-2935373_960_720.png" alt="" id="avatar"><br>
            <button class="btn btn-success mr-3" v-on:click="addToDB()">Create</button>
            <button class="btn btn-warning mr-3">Clear</button>
        </div>

        <div class="col col-11 col-sm-11 col-md-10 col-lg-8 col-xl-6 shadow" id="edit-form" v-show="edit == true">
            <div class="form-group w-75 mx-auto">
                <label for="firstname">Firstname</label>
                <input type="text"  class="form-control" id="firstnameEdit" placeholder="Enter your firstname" required>
            </div>
            <div class="form-group w-75 mx-auto">
                <label for="lastname">Lastname</label>
                <input type="text"  class="form-control" id="lastnameEdit" placeholder="Enter your lastname" required>
            </div>
            <div class="form-group w-75 mx-auto">
                <label for="email">Email</label>
                <input type="email"  class="form-control" id="emailEdit" placeholder="something@something.com" aria-describedby="email" required>
            </div>
            <div class="form-group w-75 mx-auto">
                <label for="sex">Sex</label>
                <select class="form-control"  id="sex">
                    <option value="m" slected="selected">Male</option>
                    <option value="f">Female</option>
                    <option value="d">Dog(I'm here accidentally)</option>
                    <option value="y">Yes, please</option>
                </select>
            </div>
            <div class="form-group w-75 mx-auto">
                <label for="date">Date</label>
                <input type="date" class="form-control" >
            </div>
            <div class="input-group mb-3 w-75 mx-auto">
                <div class="custom-file">
                    <input type="file" id="image" name="image">
                </div>
            </div>
            <img src="@/assets/user-2935373_960_720.png" alt="" id="avatar"><br>
            <button class="btn btn-success mr-3" >Edit</button>
            <button class="btn btn-warning mr-3" >Abort</button>
        </div>
    </div>
</template>

<script>
import { db } from 'C:\\Users\\IonutRoth\\Documents\\GitHub\\cms-vue-project\\vue-project\\src\\main.js'

export default {
    data(){
        return{
            firstnameCreate:"",
            lastnameCreate:"",
            emailCreate:"",
            sexCreate:"m",
            dateCreate:"",
            avatarCreate:"",
            firstnameEdit:"",
            lastnameEdit:"",
            emailEdit:"",
            sexEdit:"",
            dateEdit:"",
            avatarEdit:""
        };
    },
    methods:{
        testing(){
            console.log(this.firstnameCreate,"cevaaa")
        },
        // verifyDataCreated(){
        //     // var validData = "true"
        //     // let regex = /[^a-zA-Z0-9]/g;
        //     // let regexEmail = /[^a-zA-Z0-9@.]/g;
        //     // let regexAt = /[@]/g;
            
        //     // let firstnameUnwantedChars = this.firstnameCreate.match(regex);
        //     // if (firstnameUnwantedChars != null ){
        //     //     console.log(firstnameUnwantedChars)
        //     //     validData = "false";
        //     // }
        //     // if (this.firstname.length < 5){
        //     //     validData = "false";
        //     // }
            
        //     // let lastnameUnwantedChars = this.lastnameCreate.match(regex);
        //     // if (lastnameUnwantedChars != null ){
        //     //     validData = "false";
        //     // }
        //     // if (this.lastname.length < 5){
        //     //     validData="false";
        //     // }

        //     // let emailUnwantedChars = this.emailCreate.match(regexEmail);
        //     // if(emailUnwantedChars != null){
        //     //     validData="false";
        //     // }
        //     // let emailAtChar = this.emailCreate.match(regexAt);
        //     // if (emailAtChar == null){
        //     //     validData="false";
        //     // }
        //     // if (this.emailCreate.length < 5 ){
        //     //     validData="false";
        //     // }
            
        //     // if (this.dateCreated.length == 0 ){
        //     //     validData = "false";
        //     // }
        //     // if(validData == "true"){
        //     //     alert("Good data")
        //     // }else{
        //     //     alert("Verify data")
        //     // }
        //     let verification1 = "false";
        //     let verification2 = "false";
        //     let verification3 = "false";
        //     let verification4 = "false";
        //     let verification5 = "false";
        //     let verification6 = "false";
        //     let verification7 = "false";
        //     let regex = /[^a-zA-Z0-9]/g;
        //     let regexEmail = /[^a-zA-Z0-9@.]/g;
        //     let regexAt = /[@]/g;
        //     let lastnameVerification = "false"
        //     let firstnameVerification = "false"
        //     let dateVerification = "false"
        //     let emailVerification = "false"
        //     //firstname verification
        //     let firstnameUnwantedChars = this.firstnameCreate.match(regex);
        //     if (firstnameUnwantedChars == null ){
        //         verification1 = "true";
        //     }else{
        //         verification1 = "false";
        //         console.log("v1 error", firstnameUnwantedChars);
        //         alert("firstname contains unallowed chars")
        //     }
        //     if (this.firstnameCreate.length > 4){
        //         verification2 = "true";
        //     }else{
        //         verification2 = "false";
        //         console.log("v2 error");
        //         alert("firstname not long enough")
        //     }
        //     if ((verification2 == "true") && (verification1=="true")){
        //         firstnameVerification = "true";
        //     }else{
        //         firstnameVerification = "false";
        //     }
        //     //lastname verification
        //     let lastnameUnwantedChars = this.lastnameCreate.match(regex);
        //     if (lastnameUnwantedChars == null ){
        //         verification3 = "true";
        //     }else{
        //         verification3 = "false";
        //         console.log("v3 error");
        //         alert("lastname contains unallowed chars")
        //     }
        //     if (this.lastnameCreate.length > 4){
        //         verification4="true";
        //     }else{
        //         verification4="false";
        //         console.log("v4 error");
        //         alert("lastname not long enough")
        //     }
        //     if ((verification3 == "true") && (verification4 == "true")){
        //         this.lastnameVerification = "true";
        //     }else{
        //         this.lastnameVerification = "false"
        //     }
        //     //email verification
        //     let emailUnwantedChars = this.email.match(regexEmail);
        //     if(emailUnwantedChars == null){
        //         verification5="true";
        //     }else{
        //         verification5="false";
        //         console.log("v5 error", emailUnwantedChars);
        //         alert("not an email")
        //     }
        //     let emailAtChar = this.emailCreate.match(regexAt);
        //     if (emailAtChar == null){
        //         verification6="false";
        //         console.log("v6 error", this.emailCreate, emailAtChar);
        //     }else{
        //         verification6="true";
        //     }
        //     if (this.emailCreate.length > 4){
        //         verification7="true";
        //     }else{
        //         verification7="false";
        //         console.log("v7 error");
        //         alert("email not long enough")
        //     }
        //     if ((verification7 == "true") && (verification6 == "true") && (verification5 == "true")){
        //         emailVerification = "true";
        //     }else{
        //         emailVerification = "false";
        //     }
        //     //date verification
        //     if (this.dateCreate.length != 0 ){
        //         dateVerification = "true";
        //     } else{
        //         dateVerification = "false";
        //         console.log("date error")
        //         alert("select a date")
        //     }

        //     if ((dateVerification == "true")&&(emailVerification == "true")&&(lastnameVerification == "true")&&(firstnameVerification == "true")){
        //         // if (this.image != "C:\\Users\\IonutRoth\\Documents\\GitHub\\cms\\user-2935373_960_720.png"){
        //         //     let selectedFile = document.querySelector('input[type=file]').files[0];
        //         //     let reader = new FileReader();
        //         //     reader.onload = function(e){
        //         //         this.image = e.target.result;
        //         //     }.bind(this)
        //         //     reader.onerror = function(error){
        //         //     alert(error);
        //         // }
        //         // reader.readAsDataURL(selectedFile);
        //         // }else{
        //         //     this.image = "C:\\Users\\IonutRoth\\Documents\\GitHub\\cms\\user-2935373_960_720.png"
        //         // }
                
        //         // console.log(this.image)
        //         // this.addToDB()
        //         console.log("ceva")
        //     }else{
        //         console.log("error");
        //     }
        // },
        async addToDB(){
            await db.collection("Persons").add({
                firstname:this.firstnameCreate,
                lastname: this.lastnameCreate,
                email: this.emailCreate,
                sex: this.sexCreate,
                date: this.dateCreate,
            });
            console.log("gata")
        },

        //delete element from db and refresh
        async deleteFromDB(id){
            await db.collection("Persons").doc(id).delete();
        },
    },
    props:{
       edit:{
           type:Boolean,
           required:true
       } 
    }
}
</script>

<style>
#create-form{
    background-color: rgb(142, 172, 175);
    border-radius: 20px;
    padding:30px;
    border-style: solid;
    border-color: rgb(0, 130, 153);
    border-width: 1px;
    text-align: center;
    min-width:450px
}

#edit-form{
    background-color: rgb(114, 193, 207);
    border-radius: 20px;
    padding:30px;
    border-style: solid;
    border-color: green;
    border-width: 1px;
    text-align: center;
    min-width:450px;
}

#avatar{
    padding:1px;
    width:250px;
    height: 250px;
    border-radius: 50%;
    border-width: 2px;
    border-color: black;
    border-style: solid;
    margin-bottom: 3%;
}
</style>
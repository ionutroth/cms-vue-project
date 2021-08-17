<template>
  <div class="row justify-content-center mb-3">
            <div class="col col-12 col-sm-11 col-md-10 col-lg-10 col-xl-10 shadow-lg" id="table-div">
                <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Nr.</th>
                        <th scope="col" style="width:170px">Firstname <br>
                        </th>
                        <th scope="col" style="width:170px">Lastname <br>
                        </th>
                        <th scope="col" style="width:170px">Email <br>
                        </th>
                        <th scope="col" style="width:170px">Sex <br>
                        </th>
                        <th scope="col" style="width:200px">Birthday
                        </th>
                        
                        <th scope="col" style="width:100px">Avatar</th>
                        <th scole="col" style="width:100px">Actions</th>
                      </tr>
                    </thead>
                    <tbody style="border-color: green;border-style:solid;border-width:1px">
                      <tr v-for="(person,index) in persons" :key="index">
                        <th scope="row" id="numbering" style="background-color:rgb(214, 226, 214) ;">{{index + 1}}</th>
                        <td class="rowww">{{person.firstname}}</td>
                        <td class="rowww">{{person.lastname}}</td>
                        <td class="rowww">{{person.email}}</td>
                        <td class="rowww">{{person.sex}}</td>
                        <td class="rowww">{{person.date}}</td>
                        <td class="rowww">
                            <img v-bind:src="person.image" alt="" style="width:100px;height:100px; border-radius: 50%;">
                        </td>
                        <td class="rowww">
                            <button class="btn btn-danger mb-2" v-on:click="deleteFromDB(person.dbId)">Delete</button>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click="loadPersonModal(person.dbId)">Edit</button>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            sorting:true,
            persons:[{firstname:"ceva", lastname:"ceva",dbId:"ceva", email:"ceva",sex:"ceva", date:"ceva",avatar:"ceva"}]
        }
    }
}
</script>

<style>

</style>
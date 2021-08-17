<template>
  <div id="app" class="container-flex">
    <button @click="getDatabase">test</button>
    <editCreateComp/>
    <sortComp/>
    <tableComp/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import editCreateComp from './components/edit-create-comp.vue'
import tableComp from './components/table-comp.vue'
import sortComp from './components/sort-comp.vue'
import { db } from './main.js'


export default {
  name: 'App',
  components: {
    editCreateComp,
    tableComp,
    sortComp
  },
  data(){
    return{
      persons:[]
    }
  },
  methods:{
    async getDatabase(){
      await db.collection('Persons').get().then(info => {
        info.docs.map(doc=>{
          this.persons.push(doc.data());
          this.persons[this.persons.length -1].dbid = doc.id; 
        })
      })
      console.log(this.persons[1]);
    }
  },
  beforeMount(){
    this.getDatabase()
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>

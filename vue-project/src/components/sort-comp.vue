<template>
  <div class="row justify-content-center mb-3" >
        <div class="col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 p-2" id="sortingOptions">
            
            <h3>Sort by column</h3>
            <br>
            <div class="mb-2">
                <button class="btn btn-secondary">Sort by firstname</button>
                <button class="btn btn-secondary">Sort by lastname</button>
                <button class="btn btn-secondary">Sort by email</button>
            </div>
            <div class="mb-2">
                <button class="btn btn-secondary">Sort by sex</button>
                <button class="btn btn-primary">Show males</button>
                <button class="btn btn-danger">Show females</button>
            </div>
            <div class="mb-2">
                <button class="btn btn-secondary">Sort by birthday</button>
                <button class="btn btn-secondary">Sort by avatar</button>
                <button class="btn btn-info">Reset sorting</button>
            </div>
            <br>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.btn{
    margin-right: 10px;
}
#sortingOptions{
    background-color:rgb(38, 52, 65);
    color: white;
}
</style>
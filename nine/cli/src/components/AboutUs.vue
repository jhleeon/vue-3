<template>
    <div class="card">
        <div class="inner">
            <h3>Visiting card</h3>
            <p>Company name: {{ companyName }}</p>
            <p>Location:{{ email }}</p>
            <p>Phone: {{ phone }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props:[ "companyName", "email", "phone" ]
        
}
</script>

<style scoped>
.card {
    height: 200px;
    width: 250px;
    margin: 5px;
    background-color: aqua;
    border: 2px, dotted solid black;
    border-radius: 20%;
    position: relative;
}
.inner {
    position: absolute;
    top: 25px;
    right: 30px;
}
</style>
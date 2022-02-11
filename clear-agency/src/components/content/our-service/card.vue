<template>    
    <div class="card">
            <h1>{{title}}</h1>
            <p>{{detail}}</p>
    </div>    
</template>

<script>
export default {
    name: "card",
    props:["title","detail"]    
}
</script>

<style scoped>
.card{
    position: relative;
    background-color: #2B2353;
    margin-right: 25px;
    margin-bottom: 25px;
    align-items: center;
    padding: 32px 40px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
}

.card:hover{
    background: #9A71DB;
}

.card h1{
    font-size: 18px;
    margin-bottom: 25px;
}

.card p{
    font-size: 12px;
}
</style>
<script setup>
import Student from '../components/Student.vue';
</script>

<template>
    <div>
        <h1>Hello MF!!</h1>
        <Student name="Gay" lname="OHM"></Student>
    </div>
</template>

<script>
export default {
    components: {
        Student
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
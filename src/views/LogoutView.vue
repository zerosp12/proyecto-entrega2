<template>
    <div>
        <h3>Gracias!</h3>
    </div>
</template>
<script>
export default ({
    name: 'LogoutView',
    created() {
        localStorage.isLogin = Boolean(false)
        window.location.href = '/productos'
        console.log(localStorage)
    }
})
</script>

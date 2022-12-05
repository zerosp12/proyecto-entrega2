<template>
    <div class="form-content">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a :class="LoginTabCSS" id="tab-login" data-mdb-toggle="pill" @click="showLogin" href="#" role="tab"
                aria-controls="pills-login" aria-selected="true">Ingresar</a>
            </li>
            <li class="nav-item" role="presentation">
                <a :class="RegisterTabCSS" id="tab-register" data-mdb-toggle="pill" @click="showRegister"  href="#" role="tab"
                aria-controls="pills-register" aria-selected="false">Crear Cuenta</a>
            </li>
        </ul>
        <!--Login-->
        <div class="tab-content">
            <div v-if="ShowLogin" class="tab-pane show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <h1 class="pt-4">Ingresar</h1>
                <hr class="mt-4 mb-4">
                <form>
                <div class="form-outline mb-4">
                    <input v-model="loginUsername" type="text" id="loginName" class="form-control" />
                    <label class="form-label" for="loginName">Email o Usuario</label>
                </div>
                <div class="form-outline mb-4">
                    <input v-model="loginPassword" type="password" id="loginPassword" class="form-control" />
                    <label class="form-label" for="loginPassword">Contraseña</label>
                </div>

                <button type="submit" @click="loginRequest" class="btn btn-primary btn-block mb-4">Ingresar</button>

                <div class="text-center">
                    <p>No eres miembro? <a @click="showRegister" href="#">Registrate</a></p>
                </div>
                </form>
            </div>
            <!--Registro-->
            <div v-if="ShowRegister" class="tab-pane show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                <h1 class="pt-4">Registrate</h1>
                <hr class="mt-4 mb-4">
                <form>
                    <div class="form-outline mb-4">
                        <input type="text" id="registerName" class="form-control" />
                        <label class="form-label" for="registerName">Nombre</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" id="registerUsername" class="form-control" />
                        <label class="form-label" for="registerUsername">Usuario</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="email" id="registerEmail" class="form-control" />
                        <label class="form-label" for="registerEmail">Email</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="registerPassword" class="form-control" />
                        <label class="form-label" for="registerPassword">Contraseña</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="registerRepeatPassword" class="form-control" />
                        <label class="form-label" for="registerRepeatPassword">Repite Contraseña</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mb-3">Registrar Cuenta</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginForm',
    data: ()=> {
        return {
            //Login Form Info
            loginUsername: '',
            loginPassword: '',
            ShowLogin: true,
            ShowRegister: false,
            LoginTabCSS: 'nav-link active',
            RegisterTabCSS: 'nav-link'
        }
    },
    methods: {
        
        loginRequest() {
            let getInfo = this.$parent.$data.usersList;

            let findUser = getInfo.find(x => x.username.toLowerCase() == this.loginUsername.toLowerCase() && x.password == this.loginPassword.toLowerCase())
            
            if(findUser !== undefined)
            {
                this.$parent.$data.clientName = findUser.nombre
                this.$parent.$data.userName = findUser.username
                this.$parent.$data.isLogin = true
                this.$parent.$data.showProductsList = true
                this.$parent.$data.showAccountForm = false
            }
        },
        showLogin() {
            this.ShowLogin = true
            this.ShowRegister = false
            this.LoginTabCSS = 'nav-link active'
            this.RegisterTabCSS = 'nav-link'
        },
        showRegister() {
            this.ShowLogin = false
            this.ShowRegister = true
            this.LoginTabCSS = 'nav-link'
            this.RegisterTabCSS = 'nav-link active'
        }
    },
}
</script>
<style scoped>
.form-content {
    max-width: 300px;
    margin: 0px auto;
}
</style>
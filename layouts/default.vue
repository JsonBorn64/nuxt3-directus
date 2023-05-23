<template>
  <div>
    <NuxtLoadingBar />
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/doc" target="blank">Doc</NuxtLink></li>
          <li><NuxtLink to="/products">Merch</NuxtLink></li>
          <li><a
            @click="showAuthPopup = true"
            class="btn bg-green-800 cursor-pointer"
            v-if="!user"
          >Auth</a></li>
          <li><a
            @click="logoutUser"
            class="btn bg-red-800 cursor-pointer"
            v-if="user"
          >LogOut</a></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <transition name="fade">
      <div class="auth_popup" v-if="showAuthPopup">
        <div class="overlay" @click="showAuthPopup = false"></div>
        <form @submit.prevent="loginUser">
          <p>Вход</p>
          <input type="email" placeholder="Email" v-model="authEmail" >
          <input type="password" placeholder="Пароль" v-model="authPassword" minlength="6" >
          <button type="submit">Войти</button>
          <a @click="showRegistrationPopup = true, showAuthPopup = false">регистрация</a>
        </form>
      </div>
    </transition>
    <transition name="fade">
      <div class="registration_popup" v-if="showRegistrationPopup">
        <div class="overlay" @click="showRegistrationPopup = false"></div>
        <form @submit.prevent="registerNewUser">
          <p>Регистрация</p>
          <input type="text" placeholder="Ваше имя" v-model="registerName" required>
          <input type="email" placeholder="Email" v-model="registerEmail" required>
          <input type="password" placeholder="Пароль" v-model="registerPassword" minlength="6" required>
          <button type="submit">Зарегистрироваться</button>
          <a @click="showRegistrationPopup = false, showAuthPopup = true">войти</a>
        </form>
      </div>
    </transition>
  </div>
</template>

<script setup>
const showAuthPopup = ref(false);
const showRegistrationPopup = ref(false);
const authEmail = ref('');
const authPassword = ref('');
const registerName = ref('');
const registerEmail = ref('');
const registerPassword = ref('');
let user = ref(useDirectusUser().value);

const { login, logout, createUser } = useDirectusAuth();

// const registerNewUser = () => {
//     fetch(`${useDirectusUrl()}users`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         first_name: registerName.value,
//         email: registerEmail.value,
//         password: registerPassword.value,
//         role: '74b435d0-22ec-452e-af8d-e59672879137',
//       })
//     }).catch((err) => {
//       console.log(err);
//     }).then((res) => {
//       console.log(res);
//     })
//     showRegistrationPopup.value = false;
// };

const registerNewUser = async () => {
  try {
    await createUser({
        first_name: registerName.value,
        email: registerEmail.value,
        password: registerPassword.value,
        role: '74b435d0-22ec-452e-af8d-e59672879137',
      });
  } catch (e) {
    console.log(e)
  }
};

const loginUser = async () => {
  try {
    await login({
      email: authEmail.value,
      password: authPassword.value,
    })
    window.location.reload();
  } catch (e) {
    console.log(e)
  }
};

const logoutUser = async () => {
  try {
    await logout();
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};

// const loginUser = async () => {
//   fetch(`${useDirectusUrl()}auth/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email: 'lol@mail.com',
//       password: '123456',
//       // email: authEmail.value,
//       // password: authPassword.value,
//       mode: 'cookie'
//     }),
//     credentials: 'include'
//   }).catch((err) => {
//     console.log(err);
//   }).then((res) => {
//     console.log(res);
//     showAuthPopup.value = false;
//   })
// };

</script>
  
<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}

.registration_popup,
.auth_popup {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);

  .overlay {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  form {
    width: 100%;
    max-width: 447px;
    padding: 0 10px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 22;
    background-color: white;
    position: relative;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);

    p {
      font-family: sans-serif;
      font-weight: 700;
      font-size: 20px;
      text-transform: capitalize;
      color: #222222;
      margin: 42px 0 34px;
    }

    input {
      width: 100%;
      max-width: 315px;
      height: 41px;
      padding-left: 8px;
      margin-bottom: 29px;
    }

    button {
      width: 192px;
      height: 40px;
      background: #F5ED2A;
      margin: 4px 0 29px;
      border: none;
      font-family: sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #222222;
      cursor: pointer;
    }

    a {
      cursor: pointer;
      font-family: sans-serif;
      font-weight: 500;
      font-size: 15px;
      text-transform: capitalize;
      color: rgba(34, 34, 34, 0.58);
      margin-bottom: 42px;
    }

    img {
      position: absolute;
      top: 10%;
      right: 10%;
      cursor: pointer;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
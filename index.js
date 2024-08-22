window.addEventListener('load', () => {
    const { createApp } = Vue;
    createApp({
      data() {
        return {
          mensaje: 'Hola init!'
        };
      }
    }).mount('#app');
  });
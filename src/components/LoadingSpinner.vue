<template>
  <div v-if="!isLoaded" class="loader-wrapper">
    <div class="loader-content">
      <div class="dot-loader">
        <span
          v-for="n in 5"
          :key="n"
          class="dot"
          :style="{ animationDelay: `${n * 0.3}s` }"
        ></span>
      </div>
      <div class="loading-text">{{ progress }}%</div>
      <div class="loading-tip">Cargando interfaz</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingDots',
  data() {
    return {
      progress: 1,
      isLoaded: false,
    };
  },
  mounted() {
    this.startProgress();
  },
  methods: {
    startProgress() {
      const interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            this.isLoaded = true;
          }, 300);
        }
      }, 40);
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-15px);
    opacity: 1;
  }
}

@keyframes backgroundMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, #12071e, #2c0a3d, #12071e);
  background-size: 600% 600%;
  animation: backgroundMove 10s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

.loader-content {
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
}

.dot-loader {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 25px;
}

.dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #9c79e6;
  animation: bounce 1.2s infinite ease-in-out;
  box-shadow: 0 0 10px #9c79e6aa;
}

.loading-text {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.loading-tip {
  margin-top: 8px;
  color: #c0aeea;
  font-size: 1rem;
  opacity: 0.8;
  animation: fadeInUp 1.5s ease-in-out;
}
</style>

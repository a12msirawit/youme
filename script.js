/* --- General Styles --- */
body {
  font-family: 'Arial', sans-serif;
  background-color: #fff0f5;
  text-align: center;
  margin: 0;
  height: 100vh;
  overflow: hidden;
}

/* --- Container --- */
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* --- Heart (initial state) --- */
.heart {
  width: 150px;
  height: 150px;
  background-color: #ff3366;
  position: relative;
  transform: rotate(-45deg);
  animation: heartbeat 1.5s infinite;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: #ff3366;
  border-radius: 50%;
}

.heart::before {
  left: 75px;
  top: 0;
}

.heart::after {
  top: 75px;
  left: 0;
}

/* --- Animation of Heart (Heartbeat) --- */
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(1.1) rotate(-45deg);
  }
}

/* --- Rose (initially hidden) --- */
.rose {
  width: 0;
  height: 0;
  background-image: url('https://cdn.pixabay.com/photo/2017/08/30/06/44/rose-2691886_960_720.png');
  background-size: cover;
  background-position: center;
  position: absolute;
  display: none;
  transition: all 0.5s ease;
}

/* --- Heart particles (effects when clicked) --- */
.heart-particle {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ff3366;
  border-radius: 50%;
  animation: particleAnimation 1s ease-out forwards;
}

@keyframes particleAnimation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

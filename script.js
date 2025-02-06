/* --- General Styles --- */
body {
  font-family: 'Arial', sans-serif;
  background-color: #fff0f5;
  color: white;
  text-align: center;
  padding: 50px;
  margin: 0;
  overflow: hidden;
}

/* --- Hero Section --- */
.hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(45deg, #ff7eb9, #ff65a3, #ff4666);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* --- Title --- */
.title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-transform: uppercase;
  text-shadow: 3px 3px 10px rgba(255, 255, 255, 0.8);
}

/* --- Button Styling --- */
.surprise-btn {
  padding: 20px 40px;
  font-size: 1.5rem;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.surprise-btn:hover {
  background-color: #f50057;
  transform: scale(1.1);
}

/* --- Heart Effect --- */
.heart-effect {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: rgba(255, 20, 147, 0.5);
  animation: heartAnimation 4s infinite ease;
}

@keyframes heartAnimation {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

/* --- Pulse Effect on Button --- */
.surprise-btn:active {
  transform: scale(0.9);
}

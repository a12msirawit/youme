/* --- General Styles --- */
body {
  font-family: 'Arial', sans-serif;
  background-color: #ffebf2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  position: relative;
}

.envelope {
  width: 300px;
  height: 200px;
  background-color: #ff3366;
  position: relative;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease;
  z-index: 1;
}

/* Envelope Flap */
.envelope-flap {
  width: 100%;
  height: 70px;
  background-color: #ff5a8f;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px 15px 0 0;
  transform-origin: top center;
  transition: transform 0.5s ease;
}

/* Envelope Body */
.envelope-body {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: scale(0);
  transition: transform 0.5s ease;
}

/* Message Styles */
.message {
  padding: 30px;
  text-align: center;
  font-size: 1.5rem;
  color: #ff3366;
  opacity: 0;
  transform: translateY(50px);
  transition: transform 0.6s ease, opacity 0.6s ease;
}

/* --- Particle Effects --- */
@keyframes glitter {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.5); }
}

.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 105, 180, 0.8);
  border-radius: 50%;
  animation: glitter 1.5s ease-out infinite;
}

/* --- Effects on Click --- */
.envelope.opened .envelope-flap {
  transform: rotateX(180deg);
}

.envelope.opened .envelope-body {
  transform: scale(1);
}

.envelope.opened .message {
  opacity: 1;
  transform: translateY(0);
}

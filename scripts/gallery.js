// Predefined notes for each photo
const photoNotes = [
    "Mahlek w mahla zinek.. ❤️",
    "You are my forever and always. Every moment with you is a dream come true. 💫❤️",
    "You make every second feel like a lifetime of happiness and joy. ⏳💖🎉",
    "Our love is my greatest treasure, and I’m the luckiest to share it with you. 💎💑✨",
    "Together, we create magic—one smile, one touch, one memory at a time. ✨😊💑",
    "The best part of my day is the moment I get to spend with you. 🕒💖💫",
    "My heart belongs to you, and every moment with you makes it beat faster. 💓💖🔥",
    "With you by my side, there is nothing I can't face, nothing I can't conquer. 💪🏼❤️🌟",
    "You are the reason behind my smile, the dream that makes my world shine brighter. 😊💫💖",
    "No matter where life takes us, I’ll always choose you, over and over again.",
    "You are not just my love; you are my best friend, my companion, my everything.",
    "To my queen, who rules my heart ❤️👑",
    "You fill my life with laughter, my heart with love, and my soul with happiness. 😂💖😇",
    "Every day I fall deeper in love with you, and it’s the best feeling in the world. 🌎❤️😌",
    "In your arms, I’ve found my home, my peace, and my forever. You are the love of my life, and with you, every moment feels like a beautiful dream come true. 💖🏡✨💑",
    "Your smile lights up my world ✨",
    // ...add 13 more notes
  ];
  
  // Load gallery images
  document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-grid');
    const photoViewer = document.getElementById('photo-viewer');
    const fullscreenPhoto = document.getElementById('fullscreen-photo');
    const loveNote = document.getElementById('love-note');
    const closeBtn = document.querySelector('.close-btn');
  
    // Load 15 photos
    for (let i = 1; i <= 15; i++) {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'photo-item';
      imgContainer.innerHTML = `
        <img src="images/photo${i}.jpg" alt="Memory ${i}" class="gallery-img" data-id="${i}">
      `;
      gallery.appendChild(imgContainer);
    }
  
    // Open photo in fullscreen
    document.querySelectorAll('.gallery-img').forEach(img => {
      img.addEventListener('click', () => {
        fullscreenPhoto.src = img.src;
        loveNote.textContent = photoNotes[img.dataset.id - 1]; // Get corresponding note
        photoViewer.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    });
  
    // Close fullscreen viewer
    closeBtn.addEventListener('click', () => {
      photoViewer.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  
    
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('background-music');
    let isPlaying = false;
    
    // Autoplay (muted) - Required for mobile browsers
    bgMusic.muted = true;
    bgMusic.play()
      .then(() => {
        bgMusic.pause(); // Pause immediately after autoplay starts
        bgMusic.currentTime = 0; // Reset to beginning
      })
      .catch(err => console.log("Autoplay prevented:", err));
    
    // Toggle button
    musicToggle.addEventListener('click', () => {
      if (isPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔊 Play Music';
      } else {
        bgMusic.muted = false;
        bgMusic.play();
        musicToggle.textContent = '🔇 Pause Music';
      }
      isPlaying = !isPlaying;
    });
  });
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB3k5sFmPSxzPdRNRweG_-GRFnEawSYySQ",
  authDomain: "kifek-kifna.firebaseapp.com",
  projectId: "kifek-kifna",
  storageBucket: "kifek-kifna.firebasestorage.app",
  messagingSenderId: "1053021314855",
  appId: "1:1053021314855:web:ac007d5d1a17cf866f1302"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message:', payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'icon.png'
  });
});

// عامل الخلفية: يستقبل الإشعارات والتطبيق مقفل
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js',
  'config.js'
);

firebase.initializeApp(FIREBASE_CONFIG);
firebase.messaging();   // يعرض الإشعار تلقائياً، والضغط عليه يفتح الصفحة

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

// ===== عدّل هذا الملف فقط =====

// 1) رابط تطبيق الويب من Apps Script (ينتهي بـ /exec)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwk0AtQBz2ADK59heXLFnAvoBXED58KjZK0pLXto-4Dm1ysWW6CVVGQX-Qyk-FOoWM_OA/exec';

// 2) من Firebase: إعدادات المشروع ← تطبيقاتك ← تطبيق الويب ← firebaseConfig
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyA5TxAIdxkiEWpXS0Oh6E32jcnIoHtHquU',
  authDomain: 'mubasheer-dc39b.firebaseapp.com',
  projectId: 'mubasheer-dc39b',
  storageBucket: 'mubasheer-dc39b.firebasestorage.app',
  messagingSenderId: '452448746876',
  appId: '1:452448746876:web:cc0b6df06bf85936d2f8f9'
};

// 3) من Firebase: إعدادات المشروع ← Cloud Messaging ← Web Push certificates ← Key pair
const VAPID_KEY = 'BKCByLVJXnj5jWkugsct6PSdg7obTyqkNWJrxLpvZmuYCbF86KZvjA5lqNVWbOurndDgr7ZOBXdJUcXVOxfqNaA';

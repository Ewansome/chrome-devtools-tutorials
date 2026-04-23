// In a real app, third-party scripts run on separate origins:
// https://analytics.example.com/tracker.js — 200ms
// https://ads.example.com/loader.js — 350ms
// Your code: loadDashboard() — 50ms
// Total: 600ms, but only 50ms is yours!

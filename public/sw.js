self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Listen for messages from the app
self.addEventListener('message', (event) => {
  if (event.data.type === 'SCHEDULE_REMINDER') {
    const { time, habitCount, completedCount } = event.data;
    scheduleReminder(time, habitCount, completedCount);
  }
  if (event.data.type === 'CANCEL_REMINDER') {
    if (self.reminderTimeout) clearTimeout(self.reminderTimeout);
  }
});

function scheduleReminder(time, habitCount, completedCount) {
  if (self.reminderTimeout) clearTimeout(self.reminderTimeout);

  const now = new Date();
  const [hours, minutes] = time.split(':').map(Number);
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);

  // If time has already passed today, schedule for tomorrow
  if (target <= now) target.setDate(target.getDate() + 1);

  const delay = target.getTime() - now.getTime();

  self.reminderTimeout = setTimeout(() => {
    self.registration.showNotification('Pulse — Daily Reminder 🔥', {
      body: habitCount === 0
        ? 'Time to check in on your habits!'
        : `${completedCount}/${habitCount} habits done today. Keep going!`,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      tag: 'pulse-daily-reminder',
      renotify: true,
    });
    // Reschedule for tomorrow
    scheduleReminder(time, habitCount, completedCount);
  }, delay);
}

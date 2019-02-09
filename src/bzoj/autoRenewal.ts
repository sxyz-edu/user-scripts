/**
 * Keep your session
 *
 * Just need to visit homepage every 10 minutes
 */

setInterval(() => {
  fetch("/JudgeOnline/", {
    credentials: "same-origin",
  });
}, 1000 * 60 * 10);

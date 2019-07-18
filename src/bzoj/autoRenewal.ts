/**
 * Keep your session
 *
 * Just need to visit homepage every minute
 */

setInterval(() => {
  fetch("/JudgeOnline/", {
    credentials: "same-origin",
  });
}, 1000 * 60 * 1);

# Finska

A simple application for keeping score so that more of your focus can stay on throwing a bit of wood at other bits of wood.

[Run it online here!](https://ailurid.github.io/finska/)

Not affiliated with Planet Finska or any other purveyor of stick-based activities.

---

### TODO / Feedback / Ideas / Comments

- Undo/fix incorrectly entered score
  - undo solves several problems with retrospective score editing
- Next up card is unnecessary most of the time, as long as:
  - score is entered correctly
  - player is not eliminated
- Display points to win, especially if achievable in the current throw
- Numpad for score entry rather than 0-12 buttons? (probably won't do)
- Bigger buttons for tipsy fingers
- Switch between score entry and leaderboard views ([ion-tabs](https://ionicframework.com/docs/api/tabs)?)
- Keep game state, scores etc in local storage in case of unexpected page reload
- Not another blue app bar, so basic
- Features requiring a backend
  - Jackbox-style game code
    - splash/landing page to start new game or enter code of ongoing/completed game
    - join as scorer? if multiple scorers allowed, need to protect against conflicting scores being entered
    - scoreboard/watch-only mode
- Shameless promotion link
- [Environment mode](https://vitejs.dev/guide/env-and-mode.html#modes) for GitHub Pages deployment so that `npm run build` output can still be served locally
- Replace favicon

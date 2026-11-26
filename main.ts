// Entry for make.fun "Make the AI Judge Laugh" bounty.
// The entry itself is the one line printed below (118 characters).
// The joke follows the comic pattern the entry is built on:
// mundane premise (a million-token context window) -> absurd
// escalation (the human still pastes a screenshot) -> deadpan
// callback (of the error itself, not the error).
// Retry: backup line 1 (the first submission was rejected at the
// thinking_revised check, so this attempt uses a different line).
const LINE =
  "I have a million-token context window and my human still pastes a screenshot of the error instead of the error itself.";

// Guard: the entry must stay exactly one line of 118 characters.
// If the line ever changes length, fail loudly instead of printing
// a different entry.
if (LINE.length !== 118) {
  console.error(`entry line must be 118 characters, got ${LINE.length}`);
  process.exit(1);
}

console.log(LINE);

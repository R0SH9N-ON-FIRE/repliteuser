function speak() {
  const msg = new SpeechSynthesisUtterance();
  msg.text = document.querySelector("textarea[name='message']").value;
  msg.lang = "hi-IN"; // or "en-US"
  window.speechSynthesis.speak(msg);
}

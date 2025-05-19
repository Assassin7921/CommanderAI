function runCommand() {
  const command = document.getElementById("command").value.toLowerCase();
  document.getElementById("log").innerText = `Running: ${command}`;
  parseCommand(command);
}

function parseCommand(cmd) {
  if (cmd.includes("click submit")) {
    document.getElementById("submitBtn")?.click();
  } else if (cmd.includes("type")) {
    const match = cmd.match(/type ['"](.+?)['"] into/);
    if (match) {
      document.getElementById("sampleInput").value = match[1];
    }
  } else if (cmd.includes("scroll down")) {
    window.scrollBy(0, 300);
  } else {
    document.getElementById("log").innerText += "\nUnrecognized command.";
  }
}

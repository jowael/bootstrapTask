const copyFunButton = document.getElementById("copyfun");
const copyTextarea = document.getElementById("floatingTextarea2");

copyToClipboard = async () => {
  try {
    if (!copyTextarea.value.trim()) {
      alert("There is no text for coping!");
      return;
    }
    await navigator.clipboard.writeText(copyTextarea.value);
    alert(`Text: (${copyTextarea.value}) was copied`);
  } catch (err) {
    alert(`Text: (${copyTextarea.value}) was not copied`);
    console.error("Failed to copy!", err);
  }
};

copyFunButton.addEventListener("click", copyToClipboard);

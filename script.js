function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
<script>
  const heading = document.getElementById("name-heading");
  const panel = document.getElementById("intro-panel");

  heading.addEventListener("click", () => {
    panel.classList.toggle("show");
  });
</script>

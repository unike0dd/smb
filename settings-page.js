(() => {
  if (typeof definitions !== "undefined" && definitions.settings) {
    definitions.settings[1] = "Manage profiles, staff access, delegated workspaces, activity and payroll authorization.";
    definitions.settings[2] = "";
  }
  const primary = document.getElementById("primary");
  const updatePrimary = () => {
    const settingsActive = document.querySelector('[data-screen="settings"].active');
    if (!primary) return;
    primary.hidden = Boolean(settingsActive);
    if (settingsActive) {
      primary.textContent = "";
      primary.removeAttribute("data-action");
    }
  };
  document.getElementById("sideNav")?.addEventListener("click", () => requestAnimationFrame(updatePrimary));
  updatePrimary();
})();

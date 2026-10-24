// Etkinlik başlıklarını filtreleyen arama özelliği
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#eventSearch");
  const clearButton = document.querySelector("#clearSearch");
  const eventCards = Array.from(document.querySelectorAll(".event-item"));
  const eventCount = document.querySelector("#eventCount");
  const noResults = document.querySelector("#noResults");

  // Bu script yalnızca etkinlikler sayfasında gerekli elemanlar varsa çalışır.
  if (!searchInput || !clearButton || !eventCount || !noResults || eventCards.length === 0) {
    return;
  }

  function filterEvents() {
    const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
    let visibleCount = 0;

    eventCards.forEach((card) => {
      const title = (card.dataset.title || "").toLocaleLowerCase("tr-TR");
      const matches = title.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    eventCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
    noResults.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener("input", filterEvents);

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    filterEvents();
    searchInput.focus();
  });

  filterEvents();
});

(() => {
        // Simple mobile-menu placeholder
        document.querySelector(".mobile-menu").addEventListener("click", () => {
            alert("Add your mobile navigation here.");
        });

        // Prevent demo newsletter submission
        document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thanks for joining the list!");
        });
})();

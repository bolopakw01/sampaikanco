    document.addEventListener("DOMContentLoaded", function () {
        initWorkFilter();
        setupMobileMenu();
        setupScrollHeader();
    });
    
    function initWorkFilter() {
        const filterLinks = document.querySelectorAll(".work-menu a[data-filter], .scroll-header-menu a[data-filter]");
        const cards = document.querySelectorAll(".card");
    
        // Set default active state
        if (filterLinks.length > 0) {
            document.querySelector('.work-menu a[data-filter="all"]').classList.add("active");
            document.querySelector('.scroll-header-menu a[data-filter="all"]').classList.add("active");
        }
    
        filterLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const filter = this.getAttribute("data-filter");
                
                // Update active state in both menus
                document.querySelectorAll('[data-filter]').forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("data-filter") === filter) {
                        item.classList.add("active");
                    }
                });
                
                filterCards(filter);
            });
        });
    
        function filterCards(filter) {
            cards.forEach((card) => {
                // Hide all cards with transition
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
                card.style.pointerEvents = "none";
                
                setTimeout(() => {
                    const shouldShow = filter === "all" || card.getAttribute("data-category") === filter;
                    
                    if (shouldShow) {
                        card.style.display = "block";
                        // Force reflow to restart animation
                        void card.offsetWidth;
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                        card.style.pointerEvents = "auto";
                    } else {
                        card.style.display = "none";
                    }
                }, 50);
            });
        }
    }
    
    function setupMobileMenu() {
        const hamburger = document.getElementById("hamburger");
        const scrollHamburger = document.getElementById("scroll-hamburger");
        const navLinks = document.getElementById("nav-links");
        const scrollNavLinks = document.getElementById("scroll-nav-links");
    
        if (hamburger && navLinks) {
            hamburger.addEventListener("click", function (e) {
                e.preventDefault();
                navLinks.classList.toggle("active");
                this.setAttribute("aria-expanded", navLinks.classList.contains("active"));
            });
        }
    
        if (scrollHamburger && scrollNavLinks) {
            scrollHamburger.addEventListener("click", function (e) {
                e.preventDefault();
                scrollNavLinks.classList.toggle("active");
                this.setAttribute(
                    "aria-expanded",
                    scrollNavLinks.classList.contains("active")
                );
            });
        }
    
        // Close menus when clicking outside
        document.addEventListener("click", function (e) {
            if (
                navLinks &&
                navLinks.classList.contains("active") &&
                !e.target.closest("#nav-links") &&
                !e.target.closest("#hamburger")
            ) {
                navLinks.classList.remove("active");
                if (hamburger) hamburger.setAttribute("aria-expanded", "false");
            }
    
            if (
                scrollNavLinks &&
                scrollNavLinks.classList.contains("active") &&
                !e.target.closest("#scroll-nav-links") &&
                !e.target.closest("#scroll-hamburger")
            ) {
                scrollNavLinks.classList.remove("active");
                if (scrollHamburger)
                    scrollHamburger.setAttribute("aria-expanded", "false");
            }
        });
    }
    
    function setupScrollHeader() {
        let lastScrollTop = 0;
        const scrollHeader = document.getElementById("scroll-header");
        const mainHeader = document.querySelector(".navbar");
    
        if (scrollHeader && mainHeader) {
            checkScrollPosition();
    
            window.addEventListener("scroll", function () {
                checkScrollPosition();
            });
        }
    
        function checkScrollPosition() {
            const currentScroll =
                window.pageYOffset || document.documentElement.scrollTop;
            const mainBottom = mainHeader.offsetTop + mainHeader.offsetHeight;
    
            if (currentScroll > mainBottom) {
                scrollHeader.style.display = "flex";
    
                if (currentScroll < lastScrollTop - 30) {
                    scrollHeader.style.transform = "translateY(-100%)";
                } else {
                    scrollHeader.style.transform = "translateY(0)";
                }
            } else {
                scrollHeader.style.transform = "translateY(-100%)";
                setTimeout(() => {
                    scrollHeader.style.display = "none";
                }, 300);
            }
    
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }
    }
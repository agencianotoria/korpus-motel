    // 2. Lógica do Menu Mobile
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden'; // Previne scroll no body
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            }
        }

        // Função para fechar ao clicar nos links
        function closeMenu() {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = 'auto';
        }

        mobileBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);

        // 3. Animação de Scroll (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach((section) => {
            observer.observe(section);
        });
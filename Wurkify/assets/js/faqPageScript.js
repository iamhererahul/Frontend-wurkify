document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');
    const faqItems = document.querySelectorAll('.faq-item');
    const categoryTitle = document.getElementById('category-title');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            
            // Update active category
            categoryItems.forEach(cat => cat.classList.remove('active'));
            item.classList.add('active');

            // Update category title
            categoryTitle.textContent = item.textContent;

            // Show/hide FAQ items
            faqItems.forEach(faq => {
                if (category === 'general' || faq.getAttribute('data-category') === category) {
                    faq.style.display = 'block';
                } else {
                    faq.style.display = 'none';
                }
            });
        });
    });

    // Optional: Add functionality to expand/collapse FAQ answers
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            answer.classList.toggle('show');
        });
    });

    // Add scroll event listener for navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
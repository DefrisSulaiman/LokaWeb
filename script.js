document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');
  
    faqs.forEach(faq => {
      const question = faq.querySelector('.question');
      const answer = faq.querySelector('.answer');
      const caret = question.querySelector('img');
  
      question.addEventListener('click', () => {
        // Tutup semua FAQ lain
        faqs.forEach(otherFaq => {
          if (otherFaq !== faq) {
            const otherAnswer = otherFaq.querySelector('.answer');
            const otherCaret = otherFaq.querySelector('.question img');
            otherAnswer.classList.remove('answer-visible');
            otherCaret.classList.remove('caret-rotate');
          }
        });
  
        // Toggle FAQ yang diklik
        const isVisible = answer.classList.toggle('answer-visible');
        requestAnimationFrame(() => {
          if (isVisible) {
            caret.classList.add('caret-rotate');
          } else {
            caret.classList.remove('caret-rotate');
          }
        });
      });
    });
  });

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

document.getElementById('checkbox').addEventListener('change', function() {
  const nav = document.querySelector('.nav');
  if (this.checked) {
      nav.style.display = 'block';
  } else {
      nav.style.display = 'none';
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("year").textContent = new Date().getFullYear();


  
document.addEventListener("DOMContentLoaded", function () {
  const listContainer = document.getElementById("list-container");
  document.body.classList.add("loaded");

  const whoAmILink = document.querySelector('.link a[href="#aboutme"]');
  whoAmILink.addEventListener('click', (event) => {
    event.preventDefault(); 
    const sectionTwo = document.getElementById('aboutme');
    sectionTwo.scrollIntoView({ behavior: 'smooth' }); 
  });

  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === aboutme) {
          if (entry.isIntersecting) {
            whoAmIText.classList.remove('hidden');
            whoAmIText.classList.add('fade-in');
          } else {
            whoAmIText.classList.remove('fade-in');
            whoAmIText.classList.add('fade-out');
          }
        }
      });
    });
  
    observer.observe(sectionTwo);
  });
  


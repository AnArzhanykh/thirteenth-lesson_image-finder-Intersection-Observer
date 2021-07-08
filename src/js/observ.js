
export default function observ(render) {
    const options = {
    rootMargin: '0px',
    threshold: 1.0
  }
  
  function callback(entries, observer) { 
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('entry', entry);
          render()
      }
    });
  };
  const elementToObserve = document.querySelector('.list-img:last-child');
  
  
  const observer = new IntersectionObserver(callback, options);
  observer.observe(elementToObserve);
  
  
}
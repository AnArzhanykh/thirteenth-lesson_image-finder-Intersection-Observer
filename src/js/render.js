import Service from './apiService';
import listImages from '../template/list-images';
import ref from './ref';
import alert from './alert';
// import isBtnVisible from './handlers'


function render (curentValue) { 
    Service.takeImag(curentValue).then(renderListCards);
}

function renderListCards(arr){
    // Service.length(arr)
    // isBtnVisible(arr);
    const markup = listImages(arr);
    ref.galleryRef.insertAdjacentHTML('beforeend', markup);
    if(arr.length >= 12){
      observ()
    } 
    if(arr.length >= 1 && arr.length < 12) {
      alert.imageFinished()
    }
    if(arr.length === 0){
      alert.imageNotFind()
    }

}

function observ() {
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




export default render
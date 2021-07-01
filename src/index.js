import './sass/main.scss';
var debounce = require('lodash.debounce');
import render from './js/render';
import Service from './js/apiService';
import ref from './js/ref';
import alert from './js/alert';
import openModalImage from './js/openModalImage';


const basicLightbox = require('basiclightbox')

const debounceSearching = debounce(searching, 1000);
const debounceHandleButtonClick = debounce(scroll, 200);



ref.inputSearchRef.addEventListener('input', debounceSearching);


ref.galleryRef.addEventListener('click', openModalImage);



async function searching(e){
    ref.galleryRef.innerHTML = '';
    Service.resetPage();

    if(!e.target.value){
      alert.emptyString();
      return
    }

    Service.query = e.target.value;

    render(Service.query);
    ref.searchForm.reset()
    scroll()
}


function scroll() {
    const elem = ref.galleryRef.lastElementChild;
    if(!elem){
      return
    }
    elem.scrollIntoView({block: "center", behavior: "smooth"});
}







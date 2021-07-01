// const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox'

export default function openModalImage(e){
  let target = e.target; 
    if (target.nodeName === 'IMG') {
      const instance = basicLightbox.create('<img src="' + target.srcset + '" width="1600" height="1200">')
      instance.show()
    }
}
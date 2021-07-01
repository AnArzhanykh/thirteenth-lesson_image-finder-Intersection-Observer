import ref from './ref';
import alert from './alert';

export default function visibleBtn(arr){
    if(arr.length < 12){
        alert.imageFinished();
        ref.BtnRef.classList.add('hidden');
    };
    if(arr.length >= 12){
        ref.BtnRef.classList.remove('hidden');
    }; 
};


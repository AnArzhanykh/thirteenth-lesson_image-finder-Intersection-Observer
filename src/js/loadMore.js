import ref from './ref';
import Service from './apiService';
import alert from './alert';

export default function loadMore(){
    if(Service.length < 12){
        alert.imageFinished();
        console.log(1);
        ref.BtnRef.classList.add('hidden');

    };
    if(Service.length >= 12){
        ref.BtnRef.classList.remove('hidden');
    }; 
};

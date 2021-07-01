const token = '21709969-2aaf655592c1caf292dc08cd8';


export default {
    per_page : 12,
    page : 1,
    searchQuery : '',
    arrLength: null,
    takeImag(){
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.per_page}&key=${token}`;
        return fetch(url).then(response => response.json()).then(json=>{
            this.incrimentPage(); 
            return json.hits;
            }).catch(e=>console.log('this is error from fatch ', e.message));
    },
    resetPage(){
        this.page = 1;
    },
    incrimentPage(){
        this.page += 1;
    },
    get query (){
        return this.searchQuery
    },
    set query(value){
        this.searchQuery = value;
    },
    get length(){
        return this.arrLength
    },
    set length(arr){
        this.arrLength = arr.length;
    },

} 







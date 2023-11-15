class Board {
     id;
     name;
     url;


     constructor(id, name, url) {
         this.id = id;
         this.name = name;
         this.url = url;
     }

     getId(){
        return id;
     }
     getName(){
        return name;
     }
     getUrl(){
        return url;
     }
     setId(id){
        this.id = id;
     }
     setName(name){
        this.name = name;
     }
     setUrl(url){
        this.url = url;
     }
}

module.exports =  Board;
import axios from "axios";


//**Changing it back to original api code */
const api = {
 getNovel : (query) => {
   
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    
    },
    deleteNovel: (id) => {
        return axios.delete("./api/novels" + id)
    },
    saveNovel:(novelInfo) =>{
    return axios.post("/api/novels/" , novelInfo);
    },
    savedNovels: () => {
      return axios.get("/api/novels");
    }
  
}

export default api;

console.log(api);

//eslint-disable-next-line
//export default {
    //Looks for a novel
  //googleNovels: (query) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`),
 
  
//Saves the book to the mongodb
//SaveNovel: (novelInfo) => axios.post(`/${novelInfo.id}`),

//Gets the books you have saved from the DB
//getNovels: () => axios.get("../api/novel/").//then(result => result.data).catch(error => { throw error}),

//Gets novels with the id given 
//getNovel: (id) => axios.get(`/api/novel${id}`),


//Deletes a book with the corresponding id from the database
//deleteNovel: (id) => axios.delete(`/api/novel$//{id}`)
    
//};

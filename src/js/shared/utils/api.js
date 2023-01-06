import axios from "axios";
//eslint-disable-next-line
const API = {
    //Looks for a novel
    googleNovels: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
},
//Saves the book to the mongodb
SaveNovel: function(novelInfo){
return axios.post(`/${novelInfo.id}`);
},
//Gets the books you have saved from the DB
getNovels: async function() {
    try {
        const result = await axios.get("/api/novels");
        return result.data;
    } catch (error) {
        throw error;
    }
},
//Gets novels with the id given 
getNovel: function(id){
    return axios.get("/api/novels" + id);
},
//Deletes a book with the corresponding id from the database
deleteNovel: function (id){
    return axios.delete("/api/novels" + id);
}
    
};
export default API;
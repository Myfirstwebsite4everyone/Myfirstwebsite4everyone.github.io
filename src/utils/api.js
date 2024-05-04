import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMwYjFiYWZmNTJmMzQ0NTc5Y2ZlNDU5OTRlYTA3YSIsInN1YiI6IjY2MTI0OTNhMzU2YTcxMDE0YTIzNTAyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R72RW87FiI1iqI_p9nirjhZGa9iG0mDxSYrwY2u3s9Y"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}

export const  fethDataFromApi = async(url,params)=>{
    try {
        const {data} = await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data;
        
    } catch (error) {
        console.log(error);
        return error; 
    }

}
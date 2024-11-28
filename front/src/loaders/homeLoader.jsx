import axios from "axios";

const HomeLoader = async () => {
    try{
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
        return res.data.results;
    }
    catch(err){
        console.error(err)
    }
}

export default HomeLoader;
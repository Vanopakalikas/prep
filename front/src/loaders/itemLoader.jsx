import axios from "axios";

const ItemLoader = async ({params}) => {
    const { name } = params
    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return res.data
    }
    catch(err){
        console.error(err)
    }
}

export default ItemLoader;
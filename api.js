export default {
    findAllCharacters: async () => {
        let result = await axios.get("https://rickandmortyapi.com/api/character")
        return result.data.results
    }
}
import axios from "axios"

export const getInitAlbumInfo = async (name) => {
    const result = await axios.get(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=200`)
    return result.data
}
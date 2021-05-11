export const getApiResource = async (url) => {
    try {
        const res = await fetch(url, {method: 'GET'})
        if (!res.ok) {
            console.error('Could not Fetch:', res.status)
            return false
        }
        return await res.json()
    } catch (error) {
        console.error('Could not Fetch:', error.message)
        return false
    }
}
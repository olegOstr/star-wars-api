export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            console.error('Ssuchy Fetch:', res.status)
            return false
        }
        return await res.json()
    } catch (error) {
        console.error('Ssuchy Fetch:', error.message)
        return false
    }
}
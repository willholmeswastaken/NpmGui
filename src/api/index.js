const API_BASE_ADDRESS = 'https://api.npms.io/v2/search'

export const getModule = moduleName => {
    const uri = API_BASE_ADDRESS + `?q=${moduleName}&size=1`
    return fetch(uri, {
        method: 'GET'
    });
}

export async function fetchAsync(func, params) {
    if(!Array.isArray(params))
        throw new Error("Argument 'params' is not an array, please convert and try again!")
        
    const response = await func(...params);
    if (response.ok) {
        return await response.json();
    }
    throw new Error("Unexpected error!!!");
 }
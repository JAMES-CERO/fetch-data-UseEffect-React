const API_URL = 'https://itunes.apple.com/search?term=';

const fetchSearch = async (searchTerm) => {
    const response = await fetch(API_URL + searchTerm)
    const resData = await response.json()
    return resData.results
}
// Being that our fetchSearch function returns a promise,
// We want wrapPromise to take that promise as an argument.

const WrapPromise = (promise) => {
    let status = 'Pending'
    let result = ''
    let suspender = promise.then(responde => {
        status = 'success'
        result = responde
    }, err => {
        status = 'error'
        result = err
        // our suspender represents the resolution of the promise.
        // An ideal resolution should flag the status to "success"
    })
    return {

        read() {
            if (status === 'Pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            }
            return result
        }
    }
}

export const createResource = (searchTerm) => {
    return {
        result: WrapPromise(fetchSearch(searchTerm))
    }
}

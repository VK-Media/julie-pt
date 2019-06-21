import axios from 'axios'

const headers = {
    'Cockpit-Token': 'dc2fc0f70cc4095cdd8cd5cd1f062f'
}

const base = 'https://admin.julie-pt.dk/'

export const collections = axios.create({
    baseURL: base + 'api/collections/get/',
    headers
})

export const singletons = axios.create({
    baseURL: base + 'api/singletons/get/',
    headers
})

export const forms = axios.create({
    baseURL: base + 'api/forms/submit/',
    headers: {
        ...headers, 
        'Content-Type': 'application/json'
    }
})
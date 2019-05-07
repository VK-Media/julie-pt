import axios from 'axios'

const headers = {
    'Cockpit-Token': 'dc2fc0f70cc4095cdd8cd5cd1f062f'
}

export const collections = axios.create({
    baseURL: 'http://localhost/cockpit-master/api/collections/get/',
    headers
})

export const singletons = axios.create({
    baseURL: 'http://localhost/cockpit-master/api/singletons/get/',
    headers
})
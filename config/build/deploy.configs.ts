import { Stand } from "./types/buildOptions"

interface Enviroments {
    [Stand.DEV]: {
        api: string
    },
    [Stand.PROD]: {
        api: string
    }
}

export const enviroments: Enviroments = {
    dev: {
        api: 'https://ecrf.bioequivalencetrials.ru',
        // api: 'https://217.18.63.242',
    },
    prod:{
        api: 'https://ecrf.bioequivalencetrials.ru'
    }
}

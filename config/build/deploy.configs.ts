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
        api: 'https://dev.ecrf.bioequivalencetrials.ru/',
    },
    prod:{
        api: 'https://ecrf.bioequivalencetrials.ru'
    }
}

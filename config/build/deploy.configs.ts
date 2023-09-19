import { Stand } from "./types/buildOptions"

interface Enviroments {
    [Stand.DEV]: {
        api: string
    }
}

export const enviroments: Enviroments = {
    dev: {
        api: 'https://ecrf.bioequivalencetrials.ru'
    }
}

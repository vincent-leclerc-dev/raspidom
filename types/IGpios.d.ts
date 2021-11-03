
export default interface IGpios {
    loadedGpios: {
        id: string
        label: string
        gpio: string
        bcm: string
    }[]
}
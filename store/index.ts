import { Context } from '@nuxt/types'
import Vuex from 'vuex'

import IGpios from '~/types/IGpios'
import { PromiseResolve, PromiseReject } from '~/types/Promise'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedGpios: []
        },
        mutations: {
            setGpios(state, gpios) {
                state.loadedGpios = gpios
            }
        },
        actions: {
            async nuxtServerInit(vuexContext, ctx: Context): Promise<void> {
                try {
                    const data = await new Promise(
                        (resolve: PromiseResolve<IGpios>, reject: PromiseReject): void => {
                            const error_1 = null
                            if (error_1)
                                reject(error_1)
                            else
                                resolve({
                                    loadedGpios: [{
                                        id: '1',
                                        label: 'GPIO 1',
                                        gpio: '1',
                                        bcm: '11'
                                    },
                                    {
                                        id: '2',
                                        label: 'GPIO 2',
                                        gpio: '2',
                                        bcm: '22'
                                    }]
                                })
                        })
                    vuexContext.commit('setGpios', data?.loadedGpios)
                } catch (e: any) {
                    return ctx.error(e)
                }
            },
            setGpios(vuexContext, gpios) {
                vuexContext.commit('setGpios', gpios);
            }
        },
        getters: {
            loadedGpios(state) {
                return state.loadedGpios
            }
        }
    })
}

export default createStore

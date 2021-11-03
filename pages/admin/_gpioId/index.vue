<template>
    <div>
        <h1>Update GPIO</h1>
        <admin-gpio-form :gpio="loadedGpios"/>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            loadedGpios: {
                id: '1',
                label: 'GPIO 1',
                gpio: 1,
                bcm: 11
            }
        }
    }
}
</script>

<style>

</style>
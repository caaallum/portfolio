<template>
    <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span class="block text-6xl font-bold mb-1">Hi I'm</span>
                <div class="text-6xl text-primary font-bold mb-3">Callum</div>
                <p class="mt-0 mb-4 text-700 line-height-3">A full stack web and app developer</p>
                
                <Button pButton pRipple label="About me" type="button" class="mr-3 p-button-raised"></Button>
                <Button pButton pRipple label="Journey" type="button" class="p-button-outlined"></Button>
            </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
            <img src="@/assets/images/hero.png" alt="Image" class="md:ml-auto block md:h-full" style="transform: translateX(-288px); ">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
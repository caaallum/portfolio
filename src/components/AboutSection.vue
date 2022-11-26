<template>
    <div class="flex align-items-center justify-content-center">
        <div class="md-2 mr-2">
            <div class="flex flex-column">
                <h1>About Me</h1>
                <h3>Hobbies & Interests</h3>
                <div class="md-2 mr-2 flex flex-wrap">
                    <Chip label="Mountain Biking" class="md-2 mr-2" />
                    <Chip label="Skateboarding" class="md-2 mr-2" />
                    <Chip label="Rock Climbing" class="md-2 mr-2" />
                    <Chip label="Clothes" class="md-2 mr-2" />
                    <Chip label="Tech" class="md-2 mr-2" />
                </div>
                <h3>Languages</h3>
                <div class="md-2 mr-2 flex flex-wrap">
                    <i class="md-2 mr-2 devicon-linux-plain" v-tooltip.bottom="'Linux'"></i>
                    <i class="md-2 mr-2 devicon-apple-plain" v-tooltip.bottom="'Apple'"></i>
                    <i class="md-2 mr-2 devicon-git-plain" v-tooltip.bottom="'Git'"></i>
                    <i class="md-2 mr-2 devicon-github-plain" v-tooltip.bottom="'Github'"></i>
                    <i class="md-2 mr-2 devicon-gitlab-plain" v-tooltip.bottom="'Gitlab'"></i>
                    <i class="md-2 mr-2 devicon-cplusplus-plain" v-tooltip.bottom="'C/C++'"></i>
                    <i class="md-2 mr-2 devicon-drupal-plain" v-tooltip.bottom="'Drupal'"></i>
                    <i class="md-2 mr-2 devicon-wordpress-plain" v-tooltip.bottom="'Wordpress'"></i>
                    <i class="md-2 mr-2 devicon-go-plain" v-tooltip.bottom="'Go'"></i>
                    <i class="md-2 mr-2 devicon-python-plain" v-tooltip.bottom="'Python'"></i>
                    <i class="md-2 mr-2 devicon-php-plain" v-tooltip.bottom="'PHP'"></i>
                    <i class="md-2 mr-2 devicon-javascript-plain" v-tooltip.bottom="'JavaScript'"></i>
                </div>
            </div>
        </div>
        <div class="md-2 mr-2">
            <Galleria :value="images" :showThumbnails="false" :showIndicators="true">
                <template #item="slotProps">
                    <Image :src="'about' + slotProps.item.index + '.png'" :alt="slotProps.item.alt" style="width: 100%" />
                </template>
            </Galleria>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    index: '0',
                    alt: 'surfing1',
                },
                {
                    index: '1',
                    alt: 'surfing2',
                },
                {
                    index: '2',
                    alt: 'rocks'
                },
                {
                    index: '3',
                    alt: 'mtb1'
                },
                {
                    index: '4',
                    alt: 'mtb1'
                }
            ]
        }
    }
}
</script>
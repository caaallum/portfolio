<template>
    <div class="flex flex-wrap align-items-center justify-content-center">
        <div class="md-2 mr-2">
            <div class="flex align-items-center flex-column">
                <h1>About Me</h1>
                <h3>Hobbies & Interests</h3>
                <div class="md-2 mr-2 flex align-items-center flex-wrap">
                    <Chip v-for="hobby in hobbies" class="md-2 mr-2" :label="hobby" />
                </div>
                <h3>Languages, Frameworks & Platforms</h3>
                <div class="md-2 mr-2 flex align-items-center flex-wrap">
                    <i v-for="language in languages" class="md-2 mr-2" :class="'devicon-' + language.icon + '-plain'" v-tooltip.bottom="language.tooltip"></i>
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
                { index: '0', alt: 'mtb1', },
                { index: '1', alt: 'surfing2', },
                { index: '2', alt: 'rocks' },
                { index: '3', alt: 'mtb2' },
                { index: '4', alt: 'surfing' }
            ],
            hobbies: [
                'Mountain Biking',
                'Skateboarding',
                'Rock Climbing',
                'Surfing',
                'Clothes',
                'Tech',
            ],
            languages: [
                { icon: 'linux', tooltip: 'Linux' },
                { icon: 'apple', tooltip: 'Apple iOS/MacOSX' },
                { icon: 'android', tooltip: 'Android' },
                { icon: 'git', tooltip: 'Git' },
                { icon: 'github', tooltip: 'Github' },
                { icon: 'gitlab', tooltip: 'Gitlab'},
                { icon: 'cplusplus', tooltip: 'C/C++' },
                { icon: 'drupal', tooltip: 'Drupal' },
                { icon: 'wordpress', tooltip: 'Wordpress' },
                { icon: 'go', tooltip: 'Go' },
                { icon: 'python', tooltip: 'Python' },
                { icon: 'php', tooltip: 'PHP' },
                { icon: 'javascript', tooltip: 'JavaScript' },
                { icon: 'sass', tooltip: 'Sass' },
                { icon: 'mysql', tooltip: 'MySQL' },
                { icon: 'mongodb', tooltip: 'MongoDB' },
            ],
        }
    }
}
</script>
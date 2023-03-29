<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps(['title', 'excerpt', 'image', 'author', 'date', 'href', 'type', 'language'])

// set hasImage to false if the prop image is empty
const hasImage = computed(() => {
  return props.image !== ''
})

// set hasAuthor to false if the prop author is empty
const hasAuthor = computed(() => {
  return props.author !== ''
})

const truncateText = (text: string, length: number) => {
  //set length to 255 if not specified
  if (length < 1) {
    length = 255
  }
  return _.truncate(text, { length })
}


</script>
<template>
  <article class='flex flex-col items-start'>
    <div v-if='hasImage' class='relative w-full'>
      <img :src='image' :alt='title'
           class='aspect-[16/9] w-full rounded-2xl bg-neutral-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]' />
      <div class='absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10' />
    </div>
    <div class='max-w-xl h-full'>
      <div class='mt-8 flex items-center gap-x-4 text-xs'>
        <!--      <time :datetime="date" class="text-neutral-500">{{ date }}</time>-->
        <span class='relative z-10 rounded-sm bg-sky-300 py-1.5 px-3 font-medium text-sky-900'>{{ type }}</span>
        <span class='relative z-10 rounded-sm bg-orange-200 py-1.5 px-3 font-medium text-orange-900'>{{ language
          }}</span>
      </div>
      <div class='group relative h-58 md:h-52'>
        <h3 class='mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600'>
          <a :href='href'>
            <span class='absolute inset-0' />
            {{ title }}
          </a>
        </h3>
        <p class='mt-5 text-sm leading-6 text-neutral-600 line-clamp-3 text-justify'>{{ excerpt }}</p>
      </div>
      <div class='relative mt-2 flex items-center gap-x-4'>
        <div class='text-sm leading-6'>
          <p class='font-semibold text-neutral-600'>
                  <span v-if='hasAuthor'>
                    <span class='absolute inset-0' />
                    {{ author }}
                  </span>
          </p>
        </div>
      </div>
      <div class='relative mt-2 flex items-center text-sm'>
        <a :href='href'>
          <span class='absolute inset-0 text-md font-semibold leading-6 text-neutral-900' />
          Learn more <span aria-hidden='true'>→</span>
        </a>
      </div>
    </div>
  </article>
</template>


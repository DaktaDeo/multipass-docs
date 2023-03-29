<script setup lang='ts'>
import ArticleCard from './ArticleCard.vue'
import { useData } from 'vitepress'

const data = useData()
const posts = data.site.value.themeConfig.blog

</script>

<template>
  <div class='bg-white py-24 sm:py-32'>
    <div class='mx-auto max-w-7xl px-6 lg:px-8'>
      <div class='mx-auto max-w-2xl text-center'>
        <h2 class='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>From the blog</h2>
        <p class='mt-2 text-lg leading-8 text-gray-600'>Learn how to grow your business with our expert advice.</p>
      </div>
      <div class='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        <ArticleCard
            v-for='(article, index) in posts'
            :key='index'
            :title='article.title'
            :excerpt='article.excerpt'
            :image='article.image'
            :author='article.author'
            :href='article.path'
            :type='article.type'
            :language='article.language'
            :date='article.updated' />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import ArticleCard from './ArticleCard.vue'
import { useData } from 'vitepress'

const data = useData()
const posts = data.site.value.themeConfig.blog

</script>

<template>

      <div class='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-12 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
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
</template>

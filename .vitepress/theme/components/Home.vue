<script setup lang='ts'>
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
import { load, data, base } from './sponsors'
import SponsorsGroup from './SponsorsGroup.vue'

onMounted(async () => {
  await load()
})
</script>

<template>
  <section class='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20'>
    <div class='mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8'>
      <div class='px-6 lg:px-0 lg:pt-4'>
        <div class='mx-auto max-w-2xl'>
          <div class='max-w-lg'>
            <h1 class='mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex'>
                <span class='fill-color inline-svg'>
                <svg class='logo multipass' version='1.1' xmlns='http://www.w3.org/2000/svg'
                     xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
                     viewBox='0 0 114 114' enable-background='new 0 0 114 114' xml:space='preserve' height='28'>
        <g>
            <path class='background' fill='#A11B29'
                  d='M113.64,28.78H8.87C3.99,28.78,0,32.77,0,37.64v39.33c0,4.88,3.99,8.86,8.87,8.86h94.56L113.64,28.78z' />
          <g class='multipass' fill='#FFFFFF'>
                <path d='M14.2,39.1c0.41-2.29,3.08-4.91,6.71-4.91c3.42,0,6.09,2.3,6.84,4.59l8.07,25.24h0.14l8.07-25.24
               c0.75-2.29,3.42-4.59,6.84-4.59c3.63,0,6.3,2.61,6.71,4.91l6.36,35.57c0.07,0.38,0.07,0.77,0.07,1.08c0,2.8-2.19,4.59-4.93,4.59
               c-3.49,0-4.86-1.47-5.34-4.46l-4.04-25.94h-0.14l-8.21,26.71c-0.48,1.53-1.78,3.7-5.48,3.7c-3.7,0-4.99-2.17-5.47-3.7L22.2,49.94
               h-0.14l-4.04,25.94c-0.48,3-1.85,4.46-5.34,4.46c-2.74,0-4.93-1.78-4.93-4.59c0-0.32,0-0.7,0.07-1.08L14.2,39.1z' />
            <path d='M68.73,39.55c0-3,1.92-4.97,5.34-4.97h12.11c10.06,0,17.52,6.12,17.52,15.23
               c0,9.31-7.73,15.11-17.11,15.11H79v10.45c0,3.19-2.19,4.97-5.13,4.97c-2.94,0-5.13-1.78-5.13-4.97V39.55z M79,56.51h6.98
               c4.31,0,7.05-2.93,7.05-6.76s-2.74-6.76-7.05-6.76H79V56.51z' />
            </g>
        </g>
    </svg>
                </span>
              <span class='pl-3'>Supercharge your admin 🎉</span></h1>
            <p class='mt-6 text-lg leading-8 text-gray-600 mx-2'>
              With Multipass you can organize your digital data, think Client-info, Products, Suppliers, .. in one
              single place.
            </p>
            <p class='mt-6 text-lg leading-8 text-gray-600 mx-2'>
              We focus on the needs of: Makers, Freelancers, Consultants, Startups, Non-Profit, Small Businesses, and
              more.
              In short: <strong>everyone</strong> who needs to organize their digital data; and works in a smaller team,
              or alone.
            </p>
            <div class='mt-10 flex items-center gap-x-6'>
              <a
                class=' rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                href='/guide/introduction.html'>
                Get Started
                <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
        <div
          class='absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36'
          aria-hidden='true'></div>
        <div class='shadow-lg md:rounded-3xl'>
          <div class='bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]'>
            <div
              class='absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36'
              aria-hidden='true'></div>
            <div class='relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0'>
              <div class='mx-auto max-w-2xl md:mx-0 md:max-w-none'>
                <div class='w-screen overflow-hidden rounded-tl-xl bg-gray-900'>
                  <div class='flex bg-gray-800/40 ring-1 ring-white/5'>
                    <div class='-mb-px flex text-sm font-medium leading-6 text-gray-400'>
                      <div
                        class='border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white'>
                        NotificationSetting.jsx
                      </div>
                      <div class='border-r border-gray-600/10 py-2 px-4'>App.jsx</div>
                    </div>
                  </div>
                  <div class='px-6 pt-6 pb-14'>
                    <!-- Your code example -->
                    test
                  </div>
                </div>
              </div>
              <div class='pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl'
                   aria-hidden='true'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32'></div>
  </section>

  <section class='py-24 sm:py-32'>
    <div class='mx-auto max-w-7xl px-6 lg:px-8'>
      <div class='mx-auto max-w-2xl sm:text-center'>
        <h2 class='text-base font-semibold leading-7 text-indigo-600'>All your digital admin in one app</h2>
        <p class='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Just an easy to use, simple yet
          powerfull webapp</p>
        <p class='mt-6 text-lg leading-8 text-gray-600'>

        </p>
      </div>
    </div>
    <div class='relative overflow-hidden pt-16'>
      <div class='mx-auto max-w-7xl px-6 lg:px-8'>
        <img src='https://tailwindui.com/img/component-images/project-app-screenshot.png' alt='App screenshot'
             class='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10' width='2432' height='1442'>
        <div class='relative' aria-hidden='true'>
          <div class='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]'></div>
        </div>
      </div>
    </div>
    <div class='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
      <dl
        class='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path fill-rule='evenodd'
                    d='M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z'
                    clip-rule='evenodd' />
            </svg>
            Push to deploy.
          </dt>
          <dd class='inline'>Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</dd>
        </div>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path fill-rule='evenodd'
                    d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                    clip-rule='evenodd' />
            </svg>
            SSL certificates.
          </dt>
          <dd class='inline'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          </dd>
        </div>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path fill-rule='evenodd'
                    d='M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z'
                    clip-rule='evenodd' />
            </svg>
            Simple queues.
          </dt>
          <dd class='inline'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.</dd>
        </div>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path fill-rule='evenodd'
                    d='M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z'
                    clip-rule='evenodd' />
            </svg>
            Advanced security.
          </dt>
          <dd class='inline'>Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.</dd>
        </div>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path fill-rule='evenodd'
                    d='M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z'
                    clip-rule='evenodd' />
            </svg>
            Powerful API in the making.
          </dt>
          <dd class='inline'>At this time our public API is limited. However we are currently slowly opening up more of
            our internally used routes.
          </dd>
        </div>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path
                d='M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z' />
              <path fill-rule='evenodd'
                    d='M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z'
                    clip-rule='evenodd' />
            </svg>
            Database backups.
          </dt>
          <dd class='inline'>Every night we make a backup of all data to S3.</dd>
        </div>
      </dl>
    </div>
  </section>

  <section class='py-24 sm:py-32 sm:mt-20 md:mt-24 mt-16'>
    <div class='mx-auto max-w-7xl px-6 lg:px-8'>
      <div class='mx-auto max-w-2xl sm:text-center'>
        <h2 class='text-base font-semibold leading-7 text-indigo-600'>For Geeks only..</h2>
        <p class='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>How does it work?</p>
      </div>
    </div>
    <div class='mx-auto mt-16 max-w-7xl px-6  lg:px-8'>
      <dl
        class='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg
              class='absolute top-1 left-1 h-5 w-5 text-indigo-600'
              fill='currentColor'
              aria-hidden='true'
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M368 176A144 144 0 1 0 80 176a144 144 0 1 0 288 0zM48 176a176 176 0 1 1 352 0A176 176 0 1 1 48 176zM16 112c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm432 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-8.8 7.2-16 16-16s16 7.2 16 16zM0 482.3c0-64.2 33.9-120.4 84.7-151.8c8.6 7.8 17.9 14.8 27.7 21.1C65.4 375.4 32.9 423.8 32 480H96V448c0-26.5 21.5-48 48-48H304c26.5 0 48 21.5 48 48v32h64c-.9-56.2-33.4-104.6-80.5-128.4c9.8-6.3 19.1-13.3 27.7-21.1c50.8 31.4 84.7 87.6 84.7 151.8c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM288 480h32V448c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v32h32V464c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v16zM205.3 162.7l21.2 6c3.3 .9 5.5 3.9 5.5 7.3s-2.2 6.4-5.5 7.3l-21.2 6-6 21.2c-.9 3.3-3.9 5.5-7.3 5.5s-6.4-2.2-7.3-5.5l-6-21.2-21.2-6c-3.3-.9-5.5-3.9-5.5-7.3s2.2-6.4 5.5-7.3l21.2-6 6-21.2c.9-3.3 3.9-5.5 7.3-5.5s6.4 2.2 7.3 5.5l6 21.2zM160 128c-17.7 0-32 14.3-32 32v16c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80V160c0-17.7-14.3-32-32-32H160zM96 160c0-35.3 28.7-64 64-64H288c35.3 0 64 28.7 64 64v16c0 61.9-50.1 112-112 112H208c-61.9 0-112-50.1-112-112V160z"/></svg>
           User Focussed Development.
          </dt>
          <dd class='inline'>We are working with a closed group of people. This allows us to focus on the right things. We call them the Experts.
          </dd>
        </div>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path fill-rule='evenodd'
                    d='M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z'
                    clip-rule='evenodd' />
            </svg>
            Advanced security.
          </dt>
          <dd class='inline'>Each Team has his own seperate database + S3 space out of the box. Currently we also support 2FA and session management.</dd>
        </div>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path fill-rule='evenodd'
                    d='M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z'
                    clip-rule='evenodd' />
            </svg>
            Powerful API in the making.
          </dt>
          <dd class='inline'>At this time our public API is limited. However we are currently slowly opening up more of
            our internally used routes.
          </dd>
        </div>

        <div class='relative pl-9'>
          <dt class='inline font-semibold text-gray-900'>
            <svg class='absolute top-1 left-1 h-5 w-5 text-indigo-600' viewBox='0 0 20 20' fill='currentColor'
                 aria-hidden='true'>
              <path
                d='M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z' />
              <path fill-rule='evenodd'
                    d='M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z'
                    clip-rule='evenodd' />
            </svg>
            Database backups.
          </dt>
          <dd class='inline'>Every night we make a backup of all data to S3.</dd>
        </div>
      </dl>
    </div>
  </section>
  <SiteMap />
  <!-- <NewsLetter /> -->
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .accent {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  display: flex;
  align-items: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  flex: 1;
}

#special-sponsor span:first-child {
  text-align: right;
}

#special-sponsor a {
  display: flex;
  justify-content: center;
  padding: 0 24px;
}

#special-sponsor img {
  height: 42px;
  margin: -6px 0;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }

  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }

  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }

  #special-sponsor {
    flex-direction: column;
  }

  #special-sponsor img {
    height: 36px;
    margin: 8px 0;
  }

  #special-sponsor span {
    text-align: center !important;
  }

  #highlights h3 {
    margin-bottom: 0.6em;
  }

  #highlights .vt-box {
    padding: 20px 36px;
  }

  .actions a {
    margin: 18px 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>

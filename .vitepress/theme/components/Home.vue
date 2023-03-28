<script setup lang='ts'>
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
// import { load, data, base } from './sponsors'
import SponsorsGroup from './SponsorsGroup.vue'

// onMounted(async () => {
//   await load()
// })
</script>

<template>
  <section class='relative overflow-hidden'>
    <div class='mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8'>
      <div class='px-6 lg:px-0 lg:pt-4'>
        <div class='mx-auto max-w-2xl'>
          <div class='max-w-lg'>
            <h1
              class='mt-10 text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-300 dark:text-neutral-300 sm:text-4xl flex'>
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
              <span class='pl-3'><span class='accent'>Supercharge</span> your admin 🎉</span>
            </h1>
            <!--            <small-->
            <!--              class="block p-0 my-2 mx-0 text-sm not-italic leading-6 text-left bg-scroll bg-none appearance-none scroll-auto text-slate-500"-->
            <!--              style="outline: none; text-decoration: none; list-style: none; animation-delay: -1ms; animation-duration: 1ms; animation-iteration-count: 1; font-weight: 420;"-->
            <!--            ><span-->
            <!--              class="py-px px-2 m-0 leading-6 whitespace-nowrap bg-none rounded-md appearance-none scroll-auto text-zinc-700"-->
            <!--              style="text-decoration: none; list-style: none; animation-delay: -1ms; animation-duration: 1ms; animation-iteration-count: 1; outline: none; font-weight: 420;"-->
            <!--            >New</span-->
            <!--            >-->
            <!--              <a-->
            <!--                href="https://usefathom.com/blog/event-filtering"-->
            <!--                class="p-0 m-0 leading-6 text-indigo-500 bg-none appearance-none cursor-pointer scroll-auto"-->
            <!--                style="outline: none; text-decoration: underline; list-style: none; animation-delay: -1ms; animation-duration: 1ms; animation-iteration-count: 1; transition: color 0.2s ease 0s;"-->
            <!--              >Filter your dashboard by event completions</a-->
            <!--              >-->
            <!--            </small>-->


            <p class='mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 mx-2 dark:text-neutral-400'>
              With Multipass you can <strong class='text--mp dark:text-amber-800'>organize</strong> your digital data,
              think Client-info, Products, Suppliers, .. in one
              single place.
            </p>
            <p class='mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 mx-2  dark:text-neutral-400'>
              Multipass is <strong class='text--mp dark:text-amber-800'>focussed</strong> on the needs of: Makers,
              Freelancers, Consultants, Startups, Non-Profit, Small Businesses, and
              other Fantastic Humans.
            </p>
            <p class='mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 mx-2  dark:text-neutral-400'>
              In short: <strong class='text--mp dark:text-amber-800'>everyone</strong> who needs to organize their
              digital data; and works in a <strong class='text--mp dark:text-amber-800'>smaller team</strong>,
              or alone.
            </p>
            <p class='mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 mx-2  dark:text-neutral-400 text-sm'>
              At this time we are only allowing users to register via an invite link.
            </p>
            <!--            <div class='mt-10 flex items-center gap-x-6'>-->
            <!--              <a-->
            <!--                class=' rounded-md bg-red-800 dark:bg-amber-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800'-->
            <!--                href='/guide/introduction.html'>-->
            <!--                Get Started-->
            <!--                <span aria-hidden='true'>→</span>-->
            <!--              </a>-->
            <!--            </div>-->

              <div class='mt-10 flex items-center justify-center gap-x-6'>
<!--                <a href='#'-->
<!--                   class='rounded-md bg-red-800 px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800'>Why-->
<!--                  choose Multipass?</a>-->
                <a href='/guide/introduction' class='text-md font-semibold leading-6 text-neutral-900'>Learn more <span
                  aria-hidden='true'>→</span></a>
              </div>

          </div>
        </div>
      </div>
      <div class='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
        <div
          class='absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-red-800/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36'
          aria-hidden='true'></div>
        <div class='dark:shadow-lg dark:md:rounded-3xl dark:bg-neutral-700 dark:p-4'>
          <img class='object-cover w-full h-full rounded-3xl' src='images/data-rocket.svg' alt='A data rocket' />
        </div>
      </div>
    </div>
    <div class='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32'></div>
  </section>

  <section class=''>
    <div class='mx-auto max-w-7xl px-6 lg:px-8'>
      <div class='mx-auto max-w-2xl sm:text-center'>
        <h2 class='text-base font-semibold leading-7 text-red-800 dark:text-amber-800 dark:text-amber-800'>All your
          digital admin in one
          app</h2>
        <p
          class='mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-300 sm:text-4xl dark:text-neutral-300'>
          Just an easy to
          use, simple yet
          powerfull webapp</p>
        <p class='mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400'>

        </p>
      </div>
    </div>
    <div class='relative overflow-hidden pt-16'>
      <div class='mx-auto max-w-7xl px-6 lg:px-8'>
        <img src='https://beta.multipass.rocks/storage/media/2021/08/screenshot-1-opt.png' alt='App screenshot v2020'
             class='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-neutral-900/10' width='2432' height='1442'>
        <div class='relative' aria-hidden='true'>
          <div class='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%] dark:from-neutral-900'></div>
        </div>
      </div>
    </div>

    <div class='mx-auto max-w-7xl px-6 lg:px-8'>
      <div class='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
        <dl class='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
              <svg
                class='h-5 w-5 flex-none text-green-600 dark:text-amber-800 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M439.6 391.6l-68.98-79.59h15.2c25.59 0 39.5-29.17 23.19-48.48l-60.86-71.51h10.77c21.28 0 32.9-22.5 19.28-37.31l-134.9-146.5C238.3 2.796 231.2 0 224 0S209.7 2.799 204.7 8.236L69.93 154.7C56.34 169.5 67.93 192 89.21 192h10.73L39.03 263.5C22.72 282.9 36.62 312 62.22 312h15.2l-68.98 79.59c-18.1 21.91-3.811 56.4 24.69 56.4L208 447.1V496c0 8.844 7.269 16 16.11 16S240 504.8 240 496v-48l174.8 .0133C443.4 448 458.5 413.4 439.6 391.6zM414.8 415.1L240 416v-57.38l43.31-43.31c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L240 313.4V176c0-8.844-7.157-16.01-16-16.01S208 167.2 208 176v80.01L188.8 230.4C183.5 223.3 173.5 221.9 166.4 227.2C159.3 232.5 157.9 242.5 163.2 249.6L208 309.3v106.7l-175.1 .0039c-.1934-.127-.7109-.8008-.8379-1.717c-.0957-.6934 .0469-1.115 .5938-1.748l114.9-132.6l-80.48-.002l102.2-120H108.5l115.5-125.6l115.6 125.6h-60.7l102.1 120H300.6l114.9 132.6c.457 .5273 .6562 .918 .5469 1.701C415.8 415.2 415.3 415.9 414.8 415.1z' />
              </svg>
              Structured data
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto'>
                Say Goodbye to spreadsheets, say <i>Hello!</i> to a robust normalized structure in which you can easily
                enter and view relationships for companies,
                organizations and individuals.
              </p>
              <!--              <p class="mt-6">-->
              <!--                <a href="#" class="text-sm font-semibold leading-6 text-red-800 dark:text-amber-800">Learn more <span aria-hidden="true">→</span></a>-->
              <!--              </p>-->
            </dd>
          </div>

          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300 dark:text-neutral-200'>
              <svg
                class='h-5 w-5 flex-none text-green-600 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M368 176A144 144 0 1 0 80 176a144 144 0 1 0 288 0zM48 176a176 176 0 1 1 352 0A176 176 0 1 1 48 176zM16 112c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm432 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-8.8 7.2-16 16-16s16 7.2 16 16zM0 482.3c0-64.2 33.9-120.4 84.7-151.8c8.6 7.8 17.9 14.8 27.7 21.1C65.4 375.4 32.9 423.8 32 480H96V448c0-26.5 21.5-48 48-48H304c26.5 0 48 21.5 48 48v32h64c-.9-56.2-33.4-104.6-80.5-128.4c9.8-6.3 19.1-13.3 27.7-21.1c50.8 31.4 84.7 87.6 84.7 151.8c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM288 480h32V448c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v32h32V464c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v16zM205.3 162.7l21.2 6c3.3 .9 5.5 3.9 5.5 7.3s-2.2 6.4-5.5 7.3l-21.2 6-6 21.2c-.9 3.3-3.9 5.5-7.3 5.5s-6.4-2.2-7.3-5.5l-6-21.2-21.2-6c-3.3-.9-5.5-3.9-5.5-7.3s2.2-6.4 5.5-7.3l21.2-6 6-21.2c.9-3.3 3.9-5.5 7.3-5.5s6.4 2.2 7.3 5.5l6 21.2zM160 128c-17.7 0-32 14.3-32 32v16c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80V160c0-17.7-14.3-32-32-32H160zM96 160c0-35.3 28.7-64 64-64H288c35.3 0 64 28.7 64 64v16c0 61.9-50.1 112-112 112H208c-61.9 0-112-50.1-112-112V160z' />
              </svg>
              We are all Humans :)
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto'>
                With our 'Humans' concept, you can virtually monitor the work of others in your team who are not users
                in Multipass.
              </p>
              <!--              <p class="mt-6">-->
              <!--                <a href="#" class="text-sm font-semibold leading-6 text-red-800 dark:text-amber-800">Learn more <span aria-hidden="true">→</span></a>-->
              <!--              </p>-->
            </dd>
          </div>

          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
              <svg
                class='h-5 w-5 flex-none text-yellow-600 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M562.4 190.1l76.12-167.5c3.656-8.062 .0938-17.53-7.938-21.19c-8-3.594-17.5-.125-21.19 7.939l-75.14 165.3C512.8 165.3 489 159.1 464 159.1c-72.28 0-142.2 25.83-197.1 72.85l-96.06 82.25c-6.967 5.963-15.07 8.645-23 8.645C129.5 323.7 112 309.3 112 287.1v-32l65.75-36.38C186.6 213.7 192 203.7 192 192.1V111.1c0-9.391-7.709-15.99-16.01-15.99c-2.969 0-6.012 .8438-8.807 2.707l-71.17 47.4L24.88 98.72C22.08 96.86 19.02 96.01 16.05 96.01C7.727 96.01 0 102.6 0 112v80.93c.002 10.75 5.375 20.75 14.25 26.62L80 255.1v96C80 440.4 151.6 512 240 512h224c97.2 0 176-78.8 176-176C640 275.3 609.2 221.7 562.4 190.1zM96 228.3C95.83 228.2 32 192.9 32 192.9V141.9L78.24 172.7C83.5 176.2 89.71 178.1 96.02 178.1S108.5 176.2 113.8 172.7l46.27-30.82l.0527 50.91C160.1 192.8 96.17 228.2 96 228.3zM464 479.1h-224c-70.58 0-128-57.42-128-128v-6.516c10.41 6.496 22.71 10.25 35.87 10.25c15.95 0 31.51-5.801 43.81-16.34l96.06-82.25C336.8 215.1 399.4 191.1 464 191.1c79.4 0 144 64.6 144 144S543.4 479.1 464 479.1zM504 271.1c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C528 282.7 517.3 271.1 504 271.1z' />
              </svg>
              Everyone is unique
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto'>
                Not everyone likes text. Some people prefer colors, or even emojis. Multipass allows you to do just
                that. Sensibly. Or not.
              </p>
              <!--              <p class="mt-6">-->
              <!--                <a href="#" class="text-sm font-semibold leading-6 text-red-800 dark:text-amber-800">Learn more <span aria-hidden="true">→</span></a>-->
              <!--              </p>-->
            </dd>
          </div>

          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
              <svg
                class='h-5 w-5 flex-none text-neutral-600 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M429.8 39.6c-9.4-9.4-24.6-9.4-33.9 0L341 94.4 417.6 171l54.8-54.8c9.4-9.4 9.4-24.6 0-33.9L429.8 39.6zM83.1 352.4c-7.6 7.6-13.1 16.9-16.1 27.2L39.6 472.4l92.8-27.3c10.3-3 19.6-8.6 27.2-16.1L395 193.6 318.4 117 83.1 352.4zM373.2 17c21.9-21.9 57.3-21.9 79.2 0L495 59.6c21.9 21.9 21.9 57.3 0 79.2L182.3 451.6c-11.4 11.4-25.4 19.7-40.8 24.2l-121 35.6c-5.6 1.7-11.7 .1-15.8-4s-5.7-10.2-4-15.8l35.6-121c4.5-15.4 12.9-29.4 24.2-40.8L373.2 17zM82.7 27.3c25-25 65.5-25 90.5 0l70.9 70.9-22.6 22.6L189.7 89l-34.3 34.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L167 66.3 150.6 49.9c-12.5-12.5-32.8-12.5-45.3 0L49.9 105.4c-12.5 12.5-12.5 32.8 0 45.3l70.9 70.9L98.2 244.1 27.3 173.3c-25-25-25-65.5 0-90.5L82.7 27.3zm256 457.4l-70.9-70.9 22.6-22.6 70.9 70.9c12.5 12.5 32.8 12.5 45.3 0l55.4-55.4c12.5-12.5 12.5-32.8 0-45.3L445.7 345l-34.3 34.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L423 322.3l-31.8-31.8 22.6-22.6 70.9 70.9c25 25 25 65.5 0 90.5l-55.4 55.4c-25 25-65.5 25-90.5 0z' />
              </svg>
              For Makers, By Makers
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto mt-2'>
                Easily create Products, Make Assemblies, re-use them, make different Assemblies with the same products,
                create Variants, and more.
              </p>
              <!--              <p class="mt-6">-->
              <!--                <a href="#" class="text-sm font-semibold leading-6 text-red-800 dark:text-amber-800">Learn more <span aria-hidden="true">→</span></a>-->
              <!--              </p>-->
            </dd>
          </div>

          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
              <svg
                class='h-5 w-5 flex-none text-blue-600 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M287.1 191.1C296.8 191.1 304 199.2 304 207.1V287.1H312C320.8 287.1 328 295.2 328 303.1C328 312.8 320.8 319.1 312 319.1H263.1C255.2 319.1 247.1 312.8 247.1 303.1C247.1 295.2 255.2 287.1 263.1 287.1H271.1V223.1C263.2 223.1 255.1 216.8 255.1 207.1C255.1 199.2 263.2 191.1 271.1 191.1H287.1zM400 255.1C400 320.1 355.1 384 287.1 384C220.9 384 175.1 320.1 175.1 255.1C175.1 191 220.9 127.1 287.1 127.1C355.1 127.1 400 191 400 255.1zM287.1 352C332.2 352 368 309 368 255.1C368 202.1 332.2 159.1 287.1 159.1C243.8 159.1 207.1 202.1 207.1 255.1C207.1 309 243.8 352 287.1 352zM48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM31.1 112.5V183.1C67.35 183.1 95.1 155.3 95.1 119.1V119.5C77.5 118.1 58.88 115.1 40.23 109.1C38.06 109.4 35.35 109.8 33.34 111.2C32.45 111.8 32.09 112.3 32.01 112.4L31.1 112.5zM38.16 433.6C57.3 440.8 76.53 444.1 95.1 446.8V440C95.1 404.7 67.35 376 31.1 376V422.3C31.1 429.2 35.66 432.7 38.16 433.6zM127.1 447.9C172.7 446.1 219.1 436.2 269.3 423.5C273.6 422.4 277.9 421.3 282.3 420.2C334.1 406.9 390.2 392.6 448 391.6C448.2 338.8 491.1 295.1 544 295.1V167.1C490.1 167.1 448 125 448 71.1V64.05C403.3 65.01 356.9 75.78 306.7 88.51C302.4 89.6 298.1 90.71 293.7 91.82C241.9 105.1 185.8 119.4 127.1 120.4C127.8 173.2 84.88 215.1 31.1 215.1V344C85.02 344 127.1 386.1 127.1 440V447.9zM480 392.5C498.5 393.9 517.1 396.9 535.8 402C537.9 402.6 540.6 402.2 542.7 400.8C543.6 400.2 543.9 399.7 543.1 399.6C544 399.6 543.1 399.6 543.1 399.6C543.1 399.6 544 399.6 544 399.5V328C508.7 328 480 356.7 480 392V392.5zM480 65.17V71.1C480 107.3 508.7 135.1 544 135.1V89.66C544 82.82 540.3 79.29 537.8 78.36C518.7 71.21 499.5 67.04 480 65.17z' />
              </svg>
              Sell Your stuff
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto mt-2'>
                Yes, we have a Cost Price Calculator for your clients too. A complete webshop is coming soon.
              </p>
            </dd>
          </div>


          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
              <svg
                class='h-5 w-5 flex-none text-red-800 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336H274.7C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480zM375.1 241C392.9 250.8 412.3 256 432 256C493.8 256 544 205.8 544 144S493.8 32 432 32c-12.83 0-25.39 2.156-37.34 6.391c-8.328 2.953-12.69 12.09-9.734 20.42c2.953 8.344 12.12 12.66 20.42 9.734C413.9 65.53 422.8 64 432 64C476.1 64 512 99.89 512 144S476.1 224 432 224c-14.08 0-27.91-3.703-39.98-10.69c-7.656-4.453-17.44-1.828-21.86 5.828C365.7 226.8 368.3 236.6 375.1 241zM490.7 320H448c-8.844 0-16 7.156-16 16S439.2 352 448 352h42.67C555.4 352 608 404.6 608 469.3C608 475.2 603.2 480 597.3 480H496c-8.844 0-16 7.156-16 16s7.156 16 16 16h101.3C620.9 512 640 492.9 640 469.3C640 386.1 573 320 490.7 320zM224 272c70.59 0 128-57.42 128-128V24c0-11.89-12.52-19.63-23.16-14.31L288 30.11L231.2 1.689c-4.506-2.254-9.807-2.254-14.31 0L160 30.11L119.2 9.689C108.5 4.369 96 12.11 96 24V144C96 214.6 153.4 272 224 272zM128 49.86l32 16l64-32l64 32l32-16V112H128V49.86zM320 144c0 52.94-43.06 96-96 96s-96-43.06-96-96H320z' />
              </svg>
              Multipass: a diverse Passionate Team
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto'>
                We are a mixed team of makers, wizards, hackers, and tinkerers. We got your Back.
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>


<!--    <div class='mx-auto max-w-2xl text-center'>-->
<!--      <div class='mt-10 flex items-center justify-center gap-x-6'>-->
<!--        <a href='#'-->
<!--           class='rounded-md bg-red-800 px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800'>Why-->
<!--          choose Multipass?</a>-->
<!--        <a href='#' class='text-md font-semibold leading-6 text-neutral-900'>Learn more <span-->
<!--          aria-hidden='true'>→</span></a>-->
<!--      </div>-->
<!--    </div>-->
  </section>

  <section class=' '>
    <div class='mx-auto max-w-7xl px-6 lg:px-8'>
      <div class='mx-auto max-w-2xl lg:text-center'>
        <div class='mt-16 flow-root sm:mt-24 mb-12'>
          <div class='-m-2 rounded-xl lg:-m-4  lg:p-4'>
            <img src='images/human-growing.svg' alt='A human growing'>
          </div>
        </div>
        <h2 class='text-base font-semibold leading-7 text-red-800 dark:text-amber-800'>Features</h2>
        <p class='mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-300 sm:text-4xl'>A list of
          growing Goodies</p>
        <p class='mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400'>
          Multipass is a growing project. We are adding new features and goodies all the time. Here is a list of the
          current features:
        </p>
      </div>
      <div class='mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none'>

        <dl class='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
              <svg
                class='h-5 w-5 flex-none text-red-800 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336H274.7C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480zM375.1 241C392.9 250.8 412.3 256 432 256C493.8 256 544 205.8 544 144S493.8 32 432 32c-12.83 0-25.39 2.156-37.34 6.391c-8.328 2.953-12.69 12.09-9.734 20.42c2.953 8.344 12.12 12.66 20.42 9.734C413.9 65.53 422.8 64 432 64C476.1 64 512 99.89 512 144S476.1 224 432 224c-14.08 0-27.91-3.703-39.98-10.69c-7.656-4.453-17.44-1.828-21.86 5.828C365.7 226.8 368.3 236.6 375.1 241zM490.7 320H448c-8.844 0-16 7.156-16 16S439.2 352 448 352h42.67C555.4 352 608 404.6 608 469.3C608 475.2 603.2 480 597.3 480H496c-8.844 0-16 7.156-16 16s7.156 16 16 16h101.3C620.9 512 640 492.9 640 469.3C640 386.1 573 320 490.7 320zM224 272c70.59 0 128-57.42 128-128V24c0-11.89-12.52-19.63-23.16-14.31L288 30.11L231.2 1.689c-4.506-2.254-9.807-2.254-14.31 0L160 30.11L119.2 9.689C108.5 4.369 96 12.11 96 24V144C96 214.6 153.4 272 224 272zM128 49.86l32 16l64-32l64 32l32-16V112H128V49.86zM320 144c0 52.94-43.06 96-96 96s-96-43.06-96-96H320z' />
              </svg>
              App: Contacts
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto'>
                A robust normalized structure in which you can easily enter and view relationships for companies,
                organizations and individuals.
              </p>
              <!--              <p class="mt-6">-->
              <!--                <a href="#" class="text-sm font-semibold leading-6 text-red-800 dark:text-amber-800">Learn more <span aria-hidden="true">→</span></a>-->
              <!--              </p>-->
            </dd>
          </div>

          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
              <svg
                class='h-5 w-5 flex-none text-red-800 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336H274.7C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480zM375.1 241C392.9 250.8 412.3 256 432 256C493.8 256 544 205.8 544 144S493.8 32 432 32c-12.83 0-25.39 2.156-37.34 6.391c-8.328 2.953-12.69 12.09-9.734 20.42c2.953 8.344 12.12 12.66 20.42 9.734C413.9 65.53 422.8 64 432 64C476.1 64 512 99.89 512 144S476.1 224 432 224c-14.08 0-27.91-3.703-39.98-10.69c-7.656-4.453-17.44-1.828-21.86 5.828C365.7 226.8 368.3 236.6 375.1 241zM490.7 320H448c-8.844 0-16 7.156-16 16S439.2 352 448 352h42.67C555.4 352 608 404.6 608 469.3C608 475.2 603.2 480 597.3 480H496c-8.844 0-16 7.156-16 16s7.156 16 16 16h101.3C620.9 512 640 492.9 640 469.3C640 386.1 573 320 490.7 320zM224 272c70.59 0 128-57.42 128-128V24c0-11.89-12.52-19.63-23.16-14.31L288 30.11L231.2 1.689c-4.506-2.254-9.807-2.254-14.31 0L160 30.11L119.2 9.689C108.5 4.369 96 12.11 96 24V144C96 214.6 153.4 272 224 272zM128 49.86l32 16l64-32l64 32l32-16V112H128V49.86zM320 144c0 52.94-43.06 96-96 96s-96-43.06-96-96H320z' />
              </svg>
              Taxonomy: Labels
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto'>
                Labels, tags or labels, ... short words that ensure the identification of the disorganized data. The
                same Labels can be used on different types of data inside Multipass.
              </p>
            </dd>
          </div>

          <div class='flex flex-col'>
            <dt
              class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
              <svg
                class='h-5 w-5 flex-none text-red-800 dark:text-amber-800'
                fill='currentColor'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d='M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336H274.7C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480zM375.1 241C392.9 250.8 412.3 256 432 256C493.8 256 544 205.8 544 144S493.8 32 432 32c-12.83 0-25.39 2.156-37.34 6.391c-8.328 2.953-12.69 12.09-9.734 20.42c2.953 8.344 12.12 12.66 20.42 9.734C413.9 65.53 422.8 64 432 64C476.1 64 512 99.89 512 144S476.1 224 432 224c-14.08 0-27.91-3.703-39.98-10.69c-7.656-4.453-17.44-1.828-21.86 5.828C365.7 226.8 368.3 236.6 375.1 241zM490.7 320H448c-8.844 0-16 7.156-16 16S439.2 352 448 352h42.67C555.4 352 608 404.6 608 469.3C608 475.2 603.2 480 597.3 480H496c-8.844 0-16 7.156-16 16s7.156 16 16 16h101.3C620.9 512 640 492.9 640 469.3C640 386.1 573 320 490.7 320zM224 272c70.59 0 128-57.42 128-128V24c0-11.89-12.52-19.63-23.16-14.31L288 30.11L231.2 1.689c-4.506-2.254-9.807-2.254-14.31 0L160 30.11L119.2 9.689C108.5 4.369 96 12.11 96 24V144C96 214.6 153.4 272 224 272zM128 49.86l32 16l64-32l64 32l32-16V112H128V49.86zM320 144c0 52.94-43.06 96-96 96s-96-43.06-96-96H320z' />
              </svg>
              Taxonomy: Types
            </dt>
            <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
              <p class='flex-auto'>
                With Types, you can group your data into categories. For example, you can create a type "Author" and
                then create a Contact with the name "Terry Pratchett".
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>


  <section class='pb-24 sm:pb-32 '>
    <div class='mx-auto max-w-7xl px-6 lg:px-8'>
      <div class='mx-auto max-w-2xl sm:text-center'>
        <div class='mt-16 flow-root sm:mt-24 mb-12'>

          <div class='-m-2 rounded-xl lg:-m-4  lg:p-4 mb-4'>
            <div class='dark:shadow-lg dark:md:rounded-3xl dark:bg-neutral-200 dark:p-4'>
             <img src='images/assembly-line.svg' alt='Assembly line illustration'>
            </div>
          </div>
        </div>
        <h2 class='text-base font-semibold leading-7 text-red-800 dark:text-amber-800'>For Geeks only..?</h2>
        <p class='mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-300 sm:text-4xl'>How does it
          work?</p>
      </div>
    </div>
    <div class='mx-auto mt-16 max-w-7xl px-6  lg:px-8'>
      <dl
        class='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>

        <div class='flex flex-col'>
          <dt
            class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
            <svg
              class='h-5 w-5 flex-none text-green-600 dark:text-amber-800'
              fill='currentColor'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d='M368 176A144 144 0 1 0 80 176a144 144 0 1 0 288 0zM48 176a176 176 0 1 1 352 0A176 176 0 1 1 48 176zM16 112c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm432 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-8.8 7.2-16 16-16s16 7.2 16 16zM0 482.3c0-64.2 33.9-120.4 84.7-151.8c8.6 7.8 17.9 14.8 27.7 21.1C65.4 375.4 32.9 423.8 32 480H96V448c0-26.5 21.5-48 48-48H304c26.5 0 48 21.5 48 48v32h64c-.9-56.2-33.4-104.6-80.5-128.4c9.8-6.3 19.1-13.3 27.7-21.1c50.8 31.4 84.7 87.6 84.7 151.8c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM288 480h32V448c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v32h32V464c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v16zM205.3 162.7l21.2 6c3.3 .9 5.5 3.9 5.5 7.3s-2.2 6.4-5.5 7.3l-21.2 6-6 21.2c-.9 3.3-3.9 5.5-7.3 5.5s-6.4-2.2-7.3-5.5l-6-21.2-21.2-6c-3.3-.9-5.5-3.9-5.5-7.3s2.2-6.4 5.5-7.3l21.2-6 6-21.2c.9-3.3 3.9-5.5 7.3-5.5s6.4 2.2 7.3 5.5l6 21.2zM160 128c-17.7 0-32 14.3-32 32v16c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80V160c0-17.7-14.3-32-32-32H160zM96 160c0-35.3 28.7-64 64-64H288c35.3 0 64 28.7 64 64v16c0 61.9-50.1 112-112 112H208c-61.9 0-112-50.1-112-112V160z' />
            </svg>
            User Focussed Development
          </dt>
          <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
            <p class='flex-auto'>
              We are working with a closed group of people. This allows us to focus on the right things. We call them
              the Experts.
            </p>
          </dd>
        </div>


        <div class='flex flex-col'>
          <dt
            class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
            <svg
              class='h-5 w-5 flex-none text-red-600 dark:text-amber-800'
              fill='currentColor'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d='M169.1 37.7c-5.8 6.6-12 17.3-18.1 31.9c-6.1 14.5-11.3 31-15.5 47.2c24.4 6.4 54 11.2 88.6 11.2c33.4 0 63.3-5.2 88.3-12.1c-4.2-15.9-9.3-32-15.3-46.3c-6.1-14.6-12.4-25.3-18.1-31.9c-4-4.6-6.3-5.6-7-5.7c-4.8 0-7.3 .6-8.5 1c-1 .3-1.9 .8-3.6 1.8c-.1 .1-.4 .3-.7 .5C255.7 37.9 242.2 48 224 48s-31.7-10.1-35.1-12.7l0 0c-.3-.3-.6-.4-.7-.5c-1.6-1.1-2.5-1.5-3.6-1.8c-1.1-.4-3.6-1-8.5-1c-.6 .2-3 1.2-7 5.7zM272 0c34.2 0 57 54.9 70.8 106c.8-.3 1.6-.6 2.4-.9c14.8-5.7 26.5-11.4 34.3-15.7c3.9-2.1 6.9-3.9 8.9-5c1-.6 1.7-1 2.2-1.3l.5-.3 .1 0 0 0 0 0c7.4-4.9 17.3-2.9 22.2 4.4s2.9 17.3-4.4 22.2L400 96c8.9 13.3 8.9 13.3 8.9 13.3l0 0 0 0-.1 0-.2 .1-.8 .5c-.7 .4-1.6 1-2.8 1.7c-2.4 1.4-5.8 3.5-10.3 5.8c-8.9 4.8-21.7 11.1-37.9 17.3C324.4 147.4 278.4 160 224 160c-58.3 0-104.3-12.5-135.9-25.1c-15.8-6.3-28-12.7-36.3-17.5c-4.2-2.4-7.4-4.5-9.6-6c-1.1-.7-2-1.3-2.6-1.8l-.7-.5-.2-.2-.1-.1 0 0 0 0s0 0 9.6-12.8l-9.6 12.8c-7.1-5.3-8.5-15.3-3.2-22.4c5.3-7.1 15.3-8.5 22.4-3.2l.1 0 .4 .3c.4 .3 1 .7 1.8 1.3c1.7 1.1 4.4 2.8 7.9 4.9c7.2 4.2 18 9.8 32.2 15.5c1.6 .6 3.3 1.3 5 1.9C118.7 55.7 141.5 0 176 0c18 0 25.9 5.4 32.5 9.9c4.7 3.3 8.8 6.1 15.5 6.1s10.8-2.8 15.5-6.1C246.1 5.4 254 0 272 0zm-.3 32a.1 .1 0 1 0 .1 .1 .1 .1 0 1 0 -.1-.1zm-95.6 0a.1 .1 0 1 0 .3 .1 .1 .1 0 1 0 -.3-.1zM100 224c-2.6-10.2-4-21-4-32c0-6.7 .5-13.3 1.5-19.7c9.6 3.1 19.9 6.1 31.1 8.8c-.4 3.6-.6 7.2-.6 10.9c0 53 43 96 96 96s96-43 96-96c0-4-.2-7.9-.7-11.7c11.1-2.8 21.5-5.8 31-9c1.1 6.8 1.7 13.7 1.7 20.8c0 11-1.4 21.8-4 32h71.2c7.1 0 12.8 5.7 12.8 12.8c0 2.1-.5 4.1-1.5 6l-45.7 86.8C423.6 364.8 448 415.5 448 472v8c0 17.7-14.3 32-32 32H272.4c-.2 0-.5 0-.7 0H176.4c-.2 0-.5 0-.7 0H32c-17.7 0-32-14.3-32-32v-8c0-56.5 24.4-107.2 63.2-142.4L17.5 242.8c-1-1.8-1.5-3.9-1.5-6c0-7.1 5.7-12.8 12.8-12.8H100zm234.8 32c-22.1 38.3-63.5 64-110.9 64s-88.7-25.7-110.9-64H60.6l30.9 58.7c6.8 12.9 4 28.8-6.8 38.6C52.3 382.7 32 424.9 32 472l0 8H154.8l-26.2-91.6c-2.4-8.5 2.5-17.4 11-19.8s17.4 2.5 19.8 11l20.3 70.9L201.8 384H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h32 32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-9.8l22.2 66.5 20.3-70.9c2.4-8.5 11.3-13.4 19.8-11s13.4 11.3 11 19.8L293.2 480H416v-8c0-47.1-20.3-89.3-52.7-118.6c-10.8-9.8-13.6-25.7-6.8-38.6L387.4 256H334.9zM203.5 480h40.9L224 418.6 203.5 480zM144 184.4c10.1 2 20.8 3.6 32 4.9V198c0 7 5.7 12.7 12.7 12.7c5.5 0 10.3-3.5 12-8.7l3.5-10.5c6.5 .3 13.1 .5 19.8 .5c6.7 0 13.3-.2 19.8-.5l3.5 10.5c1.7 5.2 6.6 8.7 12 8.7c7 0 12.7-5.7 12.7-12.7v-9c11.2-1.4 21.8-3.2 32-5.3V198c0 24.7-20 44.7-44.7 44.7c-14.1 0-27-6.6-35.3-17.3c-8.3 10.7-21.2 17.3-35.3 17.3c-24.7 0-44.7-20-44.7-44.7V184.4z' />
            </svg>
            Advanced security
          </dt>
          <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
            <p class='flex-auto'>
              Each Team has his own seperate database + S3 space out of the box. Currently we also support 2FA and
              session management.
            </p>
          </dd>
        </div>

        <div class='flex flex-col'>
          <dt
            class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
            <svg
              class='h-5 w-5 flex-none text-blue-600 dark:text-amber-800'
              fill='currentColor'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
              <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d='M192 128c0-53 43-96 96-96s96 43 96 96c0 8.8 7.2 16 16 16s16-7.2 16-16C416 57.3 358.7 0 288 0S160 57.3 160 128c0 40 18.4 75.8 47.1 99.2L147.3 323c-6.1-1.9-12.6-3-19.3-3c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-17.1-6.7-32.6-17.6-44.1L238 238.2c7.2-11.5 3.2-25.5-6.5-32.7C207.5 188.1 192 159.9 192 128zM160 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-64-32c0 35.3 28.7 64 64 64c6.7 0 13.2-1 19.3-3l63.5 101.7c7.2 11.5 21.6 14.1 32.2 8.4C416.5 292 431.7 288 448 288c53 0 96 43 96 96s-43 96-96 96c-18.7 0-36.1-5.3-50.9-14.6c-7.5-4.7-17.4-2.4-22.1 5.1s-2.4 17.4 5.1 22.1c19.7 12.3 43 19.5 67.9 19.5c70.7 0 128-57.3 128-128s-57.3-128-128-128c-19.2 0-37.4 4.2-53.8 11.8l-59.8-95.7c10.9-11.5 17.6-27 17.6-44.1c0-35.3-28.7-64-64-64s-64 28.7-64 64zM73.2 305.2c7.2-5.1 9-15 4-22.3s-15-9-22.3-4C21.7 302.1 0 340.5 0 384c0 70.7 57.3 128 128 128c65.3 0 119.1-48.9 127-112H386c7.1 27.6 32.2 48 62 48c35.3 0 64-28.7 64-64s-28.7-64-64-64c-29.8 0-54.9 20.4-62 48H248c-13.5 0-23.4 10.8-24.2 22.9C220.2 440.7 178.7 480 128 480c-53 0-96-43-96-96c0-32.6 16.2-61.4 41.2-78.8zM480 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z' />
            </svg>
            Powerful API .. in the making
          </dt>
          <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
            <p class='flex-auto'>
              At this time our public API is limited. However we are currently slowly opening up more of
              our internally used routes.
            </p>
          </dd>
        </div>

        <div class='flex flex-col'>
          <dt
            class='flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-300'>
            <svg
              class='h-5 w-5 flex-none text-red-800 dark:text-amber-800'
              fill='currentColor'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
              <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d='M576 272v-224C576 21.49 554.5 0 528 0h-256C227.8 0 192 35.82 192 80V352c0 35.35 28.66 64 64 64h304c8.844 0 16-7.156 16-16S568.8 384 560 384H544V317.1C562.6 310.4 576 292.8 576 272zM512 384H256c-17.64 0-32-14.36-32-32s14.36-32 32-32h256V384zM528 288H256C244.3 288 233.5 291.4 224 296.9V80C224 53.49 245.5 32 272 32h256C536.8 32 544 39.16 544 48v224C544 280.8 536.8 288 528 288zM368 480H352v-16c0-8.838-7.164-16-16-16S320 455.2 320 464V480H65.81c-15.95 0-30.77-10.85-33.37-26.59C29.14 433.4 44.59 416 64 416h80C152.8 416 160 408.8 160 400C160 391.2 152.8 384 144 384H64c-11.71 0-22.55 3.389-32 8.9V176C32 149.5 53.49 128 80 128h64C152.8 128 160 120.8 160 112C160 103.2 152.8 96 144 96h-64C35.82 96 0 131.8 0 176V448c0 35.35 28.66 64 64 64h304c8.844 0 16-7.156 16-16S376.8 480 368 480z' />
            </svg>
            Database backups
          </dt>
          <dd class='mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400'>
            <p class='flex-auto'>
              Every night, Handles our internal Bot, makes a copy of each database to a secret bucket on S3. Backups are
              kept with a x day retention period.
            </p>
          </dd>
        </div>

      </dl>
    </div>
  </section>
  <SiteMap />
  <!-- <NewsLetter /> -->
</template>

<style scoped>

.soft {
  background: var(--vt-c-bg-soft);
}

html.dark .accent {
  background: -webkit-linear-gradient(315deg, #a11b29 25%, #f9af3c);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

html:not(.dark) .accent,
.dark .accent {
  background: -webkit-linear-gradient(315deg, #a11b29 25%, #f9af3c);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

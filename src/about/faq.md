# Frequently Asked Questions {#frequently-asked-questions}

## What is Multipass? {#what-is-Multipass}
Multipass is a new Bussiness Intelligence App with a Twist. 😉

Multipass takes the pain and hassle out of managing a small bussiness and can even be used to manage you association. It does not matter if you want to [manage your own Team](/apps/humans/README.md), have [a full fledged Boat Price Calculator](/apps/sales/cpq.md), [organize a Soccer Tournament](/apps/tournaments/README.md) or just have a tool that handles [your CRM data with flexibility](/apps/contacts/README.md)- Multipass is the solution for you.


## Who maintains Multipass? {#who-maintains-Multipass}

The idea of building something like Multipass started in 2011. In that year [Veerle Deschepper](https://gompje.be) made a very first version as a personal side project. That version failed. Later in 2014 a new version was born. Today, Multipass is actively maintained by [a team of both full-time and volunteer members from all around the world](/about/team), where Veerle serves as the project lead, and lead Full Stack Developer.

Multipass's development is primarily privately funded by DaktaDeo & friends.

## How does Multipass work? in a nutshell {#how-it-works}

Multipass is a SaaS application. It runs on our own private Cloud servers, hosted on Digital Ocean.

With 1 account you can access and create multiple Teams.

Each Team has its own separate database on our managed database cluster.


## How much does Multipass cost? {#how-much-does-Multipass-cost}
We use a usage-based, block based subscription. Each Team is billed according to usage, not the number of accounts that have access to it. The more data you consume, the higher your subscription will be.

This revenue model allows for a Team of 25 people to work together on a small set of data, keeping the costs low and the ROI high. While another Team of 1 with thousands of records paying their fair share. This is our view of a fair billing system.

The exact pricing is currently being tested during our closed beta period.

## Why isn't Multipass free? {#why-isnt-Multipass-free}
If you aren't paying for a product, you are the product. 

That's why other products offer a free tier or are totally free, because they make enough money off the personal data their customers give them by using their app. We charge a small and sustainable fee for Multipass because our business model is selling software, not data (these are very different business models). Our customers gladly pay for our service because they know they have a voice in the development process, their data is safe with us and their clients' privacy is protected. 

As a profitable business, we're in this for the long haul.

## What license does Multipass use? {#what-license-does-Multipass-use}

Multipass is closed source.

However, we like to give back to the open source community as much as we can. We have open sourced a number of our internal tools and libraries, and we are also working on open sourcing more of our code in the future.

## Why isn't Multipass open source? {#why-isnt-Multipass-open-source}

We believe that open source is a great way to build software. However, we also believe that open source is not always the right way to build a sustainable business. We have invested a lot of time into building Multipass, and we want to make sure that we can continue to invest in it for years to come.

That said: things change. We are always open to the idea of open sourcing Multipass in the future _if_ we can garantuee that we can continue to build great things & eat. 

## What are the system requirements for Multipass? {#what-are-the-system-requirements-for-Multipass}
Multipass is a SaaS application. This means it runs in your favorite browser! No need to install or download updates and your data is always available where you have internet.

## What browsers does Multipass support? {#what-browsers-does-Multipass-support}

The latest version of Multipass (9.x and up) only supports [browsers with native ES2015 support](https://caniuse.com/es6). This excludes IE11. Multipass uses ES2015 features that cannot be polyfilled in legacy browsers.

Multipass should work in any web-kit based modern browser.

:::warning Limitations during the Beta period

Due to limited resources of our dev-team we recommend Vivaldi, Brave or Google Chrome. These are the browsers we use to develop/test the app and are therefore guaranteed to work best.
:::

## Is Multipass reliable? {#is-Multipass-reliable}

Multipass slowly growing into a mature and battle-tested app. 

Multipass is used in production in varying capacities all around the world, including DaktaDeo, Brugge Marine Center NV, HT-Legends Gent, Hero on Socks, Silence At Work, Burkinafaso Project, Howest,  and many more.

## Is Multipass fast? {#is-Multipass-fast}

At this time Multipass uses Vue2.0 for the UX interface. We are working on a new version of Multipass that will be based on Vue3.0. This new version will be even faster and more reliable.

We use our own VPS servers and constantly monitor the performance of our servers.

As nomad workers ourselvers, we know how important it is to have a fast and reliable app that works on slower networks. That's why we ourselves regularly test the performance of our app on 4g networks. 

## Does Multipass Work on Mobile? {#does-Multipass-work-on-mobile}
During the beta **our main focus is having a fully working app on desktop**. We do however ❤ our iPhone, and hate not being able to access/add info on the road! 🌲

You can count on it that, **at the very least the most essential features things will work on an iphone SE 2020**. Like seeing contact info or calling them directly from the list. Sometimes with a bit of compromises like using landscape mode or manual clicking on 'hide' for the sidebar.

:::warning Limitations during the Beta period
Cutoff device is an 11-inch iPad pro 202 (M1); using Brave iOS. Used in Landscape mode. Basic feature set & usable with sometimes UI work-arounds.
:::

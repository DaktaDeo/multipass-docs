---
footer: false
---

# Introduction {#introduction}

:::warning Documentation is a Work In Progress (WIP)

Due to limited resources of our team we are currently working on the documentation.

If you have any questions, please contact Veerle directly us at [veerle@daktadeo.be](mailto:veerle@daktadeo.be). She will do her best to answer your questions as soon as possible. 
:::

## What is Multipass? {#what-is-multipass}

Multipass is a new Bussiness Intelligence App with a Twist. 😉 

Multipass takes the pain and hassle out of managing a small bussiness and can even be used to manage you association. It does not matter if you want to manage your own Team, have a full fledged Boat Price Calculator, organize a Soccer Tournament or just have a tool that handles your CRM data with flexibility - Multipass is the solution for you.

After creating you Team you have instant access to all the available apps, including:

- [Calendar Events](apps/calendar-events/introduction)
- [Contacts](apps/contacts/introduction)
- [Media](apps/media/introduction)
- [Humans](apps/humans/introduction)
- [Products](apps/products/introduction)
- [Sales](apps/sales/introduction)
- [Tournaments](apps/tournaments/introduction)

With them you can manage a lot of things like: Clients, Suppliers, Employees, Invoices, Payments, Products, Assembled Products, Product Configurations, Tournaments, Matches, Teams,  etc. Call it masterdata.

[Boards](boards/introduction) is the visual tool to get things done like: tasks, workflow, lists, ect. 

You may already have questions - don't worry. We will cover every little detail in the rest of the documentation. For now, please read along so you can have a high-level understanding of what Multipass offers.

:::tip Prerequisites
The rest of the documentation assumes you know best how you want to use Multipass to organize _your_ data. All organizations are different. If you have questions on how to best structure your data, or need help doing just that, do not hesitate to contact us.

We are happy to help you get started! 
:::

## How it works {#how-it-works}

Multipass is a SaaS application. 

### From a user perspective:
- With 1 account you can access and create multiple Teams
- You can change certain settings based on the Team, like the nickname, email, etc.
- Each Team has its own separate database
- Each Team has its own set of enabled Apps
- All Apps are available to all Teams
- Each Team has its own set of Users (= people who can log in to the Team)
- Each Team has its own settings, like profile image, language, etc.
- Each User has its own preferences, like language (wip), darkmode (wip), etc

### Technically:
- It runs on our own private Cloud servers, hosted on Digital Ocean
- We use a managed database (MySQL) cluster, also hosted on Digital Ocean
- Databases are backed up daily, on S3
- Media is uploaded to S3 buckets, also hosted on Digital Ocean
- All Media can be accessed via a CDN, also hosted on Digital Ocean
- We use a custom built API to communicate with the frontend
- The frontend is built with Vue.js, backend is built with Laravel
- We use Forge to manage our servers, Envoyer to deploy, and Laravel Horizon to manage our queues
- Search is powered by Algolia
- (all) Errors are captured, sent to Flare, and reported to our Slack channel
- Currently we use a custom uptime monitoring system, but we are looking into using a 3rd party service for this
- we use a bunch of [opensource](/about/opensource) packages


## How much does Multipass cost? {#how-much-does-Multipass-cost}
We use a usage-based, block based subscription. Each Team is billed according to usage, not the number of accounts that have access to it. The more data you consume, the higher your subscription will be.

This revenue model allows for a Team of 25 people to work together on a small set of data, keeping the costs low and the ROI high. While another Team of 1 with thousands of records paying their fair share. This is our view of a fair billing system.

The exact pricing is currently being tested during our closed beta period.

## Still Got Questions? {#still-got-questions}

Check out our [FAQ](/about/faq).

## Pick Your Learning Path (WIP) {#pick-your-learning-path}


Different people have different learning styles. Feel free to pick a learning path that suits your preference - although we do recommend going over all of the content, if possible!

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/guide/quick-start.html">
    <p class="next-steps-link">Read the Guide (wip)</p>
    <p class="next-steps-caption">The guide walks you through every aspect of  Multipass in full detail.</p>
  </a>
</div>

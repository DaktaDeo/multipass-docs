<template><div><h1 id="terms-and-definitions" tabindex="-1"><a class="header-anchor" href="#terms-and-definitions" aria-hidden="true">#</a> Terms and definitions</h1>
<h2 id="account" tabindex="-1"><a class="header-anchor" href="#account" aria-hidden="true">#</a> Account</h2>
<p>Your username and password for the Mutlipass application. You have 1 account for everything that is Multipass aka you log in with this account and have instant access to all your Teams.</p>
<p>The basic info of your account is copied to the Team database you have access to. Passwords and other security info is <strong>never shared</strong> and always encrypted.</p>
<p>These <RouterLink to="/reference/models.html#human">Human</RouterLink> <em>clones</em> as I like to call them, allow you to change certain info in each Team. Maybe you have another nickname or another e-mail? you can override these with in your <RouterLink to="/reference/models.html#human">Human</RouterLink> profile!</p>
<p>All links between data inside a Team is done with this tightly linked Human clone. If you or another Team member should move on, this clone remains. Leaving all historic data intact.</p>
<h2 id="app" tabindex="-1"><a class="header-anchor" href="#app" aria-hidden="true">#</a> App</h2>
<p>The different parts of Multipass are defined by different apps. An App bundles specific functionality to achieve a certain goal.</p>
<h2 id="displayname" tabindex="-1"><a class="header-anchor" href="#displayname" aria-hidden="true">#</a> Displayname</h2>
<p>To identify each <code v-pre>Model</code> in your Team, you are <em>required</em> to give them a <code v-pre>displayname</code> that is unique. This name is shown inside Multipass on all the lists, select boxes and other UI elements.</p>
<h2 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h2>
<p>I will use the term <code v-pre>Model</code> when talking <em>about piece that holds data</em>. That means that you can substitute the word for every node of data Multipass has in that context. be it a <code v-pre>Contact</code>, <code v-pre>Label</code>, 'Human', ..</p>
<p>Model is a programmatic term and somewhat synonymous with <code v-pre>object</code></p>
</div></template>



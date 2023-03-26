<template><div><h1 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h1>
<h2 id="terms-and-definitions" tabindex="-1"><a class="header-anchor" href="#terms-and-definitions" aria-hidden="true">#</a> Terms and definitions</h2>
<h3 id="account" tabindex="-1"><a class="header-anchor" href="#account" aria-hidden="true">#</a> Account</h3>
<p>Your username and password for the Mutlipass application. You have 1 account for everything that is Multipass aka you log in with this account and have instant access to all your Teams.</p>
<p>The basic info of your account is copied to the Team database you have access to. Passwords and other security info is <strong>never shared</strong> and always encrypted.</p>
<p>These <RouterLink to="/models.html#human">Human</RouterLink> <em>clones</em> as I like to call them, allow you to change certain info in each Team. Maybe you have another nickname or another e-mail? you can override these with in your <RouterLink to="/models.html#human">Human</RouterLink> profile!</p>
<p>All links between data inside a Team is done with this tightly linked Human clone. If you or another Team member should move on, this clone remains. Leaving all historic data intact.</p>
<h3 id="app" tabindex="-1"><a class="header-anchor" href="#app" aria-hidden="true">#</a> App</h3>
<p>The different parts of Multipass are defined by different apps. An App bundles specific functionality to achieve a certain goal.</p>
<h3 id="displayname" tabindex="-1"><a class="header-anchor" href="#displayname" aria-hidden="true">#</a> Displayname</h3>
<p>To identify each <code v-pre>Model</code> in your Team, you are <em>required</em> to give them a <code v-pre>displayname</code> that is unique. This name is shown inside Multipass on all the lists, select boxes and other UI elements.</p>
<h2 id="models" tabindex="-1"><a class="header-anchor" href="#models" aria-hidden="true">#</a> Models</h2>
<p>I will use the term <code v-pre>Model</code> when talking <em>about piece that holds data</em>. That means that you can substitute the word for every node of data Multipass has in that context. be it a <code v-pre>Contact</code>, <code v-pre>Label</code>, 'Human', ..</p>
<p>Model is a programmatic term and somewhat synonymous with <code v-pre>object</code></p>
<h3 id="contact" tabindex="-1"><a class="header-anchor" href="#contact" aria-hidden="true">#</a> Contact</h3>
<ul>
<li>see <RouterLink to="/apps/contacts/models.html#contact">Apps &gt; Contacts</RouterLink></li>
</ul>
<h3 id="human" tabindex="-1"><a class="header-anchor" href="#human" aria-hidden="true">#</a> Human</h3>
<p>A Human is someone who is an active member of your team. Someone who you work with, internally. This can be someone who has an <a href="#account">Account</a> or not.</p>
<p>Humans are different from <a href="#person">Persons</a>, those are bound to a <a href="#contact">Contacts</a> and are used for external connections</p>
<p>see</p>
<ul>
<li><RouterLink to="/apps/humans/">Apps &gt; Humans</RouterLink></li>
<li><RouterLink to="/apps/contacts/">Apps &gt; Contacts</RouterLink></li>
</ul>
<h3 id="person" tabindex="-1"><a class="header-anchor" href="#person" aria-hidden="true">#</a> Person</h3>
<ul>
<li>see <RouterLink to="/apps/contacts/models.html#person">Apps &gt; Contacts</RouterLink></li>
</ul>
<h3 id="team" tabindex="-1"><a class="header-anchor" href="#team" aria-hidden="true">#</a> Team</h3>
<p>Teams are <em>the</em> core of Multipass. Each Team has his own database inside Multipass. Everything is bound to a single Team. You can however below to several Teams, with different roles.</p>
<p>A Team usualy contains several Team Members, working together; but you can create your own personal Team.</p>
<p>A Team can be anything, including:</p>
<ul>
<li>a group of people working together on in a society</li>
<li>a small company</li>
<li>your personal team containing your own family data and relationships</li>
<li>and much much more</li>
</ul>
</div></template>



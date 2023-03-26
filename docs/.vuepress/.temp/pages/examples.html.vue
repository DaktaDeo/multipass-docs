<template><div><h2 id="formatting-examples" tabindex="-1"><a class="header-anchor" href="#formatting-examples" aria-hidden="true">#</a> Formatting Examples</h2>
<div class="custom-container tip"><p class="custom-container-title">Did you know?</p>
<p>Laravel now offers Horizon, a beautiful dashboard and configuration system for your Redis powered queues. Check out the full <a href="/docs/%7B%7Bversion%7D%7D/horizon">Horizon documentation</a> for more information.</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Something to keep in mind</p>
<p>Laravel now offers Horizon, a beautiful dashboard and configuration system for your Redis powered queues. Check out the full <a href="/docs/%7B%7Bversion%7D%7D/horizon">Horizon documentation</a> for more information.</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">Be Careful!</p>
<p>Laravel now offers Horizon, a beautiful dashboard and configuration system for your Redis powered queues. Check out the full <a href="/docs/%7B%7Bversion%7D%7D/horizon">Horizon documentation</a> for more information.</p>
</div>
<p>Laravel queues provide a unified API across a variety of different queue backends, such as Beanstalk, Amazon SQS, Redis, or even a relational database. Queues allow you to defer the processing of a time consuming task, such as sending an email, until a later time. Deferring these time consuming tasks drastically speeds up web requests to your application.</p>
<p>The queue configuration file is stored in <code v-pre>config/queue.php</code>. In this file you will find connection configurations for each of the queue drivers that are included with the framework, which includes a database, <a href="https://kr.github.io/beanstalkd/" target="_blank" rel="noopener noreferrer">Beanstalkd<ExternalLinkIcon/></a>, <a href="https://aws.amazon.com/sqs/" target="_blank" rel="noopener noreferrer">Amazon SQS<ExternalLinkIcon/></a>, <a href="https://redis.io" target="_blank" rel="noopener noreferrer">Redis<ExternalLinkIcon/></a>, and a synchronous driver that will execute jobs immediately (for local use). A <code v-pre>null</code> queue driver is also included which discards queued jobs.</p>
<h3 id="sub-sub-section" tabindex="-1"><a class="header-anchor" href="#sub-sub-section" aria-hidden="true">#</a> Sub Sub Section</h3>
<p>Before getting started with Laravel queues, it is important to understand the distinction between &quot;connections&quot; and &quot;queues&quot;. In your <code v-pre>config/queue.php</code> configuration file, there is a <code v-pre>connections</code> configuration option. This option defines a particular connection to a backend service such as Amazon SQS, Beanstalk, or Redis. However, any given queue connection may have multiple &quot;queues&quot; which may be thought of as different stacks or piles of queued jobs.</p>
<p>Note that each connection configuration example in the <code v-pre>queue</code> configuration file contains a <code v-pre>queue</code> attribute. This is the default queue that jobs will be dispatched to when they are sent to a given connection. In other words, if you dispatch a job without explicitly defining which queue it should be dispatched to, the job will be placed on the queue that is defined in the <code v-pre>queue</code> attribute of the connection configuration:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment">// This job is sent to the default queue...</span>
<span class="token class-name static-context">Job</span><span class="token operator">::</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// This job is sent to the "emails" queue...</span>
<span class="token class-name static-context">Job</span><span class="token operator">::</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onQueue</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'emails'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4th-level" tabindex="-1"><a class="header-anchor" href="#_4th-level" aria-hidden="true">#</a> 4th Level</h4>
<p>In order to use the <code v-pre>database</code> queue driver, you will need a database table to hold the jobs. To generate a migration that creates this table, run the <code v-pre>queue:table</code> Artisan command. Once the migration has been created, you may migrate your database using the <code v-pre>migrate</code> command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan queue:table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Providers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Facades<span class="token punctuation">\</span>Queue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>ServiceProvider</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>Events<span class="token punctuation">\</span>JobProcessed</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>Events<span class="token punctuation">\</span>JobProcessing</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">AppServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Bootstrap any application services.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Queue</span><span class="token operator">::</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">JobProcessing</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// $event->connectionName</span>
            <span class="token comment">// $event->job</span>
            <span class="token comment">// $event->job->payload()</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name static-context">Queue</span><span class="token operator">::</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">JobProcessed</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// $event->connectionName</span>
            <span class="token comment">// $event->job</span>
            <span class="token comment">// $event->job->payload()</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Register the service provider.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



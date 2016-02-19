# Jiu Jitsu Elite
Video and Class Management Application

<table>
  <tbody>
    <tr>
      <th>Base Version</th>
      <td>v3.1.1</td>
    </tr>
    <tr>
      <th>Current Meteor Version</th>
      <td>v1.2.1</td>
    </tr>
  </tbody>
</table>

<p>This application is structured in a way to maintain organization through folder and filenaming conventions.</p>

<h3>Basic Structure</h3>

<p>An outline of the folder structure of the project.</p>

<pre><code class="lang-javascript">/both
--- /methods
------ /insert
------ /update
------ /remove
------ /read
--- /modules
--- /routes
/client
--- /helpers
--- /lib
------ /vendor
--- /modules
--- /stylesheets
------ /components
------ /objects
------ /tools
--- /templates
------ /authenticated
------ /globals
------ /layouts
------ /public
/collections
/packages
--- /npm-container
/private
--- /email
------ /templates
/public
/server
--- /admin
--- /modules
--- /publications
/tests
</code></pre>

<h3>Explanation of folder structure</h3>

<p>A directory-by-directory explanation of where files live in Base and their intended purpose.</p>

<h4>/both</h4>

<p>The <code>/both</code> directory is designed to hold code intended to run on both the client and the server. It includes:</p>

<ul>
<li><code>/methods</code> used to store Meteor methods. These are located here to allow for stubbing of methods on the client (latency compensation).</li>
<li><code>/modules</code> holds <a href="/snippets/using-the-module-pattern-with-meteor/">modules</a> designed for use on the client and server.</li>
<li><code>/routes</code> stores client-side routes for the application. These are located here to work in conjunction with the <a href="https://github.com/kadirahq/flow-router#fast-render">Fast Render</a> package.</li>
<li><code>startup.js</code> stores a call to <code>Meteor.startup()</code>, intended to run code on startup of the client and server. Links to the <code>/server/modules/startup.js</code> module.</li>
</ul>

<h4>/client</h4>

<p>The <code>/client</code> directory is designed to hold code intended to run on the client. It includes:</p>

<ul>
<li><code>/helpers</code> contains helper files for use on the client. By default, includes <a href="http://docs.meteor.com/#/full/template_registerhelper">template helpers</a> for Flow Router and generic global template helpers.</li>
<li><code>/lib</code> empty by default, intended for storing JavaScript library files. Includes a <code>/vendor</code> directory intended for storing third-party library code not added via packages.</li>
<li><code>/modules</code> holds <a href="/snippets/using-the-module-pattern-with-meteor/">modules</a> designed for use on the client.</li>
<li><code>/stylesheets</code> holds CSS stylesheets (written in Sass) for the application.</li>
<li><code>/templates</code> holds template markup and logic for Blaze templates written in the application. Includes four sub-directories: <code>/authenticated</code> for templates used with logged-in users, <code>/globals</code> for templates used globally throughout the application, <code>/layouts</code> for layout templates used in conjunction with the router, and <code>/public</code> for templates accessible to logged-out users.</li>
<li><code>startup.js</code> stores a call to <code>Meteor.startup()</code>, intended to run code on startup of the client. Links to the <code>/client/modules/startup.js</code> module.</li>
</ul>

<h4>/collections</h4>

<p>The <code>/collections</code> directory is designed to hold code for collection definitions. Its structure suggests storing all code related to a collection in a file named after the collection <code>collection.js</code>. For example, a collection named <code>documents</code> would assume a file <code>documents.js</code> in this directory. </p>

<p>Here, we can also find a file <code>users.js</code> that adds <a href="http://docs.meteor.com/#/full/allow">allow</a> and <a href="http://docs.meteor.com/#/full/deny">deny</a> rules limiting any write operations on the users collection from the client.</p>

<h4>/packages</h4>

<p>The <code>/packages</code> directory is included as a consequence of the <code>meteorhacks:npm</code> package which adds an <code>npm-container</code> package here for storing references to <a href="http://npmjs.com">NPM</a> packages installed using the package.</p>

<h4>/private</h4>

<p>The <code>/private</code> directory is designed to hold static asset code intended for access on the server. By default this includes a single directory <code>/email</code> which includes another directory <code>/templates</code>, intended for storing <a href="/snippets/using-the-email-package/">HTML email templates</a>.</p>

<h4>/public</h4>

<p>The <code>/public</code> directory is designed to hold static assets like images, documents, and other files intended for access by the public. By default, it includes a single <code>favicon.ico</code> file, branded for The Meteor Chef.</p>

<h4>/server</h4>

<p>The <code>/server</code> director is designed to hold code intended to run on the server. It includes:</p>

<ul>
<li><code>/admin</code> used to hold code related to administrative functions. Contains a single <code>reset-password.js</code> file which defines values for the email sent when a user requests their password reset.</li>
<li><code>/modules</code> holds <a href="/snippets/using-the-module-pattern-with-meteor/">modules</a> designed for use on the server.</li>
<li><code>/publications</code> holds <a href="/snippets/publication-and-subscription-patterns">Meteor publications</a> that can be subscribed to from the client.</li>
<li><code>startup.js</code> stores a call to <code>Meteor.startup()</code>, intended to run code on startup of the server. Links to the <code>/server/modules/startup.js</code> module.</li>
</ul>

<h4>/tests</h4>

<p>The <code>/tests</code> directory is designed to hold code for automated tests. This directory is currently empty but will see Base-specific tests added in the future.</p>

<h4>.editorconfig</h4>

<p>The <code>.editorconfig</code> file defines how a text editor should format code following the <a href="http://editorconfig.org/">EditorConfig</a> standard.</p>

<h4>.gitignore</h4>

<p>The <code>.gitignore</code> file lists files and directories which should be ignored by <a href="http://git-scm.com">Git</a>.</p>

<h4>.jshintrc</h4>

<p>The <code>.jshintrc</code> file lists configuration parameters for use with the <a href="http://jshint.com/">JSHint</a> JavaScript linting tool.</p>

<h4>application.html</h4>

<p>The <code>application.html</code> file includes the HTML <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> tags for the application.</p>

<h4>package.json</h4>

<p>The <code>package.json</code> file is used to define the contents of the application as well as define a handful of NPM scripts used for automating interaction with Base like starting up the server with a settings file and deploying the application to <code>meteor.com</code> hosting.</p>

<h4>packages.json</h4>

<p>The <code>packages.json</code> file is added automatically by the <code>meteorhacks:npm</code> package and is intended to hold a list of <a href="http://npmjs.com">NPM</a> package names and versions that should be loaded into the application.</p>

<h4>README.md</h4>

<p>A mostly-empty <code>README</code> file which contains a link back to the documentation on this site as well as current version and license information for Base.</p>

<h4>settings-development.json</h4>

<p>The <code>settings-development.json</code> file is intended to hold configuration keys for the application (e.g. third-party API keys). Though not included, this file suggests the addition of a <code>settings-production.json</code> file. This file is included to suggest the separation of API keys and configuration used for development purposes from those used for production purposes.</p>




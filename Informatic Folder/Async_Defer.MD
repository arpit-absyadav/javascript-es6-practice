## `Asynchronous vs Deferred JavaScript`

> By default, the parsing of the HTML code, during page loading, is paused until the script has not stopped executing. It means, if the server is slow or the script is particularly heavy, then the webpage is displayed with a delay.

```javascript
<script  src="script.js"> // Normal loading
```

#### `Asynchronous`:-

> This attribute is only available for externally **CDN** located script files. When an external script has this attribute, the file can be downloaded while the HTML document is still parsing. Once it has been downloaded, the parsing is paused for the script to be executed.

```javascript
<script  async  src="script.js"> // Asynchronous loading
```

#### `Deferred`:-

> Like an asynchronously loaded script, the file can be downloaded while the HTML document is still parsing. However, even if the file is fully downloaded long before the document is finished parsing, the script is not executed until the parsing is complete.

```javascript
<script  defer  src="script.js"> // Deferred loading
```

> [Full Explanation](https://bitsofco.de/async-vs-defer/)

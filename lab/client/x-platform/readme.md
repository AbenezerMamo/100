## Cross platform solutions


X-Callback-URL

[scheme]://[host]/[version]/[action]?[x-callback parameters]&[action parameters]

Actions:
1. lookup


Two-way communication:
These are ddenoted by the x- Namespace

1. x-Source
   1. Friendly name (app)
2. x-success
   1. Default - No redirect
3. x-error
   1. parameters
      1. errorCode
      2. errorMessage

Example full URL:
"terminology://x-callback-url/1.0/replace?text=white&x-source=MyAppName&x-success=myappurl://x-callback-url/1.0/returnAction"
(https://changelog.com/posts/xcallbackurl-iphone-app-for-testing-the-x-callback-url-i)

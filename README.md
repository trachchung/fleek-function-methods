## Description
RESTful methods (GET, POST, etc.) template for Fleek functions

[Fleek functions](https://fleek.xyz/docs/cli/functions/)

```bash
fleek functions create --name fleek-function-methods
fleek functions deploy --name fleek-function-methods --path index.js
```

```bash
# GET Request with query
curl -X GET \
  https://thundering-whale-tall.functions.on-fleek.app/?username=xyz&password=xyz

# POST Request with body
curl -X POST \
    -H "Accept: application/json" \
    -d '{"username":"xyz","password":"xyz"}' \
    https://thundering-whale-tall.functions.on-fleek.app
```

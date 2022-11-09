# read-version

a github 3rdparty actions that read version from multiple platform.

# Usages

## with git tags

```yaml
- name: Checkout
  uses: actions/checkout@v2
  with:
    fetch-depth: 0

...

- name: Read version
  uses: devecorsoft/read-version@v0
  with:
    destination: "git-tag"
```

> :memo: **Note:** keep in mind that this action is working with git tags, so you have to fetch all history for tags with `fetch-depth: 0` when checkout.


# license

MIT

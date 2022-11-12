# read-version

a github 3rdparty actions that read version from multiple platform.

# Usages

## with git tags

> :memo: **Note:** keep in mind that this action is working with git tags, so you have to fetch all history for tags with `fetch-depth: 0` when checkout.

```yaml
- name: Checkout
  uses: actions/checkout@v2
  with:
    fetch-depth: 0

...

- name: Read version
  id: read_version
  uses: devecorsoft/read-version@v0.1.0
  with:
    destination: "git-tag"

- name: Echo version
  run: echo ${{ steps.read_version.outputs.version }}
```

## with node

```yaml
- name: Read version
  uses: devecorsoft/read-version@v0.1.0
  with:
    destination: "node"

- name: Echo version
  run: echo ${{ steps.read_version.outputs.version }}
```

## with gradle

```yaml
- name: Read version
  uses: devecorsoft/read-version@v0.1.0
  with:
    destination: "gradle"

- name: Echo version
  run: echo ${{ steps.read_version.outputs.version }}
```

## with pip

> :memo: **Note:** you probably don't need this, you can easily get the version of your project by command: `python setup.py -V`, and this is exactly what I did.

```yaml
- name: Read version
  uses: devecorsoft/read-version@v0.1.0
  with:
    destination: "pip"

- name: Echo version
  run: echo ${{ steps.read_version.outputs.version }}
```

# license

MIT

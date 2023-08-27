# read-version

a customized github action that read version of your project from multiple platforms, such as `git-tag`, `node`, `gradle` and `pip`.

# Usages

## with git tags

```yaml
- name: Read version
  id: read_version
  uses: devecorsoft/read-version@v1
  with:
    destination: "git-tag"

- name: Echo version
  run: echo ${{ steps.read_version.outputs.version }}
```

> :memo: **Note:** alternatively, to query the version with this command: `git pull -t > /dev/null && git tag --sort creatordate | tail -n 1`.

## with node

```yaml
- name: Read version
  id: read_version
  uses: devecorsoft/read-version@v1
  with:
    destination: "node"

- name: Echo version
  run: echo ${{ steps.read_version.outputs.version }}
```

## with gradle

```yaml
- name: Read version
  id: read_version
  uses: devecorsoft/read-version@v1
  with:
    destination: "gradle"

- name: Echo version
  run: echo ${{ steps.read_version.outputs.version }}
```

## with pip

> :memo: **Note:** you probably don't need this, you can easily get the version of your project by command: `python setup.py -V`, and this is exactly what I did.

```yaml
- name: Read version
  id: read_version
  uses: devecorsoft/read-version@v1
  with:
    destination: "pip"

- name: Echo version
  run: echo ${{ steps.read_version.outputs.version }}
```

# license

MIT

# tslint-sane

A sane [tslint](https://palantir.github.io/tslint/) config, that attempts to provide only rules that will reduce bugs, not try and force a code style.


## Install

1. Install with:

    ```shell
    npm i tslint-sane
    ```

    or using yarn

    ```shell
    yarn add tslint-sane
    ```

2. Then in your tslint config, set the extends property to `tslint-sane`.

    Examples:

    `tslint.json`
    ```JSON
    {
      "extends": "tslint-sane",
      "rules": {
         // your custom rules
      }
    }
    ```

    `tslint.yaml`
    ```YAML
    extends: tslint-sane
    rules:
      # your custom rules
    ```

## Opinionated Version

Alongside the base settings, there is an opinionated rule-set that adds in rules for styling. To use it, simply extend `tslint-sane/opinionated` instead of `tslint-sane`.


## Rules

The yaml files in the repository are commented throughout so you can easily see which rules are applied and what they do.
Some of the rules won't have any effect unless you specify a project (via the `-p`/`--project` flag) to the tslint cli:

```
tslint --project ./path/to/tsconfig.json
```
or
```
tslint -p ./path/to/tsconfig.json
```
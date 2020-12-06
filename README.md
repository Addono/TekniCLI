teknicli
========

Control your teknilights from the command line.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/teknicli.svg)](https://npmjs.org/package/teknicli)
[![Codecov](https://codecov.io/gh/Addono/teknicli/branch/master/graph/badge.svg)](https://codecov.io/gh/Addono/teknicli)
[![Downloads/week](https://img.shields.io/npm/dw/teknicli.svg)](https://npmjs.org/package/teknicli)
[![License](https://img.shields.io/npm/l/teknicli.svg)](https://github.com/Addono/teknicli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g teknicli
$ teknicli COMMAND
running command...
$ teknicli (-v|--version|version)
teknicli/0.0.0 darwin-x64 node-v15.2.0
$ teknicli --help [COMMAND]
USAGE
  $ teknicli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`teknicli brightness [BRIGHTNESS]`](#teknicli-brightness-brightness)
* [`teknicli help [COMMAND]`](#teknicli-help-command)
* [`teknicli off`](#teknicli-off)
* [`teknicli on`](#teknicli-on)

## `teknicli brightness [BRIGHTNESS]`

Set the brightness of the light

```
USAGE
  $ teknicli brightness [BRIGHTNESS]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/brightness.ts](https://github.com/Addono/teknicli/blob/v0.0.0/src/commands/brightness.ts)_

## `teknicli help [COMMAND]`

display help for teknicli

```
USAGE
  $ teknicli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `teknicli off`

Turns the light off

```
USAGE
  $ teknicli off

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/off.ts](https://github.com/Addono/teknicli/blob/v0.0.0/src/commands/off.ts)_

## `teknicli on`

Turns the light on with maximum brightness

```
USAGE
  $ teknicli on

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/on.ts](https://github.com/Addono/teknicli/blob/v0.0.0/src/commands/on.ts)_
<!-- commandsstop -->

teknicli
========

Control your teknilights from the command line.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/teknicli.svg)](https://npmjs.org/package/teknicli)
[![CircleCI](https://circleci.com/gh/Addono/teknicli/tree/master.svg?style=shield)](https://circleci.com/gh/Addono/teknicli/tree/master)
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
* [`teknicli hello [FILE]`](#teknicli-hello-file)
* [`teknicli help [COMMAND]`](#teknicli-help-command)
* [`teknicli off [FILE]`](#teknicli-off-file)
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

## `teknicli hello [FILE]`

describe the command here

```
USAGE
  $ teknicli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ teknicli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Addono/teknicli/blob/v0.0.0/src/commands/hello.ts)_

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

## `teknicli off [FILE]`

describe the command here

```
USAGE
  $ teknicli off [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/off.ts](https://github.com/Addono/teknicli/blob/v0.0.0/src/commands/off.ts)_

## `teknicli on`

describe the command here

```
USAGE
  $ teknicli on

OPTIONS
  -b, --brightness=brightness  [default: 100] The brightness percentage to set the light to
  -h, --help                   show CLI help
```

_See code: [src/commands/on.ts](https://github.com/Addono/teknicli/blob/v0.0.0/src/commands/on.ts)_
<!-- commandsstop -->

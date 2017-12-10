# justfile
#
# Holds some misc scripts that I need to run on this project every once in a while.
#
# USAGE:
#
#    just
#
# INSTALL:
#
#    https://github.com/casey/just#installation
#

green = "\\033[0;32m"
red = "\\033[0;31m"
clear = "\\033[0m"
notFoundMessage = "\\033[0;31mmissing\\033[0m"
foundMessage = "\\033[0;32mok\\033[0m"

# list the tasks
_default:
  @just --list

# check the global-dependencies
@globals:
  echo
  echo "       fd: `which fd > /dev/null && echo "{{ green }}$(fd --version | cut -d" " -f2){{ clear }}" || echo "{{ notFoundMessage }}"`"
  echo "     yarn: `which yarn > /dev/null && echo "{{ green }}$(yarn --version){{ clear }}" || echo "{{ notFoundMessage }}"`"
  echo "     node: `which node > /dev/null && echo "{{ green }}$(node -v | sed s/v//){{ clear }}" || echo "{{ notFoundMessage }}"`"
  echo

# install dependencies -- only needed if something goes wrong with the silly yarn nested scoped packages bug
@deps:
  rm -rf node_modules
  yarn
  # kill nested react typings ... ugh
  fd -p -I -td "@types.*@types/react" node_modules/@types -x rm -rf
  
# cuts the distributable builds
@dist:
  yarn clean
  rm -rf node_modules
  yarn
  yarn typecheck
  yarn lint
  yarn test
  yarn clean
  yarn compile
  yarn dist


#!/bin/bash
SCRIPT=$(readlink -f "$0")

# Absolute path this script is in
SCRIPTPATH=$(dirname "$SCRIPT")

source "$SCRIPTPATH/../.env"

echo "registry=https://yoguisan.pkgs.visualstudio.com/_packaging/yoguisan/npm/registry/
; begin auth token
//yoguisan.pkgs.visualstudio.com/_packaging/yoguisan/npm/registry/:username=yoguisan
//yoguisan.pkgs.visualstudio.com/_packaging/yoguisan/npm/registry/:_password=$AZURE_PAT
//yoguisan.pkgs.visualstudio.com/_packaging/yoguisan/npm/registry/:email=npm requires email to be set but doesn't use the value
//yoguisan.pkgs.visualstudio.com/_packaging/yoguisan/npm/:username=yoguisan
//yoguisan.pkgs.visualstudio.com/_packaging/yoguisan/npm/:_password=$AZURE_PAT
//yoguisan.pkgs.visualstudio.com/_packaging/yoguisan/npm/:email=npm requires email to be set but doesn't use the value
; end auth token
" > "$SCRIPTPATH/../.npmrc"
#!/bin/bash

set -e




npm start &

node Seeders/pizzaseeder.js 
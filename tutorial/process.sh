#!/bin/sh
gregorio $1.gabc
lualatex ${1}-main.tex
okular ${1}-main.pdf
rm -f $1.tex ${1}-main.pdf ${1}-main.aux ${1}-main.gaux ${1}-main.log


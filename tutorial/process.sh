#!/bin/sh
lualatex --shell-escape ${1}-main.tex
convert -density 174 ${1}-main.pdf -trim -quality 100 -transparent white $1.png
rm -f $1-*.gtex ${1}-main.pdf ${1}-main.aux ${1}-main.gaux ${1}-main.log ${1}-main.synctex.gz


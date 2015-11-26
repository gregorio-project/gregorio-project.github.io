#!/bin/sh
lualatex --shell-escape ${1}-main.tex
convert -density 400 ${1}-main.pdf -trim -quality 100 -resize 640 $1.png
rm -f $1-*.gtex ${1}-main.pdf ${1}-main.aux ${1}-main.gaux ${1}-main.log ${1}-main.synctex.gz


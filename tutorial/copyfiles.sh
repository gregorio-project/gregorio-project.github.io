#!/bin/sh
FROM=$1
TO=$2
FROMMAIN=${FROM}-main
TOMAIN=${TO}-main

cp $1.gabc $2.gabc
cat $FROMMAIN.tex | sed -e "/include/s/$FROM/$TO/" > $TOMAIN.tex

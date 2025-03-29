# !/bin/bash

echo "Hello World"
if [ ! -d automated_dr ]
then
mkdir automated_dr
else
cd automated_dr && touch newScript
fi

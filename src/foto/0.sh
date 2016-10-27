#!/bin/bash
(while read filename url
do
  wget $url -O $filename
done) < wget-list.txt

#!/usr/bin/env bash

export $(egrep -v '^#' .env | xargs)

aws s3 sync --delete ./build s3://${AWS_S3_BUCKET}

# fix mime type for js files after sync
aws s3 cp s3://${AWS_S3_BUCKET} s3://${AWS_S3_BUCKET} \
  --exclude "*" \
  --include "*.js" \
  --no-guess-mime-type \
  --content-type "application/javascript" \
  --metadata-directive "REPLACE" \
  --recursive

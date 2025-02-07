. $(dirname $0)/main.sh
. $(dirname $0)/parse-options.sh

S3_BUCKET_URL=s3://home.staging.prepleaf.com
S3_CURRENT_BASE_URL=$S3_BUCKET_URL/current
S3_BACKUP_DIR=$S3_BUCKET_URL/old
OUTPUT_BASE_DIR=device-specific-out/staging
PROFILE=home-staging.frontend
DISTRIBUTIONID=EORJQW39TY1GJ

if [ $MOBILE = 1 ]
then
	push_for_device mobile $S3_CURRENT_BASE_URL $PROFILE $OUTPUT_BASE_DIR $S3_BACKUP_DIR staging
fi

if [ $DESKTOP = 1 ]
then
	push_for_device desktop $S3_CURRENT_BASE_URL $PROFILE $OUTPUT_BASE_DIR $S3_BACKUP_DIR staging
fi

if [ $TABLET = 1 ]
then
	push_for_device tablet $S3_CURRENT_BASE_URL $PROFILE $OUTPUT_BASE_DIR $S3_BACKUP_DIR staging
fi

echo "Cleaning" $OUTPUT_BASE_DIR
rm -rf $OUTPUT_BASE_DIR
echo "Removed" $OUTPUT_BASE_DIR

invalidate_cloudfront $DISTRIBUTIONID "/*" $PROFILE

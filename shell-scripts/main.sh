export_for_device()
{
	ENVIRONMENT=$1
	DEVICE=$2
	OUTPUT_DIR=$3
	MOVE_TO=$4
	MOVE_TO_FULL_PATH=$MOVE_TO/$DEVICE
	echo "-------------"
	echo "Creating build for" $DEVICE

	NODE_ENV=$ENVIRONMENT DEVICE=$DEVICE yarn export

	echo "Successfully created build for" $DEVICE

	echo "Moving build to directory: " $MOVE_TO_FULL_PATH
	cp -R $OUTPUT_DIR $MOVE_TO_FULL_PATH
	echo "Successfully moved build to directory: " $MOVE_TO_FULL_PATH
	echo "-------------"
}

push_to_bucket()
{
	LOCAL_DIR=$1
	S3_FULL_URL=$2
	PROFILE=$3
	S3_BACKUP_URL=$4
    ENVIRONMENT=$5
	if [ -z "$S3_BACKUP_URL" ]
	then
		echo "No backup url specified. Please set backup url."
	else
		echo "Backing up previous version."
		echo "Moving" $S3_FULL_URL "to" $S3_BACKUP_URL
		# aws s3 mv --recursive $S3_FULL_URL $S3_BACKUP_URL --profile $PROFILE
		echo "Moved Successfully"
	fi
	echo "Starting sync process for non-cachable items"
	aws s3 sync $LOCAL_DIR $S3_FULL_URL --exclude ".DS_Store" --exclude "*.js" --exclude "*.ico" --exclude "*.png" --exclude "*.css" --delete --profile $PROFILE
	echo "End of sync process for out/ except out."

	

	aws s3 cp $LOCAL_DIR $S3_FULL_URL --include "*.ico" --include "*.png" --cache-control max-age=630720 --profile $PROFILE

	echo "Starting sync process for out/_next"
	aws s3 sync $LOCAL_DIR $S3_FULL_URL --include "*.css" --include ".js" --delete --cache-control max-age=31536000 --profile $PROFILE
	echo "End of sync process for out/_next"

	aws s3 cp webmaster/robots.$ENVIRONMENT.txt $S3_FULL_URL/robots.txt --profile $PROFILE
	aws s3 cp webmaster/sitemap.xml $S3_FULL_URL/sitemap.xml --profile $PROFILE
}

push_for_device()
{
	DEVICE=$1
	S3_CURRENT_BASE_URL=$2
	PROFILE=$3
	OUTPUT_BASE_DIR=$4
	S3_BACKUP_DIR=$5
    ENVIRONMENT=$6
	echo "******"
	echo "Pushing build for device " $1
	push_to_bucket $OUTPUT_BASE_DIR/$DEVICE $S3_CURRENT_BASE_URL/$DEVICE $PROFILE $S3_BACKUP_DIR/$1 $ENVIRONMENT
	echo "Pushed build for device " $1 
}

invalidate_cloudfront()
{
	DISTRIBUTIONID=$1
	PATHS=$2
	PROFILE=$3
	echo "Invalidating cloudfront cache."
	aws cloudfront create-invalidation --distribution-id $DISTRIBUTIONID --paths "/*" --profile $PROFILE
	echo "Invalidated cloudfront cache."
}


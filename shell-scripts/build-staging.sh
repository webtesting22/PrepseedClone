. $(dirname $0)/main.sh
. $(dirname $0)/parse-options.sh

ENVIRONMENT=staging
DEVICE_SPECIFIC_OUTPUT_BASE_DIR=device-specific-out/$ENVIRONMENT
rm -rf $DEVICE_SPECIFIC_OUTPUT_BASE_DIR
mkdir -p $DEVICE_SPECIFIC_OUTPUT_BASE_DIR
OUTPUT_DIR=__sapper__/export

if [ $MOBILE = 1 ]
then
	export_for_device $ENVIRONMENT mobile $OUTPUT_DIR $DEVICE_SPECIFIC_OUTPUT_BASE_DIR
fi

if [ $DESKTOP = 1 ]
then
	export_for_device $ENVIRONMENT desktop $OUTPUT_DIR $DEVICE_SPECIFIC_OUTPUT_BASE_DIR
fi

if [ $TABLET = 1 ]
then
	export_for_device $ENVIRONMENT tablet $OUTPUT_DIR $DEVICE_SPECIFIC_OUTPUT_BASE_DIR
fi

rm -rf $OUTPUT_DIR

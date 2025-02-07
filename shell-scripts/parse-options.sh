TABLET=0
MOBILE=0
DESKTOP=0
ENVIRONMENT='NONE'

while getopts ':d:e:' c
do
    case $c in
        d) 
            if [ $OPTARG = mobile ]
            then
                MOBILE=1
            fi  
            if [ $OPTARG = desktop ]
            then
                DESKTOP=1
            fi
            if [ $OPTARG = tablet ]
            then
                TABLET=1
            fi
            ;;
        e)
            ENVIRONMENT=${OPTARG}
    esac
done

if [ $ENVIRONMENT != 'staging' ] && [ $ENVIRONMENT != 'production' ] && [ $ENVIRONMENT != 'testing' ]
then
    echo "$ENVIRONMENT is not a valid environment"
    echo "Valid environments: testing, staging, production"
    exit 1
fi

if [ $MOBILE = 0 -a $DESKTOP = 0 -a $TABLET = 0 ]
then
    MOBILE=1
    DESKTOP=1
    TABLET=1
fi

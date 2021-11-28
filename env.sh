#! /bin/sh

if [ ! $1 ];
  then
    echo "use an environment value : development or production";
  else
    echo  mode $1 ;
    sed 's/envs\..*;/envs\.'"$1"';/g' ./src/env/actualEnvironment.ts >> temp;
    rm ./src/env/actualEnvironment.ts;
    mv temp ./src/env/actualEnvironment.ts;
fi

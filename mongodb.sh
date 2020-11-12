imagesName="mongo-retail"
version="1"
containerName="mongodb-$version"
command="docker run -p 30001:27017 -d  \
	   -v $(pwd)/mongo/mongodb:/data/db \
     --name $imagesName $containerName "


if docker images | grep -Eq "${containerName}"; then
  echo "skip build images"
else
  cd mongo/ && docker build -t $containerName . 
fi;


if docker ps -a --format '{{.Names}}' | grep -Eq "^${imagesName}\$"; then
  if docker ps -a --filter 'exited=0' | grep -Eq "${imagesName}"; then
    docker start mongo-retail
  else
    echo 'it is running exits';
  fi;
else
  $command;
fi;


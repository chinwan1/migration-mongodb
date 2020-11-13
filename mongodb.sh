imagesName="mongo-retail"
version="1"
containerName="mongodb-$version"
command="docker run -p 30001:27017 -d  \
	   -v $(pwd)/mongo/mongodb:/data/db \
     --name $imagesName $containerName "

source mongo/function.sh


buildImages $containerName



if docker ps -a --format '{{.Names}}' | grep -Eq "^${imagesName}\$"; then
  if docker ps -a --filter 'exited=0' | grep -Eq "${imagesName}"; then
    docker start mongo-retail
  elif docker ps -a -f name=mongo-retail  -q > /dev/null; then
     docker start $(docker ps -a -f name=mongo-retail  -q)
  else
    echo 'it is running exits';
  fi;
else
  $command;
fi;


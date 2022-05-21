TAG=20220522-0044
REPO=docker-admin-index

docker build -t pudding/$REPO:$TAG .
docker push pudding/$REPO:$TAG
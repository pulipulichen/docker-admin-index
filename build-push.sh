TAG=20220506-1643
REPO=docker-admin-index

docker build -t pudding/$REPO:$TAG .
docker push pudding/$REPO:$TAG
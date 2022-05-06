TAG=20220506-2241
REPO=docker-admin-index

docker build -t pudding/$REPO:$TAG .
docker push pudding/$REPO:$TAG
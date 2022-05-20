TAG=20220520-1731
REPO=docker-admin-index

docker build -t pudding/$REPO:$TAG .
docker push pudding/$REPO:$TAG
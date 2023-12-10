# url-shortner

## How to run

### Docker

docker pull mongo
docker run -d -p 27017:27017 --network network-1 --name mongodb mongo

docker build . -t url-shortner

docker run -p 8080:8080 -v .:/usr/src/app url-shortner

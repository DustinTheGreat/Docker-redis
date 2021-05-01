# Docker-redis
Just some Saturday Morning fun using Docker with Redis and Nginx

# Run
Install Docker and run
	sudo docker build -t docker-redis .
	sudo docker run -v ${pwd}:/app:ro -v app/node_modules --env-file ./.env -p 5000:3003 -d --name redis-con docker-redis

# Debug
    sudo docker exec -it redis-con bash



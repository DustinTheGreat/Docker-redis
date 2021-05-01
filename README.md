# Docker-redis
Practice using Docker with Redis and Nginx

#Run
Install Docker and run 
`

	sudo docker build -t docker-redis .
	sudo docker run -v ${pwd}:/app -p 3003:3003 -d --name redis-con docker-redis
`
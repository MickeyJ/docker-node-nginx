#Docker - Nginx - Node - Webpack

 - Go Install Docker
 
-----------------

__Npm install__

```bash

$ chmod +x install.sh && ./install.sh

```
---

__Start Services__

```bash

$ docker-compose up

# or run in background
$ docker-compose up -d

```

 - running nginx at [localhost:80](http://localhost)
 - running app at [localhost:3030](http://localhost:3030)
 - running api at [localhost:9090](http://localhost:9090)

-----------------

__Logs__

```bash

$ docker-compose logs

```

-----------------

__Stop/Remove Services__

```bash

$ docker-compose stop
$ docker-compose rm -f

```

-----------------

__Build/Start Services__

```bash

$ docker-compose up --build

# or build and run in background
$ docker-compose up -d --build

```

-----------------

__Handling Images__

```bash

# list all
$ docker images

# remove image
$ docker rmi <image_id>

# remove all
$ docker rmi $(docker images -a -q)

```

-----------------

__Handling Processes__

```bash

# list running
$ docker ps

# list all in memory
$ docker ps -a

# stop all
$ docker stop $(docker ps -a -q)

# remove all
$ docker rm $(docker ps -a -q)

```


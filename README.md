#Docker - Nginx - Node - Webpack

 - Go Install Docker
 
-----------------

__Npm install__

```

$ chmod +x install.sh && ./install.sh

```
---

__Start Services__

```

$ docker-compose up

# or run in background
$ docker-compose up -d

```

 - running nginx at [localhost](http://localhost)
 - running app at [localhost:3030](http://localhost:3030)
 - running server at [localhost:9090](http://localhost:9090)

-----------------

__Logs__

```

$ docker-compose logs

```

-----------------

__Stop/Remove Services__

```

$ docker-compose stop
$ docker-compose rm -f

```

-----------------

__Build/Start Services__

```

$ docker-compose up --build

# or build and run in background
$ docker-compose up -d --build

```
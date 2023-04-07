### Commands

- Builds source code if necessary and starts spring boot server on 8080 port
```bash
./gradlew bootRun
```

- Builds source code if necessary, sets the active profile `local` and starts spring boot server on 8080 port
```bash
./gradlew bootRun --args='--spring.profiles.active=local'
```

- Cleans all build files and executes all build, test tasks
```bash
./gradlew clean build
```

- Executes project tests
```bash
./gradlew test
```



### Database
Launching PostgreSQL database with Docker container:

- launch and init database

```bash
docker-compose up -d
```

- launch already created database

```bash
docker start POSTGRES_DB
```

- Interact with database from terminal

```bash
docker exec -it POSTGRES_DB psql -U postgres
```

- recreate db / cleanup

```bash
docker-compose down -v && docker-compose up -d
```
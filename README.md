# Password Validator

### Requirements:

* Node.js (14.x)
* NPM
* TypeScript
* Git
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community) optional.

#### 🎁 If you are a fan of docker, then pull the [docker image](https://hub.docker.com/r/sazal/typescript-password-validator) by following the commands:

```bash
docker pull sazal/typescript-password-validator
```


Let's clone the repository on your machine.

The application includes the following files and folders.

- `src` - Code for the application written in TypeScript, Express.js.
- `cli` - Node cli script which can be performed from terminal.
- `__tests__` - to test all the features.
- `.env.example` - A sample of .env which can be helpful for configuration.


## Installation and Configuration

Let's move to the cloned directory with your terminal.

To install, build, and start the application for the first time, run the following commands in your shell using `makefile` (only for macOS and Linux):

```bash
make install
```

Let's rename from `.env.example` to `.env` and make sure all the necessary information is correct:

```bash
PORT=3000

DB_HOST=localhost
DB_PORT=
DB_DATABASE=
DB_USER=
DB_PASSWORD=
```

Already done? Cool! You are almost ready to enjoy the app. ⛳️


### Build:
```
make build
```

### Run:
```bash
make start
```

### Test:
```bash
make test
make test-unit
```


### cli:
Oh! You want to try the application cli feature from terminal
<br>
```bash
make node-cli
```

### lint:
```
make lint
```
### lintfix:
```
make lintfix
```

#### 🎯 I know, you liked it.
To learn more, you can use the following commands: 
```
make help
```

#### At the same time, you can use the default `npm` commands like:
```bash
npm i
npm run build
npm run start
npm run cli
```

#### 🥇 Congrats!! You are good to go

#### tada! 🎉






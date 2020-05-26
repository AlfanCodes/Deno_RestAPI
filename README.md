# Deno Rest API

Simple Rest API using Deno

run server :

```
deno run --allow-net index.ts
```

run server using drun :

```
drun --entryPoint=./index.ts --cwd=./
```

##### Change IP

Change IP address to your local machine IP address so that the client app can connect

```
const app = new Application({ hostname: "192.168.100.5", port: 3000 });
```

##### Mobile Apps

[Flutter mobile app](https://github.com/AlfanCodes/flutter_deno_api)
[React Native mobile app](https://github.com/AlfanCodes/RN_Deno_API)


##### Third Party Modules

1. [Deno Train](https://deno.land/x/denotrain)
2. [Drun (Deno runner)](https://deno.land/x/drun)

##### AlfanCodes

[Telegram Group](https://t.me/denoID)

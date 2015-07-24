# prepare

```bash
npm install aws-sdk
npm install commander
npm ejs
```

# goal

```sh
npm run-local my-lambda1 lambda1.json # run my-lambda1.js at your local machine. 
npm run my-lambda1 # run my-lambda at AWS.
npm test my-lambda1 # test files in test/lambda1/*
npm test         # test files in test/*
npm deploy my-lambda1 # deploy lambdas/my-lambda1.js to AWS.
npm deploy       # lambda/ # deploy lambds/*.js to AWS.
npm delete my-lambda1
```

# path

```text
  ./
  |-lambdas/ your lambda source codes.
  |-libs/    your libraries.
  |-events/ input datas for run-local.
  |-tests/ your test source codes.
  |-deploys/ deploy configurations.
  |-node_modules/
```

# references

- [AWS Lambdaの関数をnpmでパッケージ管理](http://qiita.com/imaifactory/items/ac81b4a3ff4a5f5dec85)
- [imaifactory/myFirstLambda](https://github.com/imaifactory/myFirstLambda/blob/master/package.json)

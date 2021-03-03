# How to run the project

## install dependencies

```sh
yarn install

OR

npm install
```

## run unit test cases

```sh
yarn test:unit
```

## run integration test cases

```sh
yarn test:int
```

## run api server

```sh
yarn start
```

## api calling and its output

Note: If you don't pass any number as input, by default it will calculate fizzbuzz for 1 to 100 numbers

1 to 100 FizzBuzz numbers

```sh
curl -H "Content-Type: application/json" -X GET http://localhost:8000/fizzbuzz
```

OUTPUT

```sh
[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97,98,"Fizz","Buzz"]
```

You can pass number as paramater

```sh
curl -H "Content-Type: application/json" -X GET http://localhost:8000/fizzbuzz/10
```

OUTPUT

```sh
[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz"]
```

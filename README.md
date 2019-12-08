# Market List Application - Backend

This is the back end API of a Market List Application, built throughout the [Tech Returners](https://techreturners.com) Your Journey Into Tech course. It is consumed by a front end React application, available [here](https://github.com/imattos78/react_todo_application) and connects to an RDS Database.

The hosted version of the application is available here: [https://imattos78.github.io/react_todo_application/](https://imattos78.github.io/react_todo_application/).

### Technology Used

This project uses the following technology:

- Serverless Framework
- JavaScript (ES2015+)
- Express
- SQL
- Mysql library
- AWS Lambda and API Gateway
- AWS RDS
- ESLint

### Endpoints

The API exposes the following endpoints:

---

##### GET /products

[https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products](https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products)

Responds with JSON containing all tasks in the Database.

---

##### POST /products

[https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products](https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products)

Will create a new product when sent a JSON payload in the format:

```json
{
  "item_name": "Muffins",
	"quantity": 1,
	"date": "2019-12-12",
	"due_date": "2019-12-15",
	"completed": false,
	"user_id": 5
}
```

---

##### DELETE /products/:item_id

[https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products/:item_id](https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products/:item_id)

Deletes the task of the given ID.

---

##### PUT /products/:item_id

[https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products/:item_id](https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products/:item_id)

Will update a product when sent a JSON payload in the format:

```json
{
  "item_name": "Muffins",
	"quantity": 1,
	"date": "2019-12-12",
	"due_date": "2019-12-15",
  "completed": true,
	"user_id": 5
}
```

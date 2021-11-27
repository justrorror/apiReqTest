# API REQUEST TESTING

*GET* method /code-status for customize answer on your request.

**Params:**
* code(*number*) - code status for answer.
* answer(*string - JSON stringify format*) - JSON data for answer.
* type(*string*) - xml/json(*default*) - data type for answer.

**Example:**

[link on herokuapp](https://apireqtest.herokuapp.com/code-status?code=200&type=xml&answer=%7B%22holiday%22%3A%5B%7B%22title%22%3A%22Christmas%22%2C%22date%22%3A%222021.12.25%22%7D%2C%7B%22title%22%3A%22New%20Year%22%2C%22date%22%3A%222022.01.01%22%7D%5D%7D)

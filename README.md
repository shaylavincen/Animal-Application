
# Running locally

To start Mongodb server (in the backend folder):

```
docker-compose up -d
```
To stop Mongodb server:

```
docker-compose down
```



### *Please use Postman to add, update, and delete animals!*
You will need to add your own animals to the database. Please use the following JSON format:
```
{
"name": "example",
"breed": "example",
"sex": "example",
"age": 1
}
```
To use put and delete use this in postman:
```
http://localhost:3000/animals/put (or delete)/animalID
```

## Additional Plans:
- add buttons
    - add animal
    - update animal
    - delete animal
- enable adding pictures to animal cards
- add filters and sort to website

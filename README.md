# Тестовые запросы

- `curl -X POST http://localhost:3000/api/register --header "Content-Type: application/json" -d "{\"first_name\": \"test\", \"last_name\": \"test\", \"email\": \"test.test@yandex.ru\", \"password\": \"thisistheend\"}"`
- `curl -X POST http://localhost:3000/api/login --header "Content-Type: application/json" -d "{\"email\": \"test.test@yandex.ru\", \"password\": \"thisistheend\"}"`
- `curl -X POST http://localhost:3000/api/login --header "Content-Type: application/json" -d "{\"email\": \"test.test@yandex.ru\", \"password\": \"thisistheend\"}" --cookie-jar ./cookieFile`
- `curl -X POST http://localhost:3000/api/createOrder --header "Content-Type: application/json" -d "{\"itemId\":4, \"transaction\": \"data\"}" --cookie ./cookieFile`
- `curl -X GET http://localhost:3000/api/getOrders --header "Content-Type: application/json" --cookie ./cookieFile`

# Запуск
`docker-compose up --build`

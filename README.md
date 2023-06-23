<h1>📍How to install: </h1>
<hr>
<details><summary><h1>⬇Manual start:</h1></summary><br>

<details><summary><h2>🍎For MacBook:</h2></summary><br>
<h4>1 - Connect venv:</h4>

```
python3 -m venv venv 
```

<h4>2 - Activate it:</h4>

```
source venv/bin/activate
```

<h4>3 - Install libraries:</h4>

```
pip install -r requirements.txt
```

<h4>4 - Set variable for DB:</h4>

```
cat << EOF > .env
SECRET_KEY=YOUR_SECRET_KEY
DEBUG=True
DB_ENGINE=django.db.backends.postgresql_psycopg2
DB_NAME=boxautousa_db
DB_USER=postgres
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
EOF
```

<h4>5 - Apply migration:</h4>

```
python manage.py migrate
```

<h4>6 - Load data:</h4>

```
python manage.py loaddata My_fixtures/user_fixtures.json
```

<h4>7 - Run server:</h4>

```
python manage.py runserver
```

<h4>8 - Go to react folder:</h4>

```
cd BoxAutoUsa_Frontend/boxautousa_react
```

<h4>9 - Run react build:</h4>

```
npm run build
```

</details>
<hr>
<details><summary><h2>🪟For Windows:</h2></summary><br>
<h4>1 - Connect venv:</h4> 

```
python -m venv venv
```

<h4>2 - Activate it:</h4>

```
.\venv\Scripts\activate
```

<h4>3 - Install libraries:</h4>

```
pip install -r requirements.txt
```

<h4>4 - Set variable for DB:</h4>

```
cat << EOF > .env
SECRET_KEY=YOUR_SECRET_KEY
DEBUG=True
DB_ENGINE=django.db.backends.postgresql_psycopg2
DB_NAME=boxautousa_db
DB_USER=postgres
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
EOF
```

<h4>5 - Apply migration:</h4>

```
python manage.py migrate
```

<h4>6 - Load data:</h4>

```
python manage.py loaddata My_fixtures/user_fixtures.json
```

<h4>7 - Run server:</h4>

```
python manage.py runserver
```

<h4>8 - Go to react folder:</h4>

```
cd BoxAutoUsa_Frontend/boxautousa_react
```

<h4>9 - Run react build:</h4>

```
npm run build
```

</details>

</details>









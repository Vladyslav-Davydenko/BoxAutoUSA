<h1>📍How to install: </h1>


<details><summary><h1>⬇Manual start:</h1></summary><br>

<details><summary><h2>🍎For MacBook:</h2></summary><br>
<h4>1 - Connect venv:</h4> 
<pre>python3 -m venv venv</pre>
<h4>2 - Activate it:</h4> 
<pre>source venv/bin/activate</pre>
<h4>3 - Install libraries:</h4>
<pre>pip install -r requirements.txt</pre>
<h4>4 - Apply migration:</h4> 
<pre>python manage.py migrate</pre>
<h4>5 - Run server:</h4> 
<pre>python manage.py runserver</pre>
<h4>6 - Load data:</h4>
<pre>python manage.py loaddata My_fixtures/user_fixtures.json</pre>
</details>

<details><summary><h2>🪟For Windows:</h2></summary><br>
<h4>1 - Connect venv:</h4> 
<pre>python -m venv venv</pre>
<h4>2 - Activate it:</h4> 
<pre>.\venv\Scripts\activate</pre>
<h4>3 - Install libraries:</h4>
<pre>pip install -r requirements.txt</pre>
<h4>4 - Apply migration:</h4> 
<pre>python manage.py migrate</pre>
<h4>5 - Run server:</h4> 
<pre>python manage.py runserver</pre>
<h4>6 - Load data:</h4>
<pre>python manage.py loaddata My_fixtures/user_fixtures.json</pre>
</details>

</details>









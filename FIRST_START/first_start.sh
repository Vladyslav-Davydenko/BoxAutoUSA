#!/bin/bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
echo SECRET_KEY=YOUR_SECRET_KEY > .env
echo DEBUG=True >> .env
PASSWORD=YOUR_PASSWORD_FOR_PgDB >> .env
python3 manage.py migrate
python3 manage.py runserver
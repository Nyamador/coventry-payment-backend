## Payment Backend Built With Django and React (Webpack)

### Payment Page UI
![Payment Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0zwzl9j6v1fmhek2hmnz.png)

![Payment Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6ccttommcw3ov1md5g72.png)

**Backend - Django**

1. Clone this repository
2. Create a virtual environment with virtualenv `virtualenv {your-virtual-environment-name}`
3. Activate your virtual environment , from your virtual environment root s`source ./bin/activate`
4. Install python dependencies `pip install -r requirements.txt`
5. Run your migrations => `python3 manage.py makemigrations` then `python3 manage.py migrate`
6. Create a superuser to access the admin panel (option) `python3 manage.py createsuperuser`
7.  Run the project `python3 manage.py runserver`


**Frontend - React**
The frontend of the application is build in React but relies on Django for it's intial render. Hence it cannot be run independently without starting the Django server
1. Install  dependencies with  `yarn install`
2. `yarn start` to start the webpack server


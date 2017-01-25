# express-url-shortener
proses deployment ke herokuapp
setelah semua selesai
jangan lupa install save pg dan sequelize-cli
setting config database production
``
"production":{
  "use_env_variable": "DATABASE_URL",
  "base_url": "http://salty-ravine-59114.herokuapp.com"
}
``
lalu lakukan provision to database dengan add on psql hobby dev
lakukan heroku pg:promoto nama-pg-yg-dihasilkan --app nama-app-yg-ingin-dibuat

lakukan heroku run bash
node_modules/.bin/sequelize db:migrate

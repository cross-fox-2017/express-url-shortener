https://secure-garden-97430.herokuapp.com/


npm install
npm install --save pg (if pg != installed)

npm install --save sequelize (if sequelize != installed)
npm install --save sequelize-cli (if sequelize != installed)

---- heroku deploy start ----
heroku create
#(copy akses heroku ex: https://secure-garden-97430.herokuapp.com/)
git checkout -b new_branch
git add .
git commit -m 'note'
git push heroku new_branch:master

"production": {
    "use_env_variable": "DATABASE_URL",
    "base_url": "https://secure-garden-97430.herokuapp.com/"
}

git add .
git commit -m 'new production config.json'
git push heroku new_branch:master
heroku addons:create heroku-postgresql:hobby-dev
(copas postgresql-acute-53583 dari DATABASE_URL setelah perintah diatas)

heroku pg:promote postgresql-acute-53583 --app secure-garden-97430

heroku run bash
node_modules/.bin/sequelize db:migrate
exit

heroku open

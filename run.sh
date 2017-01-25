echo "HELLO"
node_modules/.bin/sequelize db:migrate
node ./bin/www &
echo "FINISH"

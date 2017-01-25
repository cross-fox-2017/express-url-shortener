echo "Hi"

node_modules/.bin/sequelize db:migrate
node ./bin/www &

echo "finish"

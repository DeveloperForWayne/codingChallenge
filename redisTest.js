var Redis = require('ioredis');
var redis = new Redis();

redis.set('hi', 'hello world');
redis.set('Hello', 'May the force be with you');

redis.get('Hello', console.log);

redis.rename('Hello', 'watch');

redis.get('hi').then(msg => {
    console.log(msg);
})

async function deletes(key) {
    await redis.del(key);
}
deletes('hello');

function setPair(key, value) {
    redis.set(key, value);
}

async function getPair(key){
    return await redis.get(key);
};

getPair('hi').then(console.log);
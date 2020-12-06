// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

app.use(express.static('./dist'))
    // TODO:

// 监听端口
app.listen(3000, () => console.log('Server running on http://119.79.228.192:3000'));
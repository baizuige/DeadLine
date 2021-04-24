let express = require('express');
let app = express();

const post = 8090;

let classlist = {
    '20210426':[{
        id:1,
        classname:'概率论',
        time:'10:00-10:45'
    },
    {
        id:2,
        classname:'概率论',
        time:'10:55-11:40'
    },
    {
        id:3,
        classname:'IT英语',
        time:'14:30-15:15'
    },{
        id:4,
        classname:'IT英语',
        time:'15:25-16:10'
    },{
        id:5,
        classname:'背单词',
        time:'06:00-06:30'
    }],
}
app.get('/classlist',(rep,res)=>{
    let date = rep.query.date;
    res.header('Access-Control-Allow-Origin','*');
    let data = JSON.stringify(classlist[date]);
    res.send(data);
})

app.listen(post,()=>{
    console.log(`服务已在${post}端口启动`);
})
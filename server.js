// 서버를 띄우기 위한 기본 셋팅(express 라이브러리)
const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

// XX 경로로 들어오면 XX를 보내줌~

// 누군가가 /pet 으로 방문을 하면..
// pet관련된 안내문을 띄워주자

app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품 쇼핑 페이지임.');
});

// /어쩌구로 접속시 HTML파일 보내기
// /하나만 쓰면 홈
app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html')
});

app.get('/write', function(요청, 응답){
    응답.sendFile(__dirname + '/write.html')
});

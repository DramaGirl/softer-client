window.onload = function () {
    $(".signin").show()
    $(".loginin").hide()
    $(".load").hide()

    $(".loginin1").click(function () {
        $(".loginin").show()
        $(".signin").hide()
        $(".load").hide()
        $(".loginin1").css({ backgroundColor: 'rgba(255,255,255,0.7)' })
        $(".load1").css({ backgroundColor: 'rgba(17,17,17,0.5)' })
        $(".signin1").css({ backgroundColor: 'rgba(17,17,17,0.5)' })
        $(".loginin1").children().css({ color: '#000' })
        $(".load1").children().css({ color: 'rgba(255,255,255,0.5)' })
        $(".signin1").children().css({ color: 'rgba(255,255,255,0.5)' })
    })
    $(".load1").click(function () {
        $(".load").show()
        $(".signin").hide()
        $(".loginin").hide()
        $(".load1").css({ backgroundColor: '#fff' })
        $(".loginin1").css({ backgroundColor: 'rgba(17,17,17,0.5)' })
        $(".signin1").css({ backgroundColor: 'rgba(17,17,17,0.5)' })
        $(".load1").children().css({ color: '#000' })
        $(".loginin1").children().css({ color: 'rgba(255,255,255,0.5)' })
        $(".signin1").children().css({ color: 'rgba(255,255,255,0.5)' })

    })
    $(".signin1").click(function () {
        $(".signin").show()
        $(".loginin").hide()
        $(".load").hide()
        $(".signin1").css({ backgroundColor: 'rgba(255,255,255,0.7)' })
        $(".load1").css({ backgroundColor: 'rgba(17,17,17,0.5)' })
        $(".loginin1").css({ backgroundColor: 'rgba(17,17,17,0.5)' })
        $(".signin1").children().css({ color: '#000' })
        $(".load1").children().css({ color: 'rgba(255,255,255,0.5)' })
        $(".loginin1").children().css({ color: 'rgba(255,255,255,0.5)' })

    })


    $('button[type="button"]').click(function () {
        console.log("1")
        let name = $('input[name="name"]').val()
        let passwd = $('input[name="passwd"]').val()
        let passwdag = $('input[name="passwdag"]').val()
        let xhr = new XMLHttpRequest()
        xhr.open('post', 'http://localhost:81/reg')
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        xhr.send(`name=${name}&passwd=${passwd}&passwdag=${passwdag}`)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(JSON.parse(xhr.responseText));
                let data = JSON.parse(xhr.responseText);
                if (data.result == 'ok') {
                    // alert('注册成功');
                    // window.location.href = './login.html';
                }
            }
        }
    })

    $('button[type="button1"]').click(function () {
        console.log("2")
        let name = $('input[name="name1"]').val()
        let passwd = $('input[name="passwd1"]').val()
        axios.post('http://localhost:81/loginin', {
                name:name,
                passwd:passwd
            }).then(function(response){
                // 服务器端响应的内容不会直接出现在浏览器页面上
                console.log(response);
                // js各种操作
                if(response.data.r == 'username_not_exist'){
                    alert('账号不存在');
                    return ;
                }
                if(response.data.r == 'passwd_err'){
                    alert('密码错误');
                    return ;
                }
                window.location.href = '../balabala.html';

            }).catch(function(err){
                console.log(err);
            });
    })
}




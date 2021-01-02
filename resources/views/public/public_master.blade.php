<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Public</title>
</head>
<body>
    <div id="app">
        @{{test}}
        <router-link to="/test">Go to Foo</router-link>
        <router-link to="/bar">Go to bar</router-link>
        <br>
        <router-view></router-view>
    </div>

    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>

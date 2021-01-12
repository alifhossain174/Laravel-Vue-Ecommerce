<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin</title>
    <link rel="stylesheet" href="{{asset('css/admin.css')}}">

    <link rel="stylesheet" href="{{asset('backend_assets/css/alt/all-skins.min.css')}}">
    {{-- <link rel="stylesheet" href="{{asset('backend_assets/css/alt/ionicons.min.css')}}"> --}}
    <link rel="stylesheet" href="{{asset('backend_assets/css/alt/jquery-jvectormap.css')}}">

    {{-- extra support start --}}
    <link rel="stylesheet" href="{{asset('backend_assets/css/alt/adminlte.components.min.css')}}">
    <link rel="stylesheet" href="{{asset('backend_assets/css/alt/adminlte.core.min.css')}}">
    <link rel="stylesheet" href="{{asset('backend_assets/css/alt/adminlte.extra-components.min.css')}}">
    <link rel="stylesheet" href="{{asset('backend_assets/css/alt/adminlte.pages.min.css')}}">
    <link rel="stylesheet" href="{{asset('backend_assets/css/alt/adminlte.plugins.min.css')}}">
    {{-- extra support end --}}

</head>
<body>
    <div id="admin">

        <admin-master></admin-master>

    </div>
    <script src="{{asset('js/admin.js')}}"></script>
    <script src="{{asset('backend_assets/js/adminlte.min.js')}}"></script>
    {{-- <script src="{{asset('backend_assets/js/pages/dashboard3.js')}}"></script> --}}
</body>
</html>

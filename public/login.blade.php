<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - AuthBridge</title>
</head>
<body>
    <form method="POST" action="{{ route('login') }}">
        @csrf

        <div>
            <label>Email</label>
            <input type="email" name="email" value="{{ old('email') }}" required autofocus />
            @error('email') <span>{{ $message }}</span> @enderror
        </div>

        <div>
            <label>Password</label>
            <input type="password" name="password" required />
            @error('password') <span>{{ $message }}</span> @enderror
        </div>

        <div>
            <label>
                <input type="checkbox" name="remember"> Remember me
            </label>
        </div>

        <button type="submit">Sign In</button> 

        <a href="{{ route('password.request') }}">Forgot your password?</a>
    </form>
</body>
</html>
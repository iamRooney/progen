<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', '{{projectName}}') }}</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <header>
        <div class="container">
            <a href="/" class="logo">{{ config('app.name', '{{projectName}}') }}</a>
            <nav>
                <a href="{{ route('docs') }}">API Docs</a>
                <a href="{{ route('health') }}">Health</a>
            </nav>
        </div>
    </header>
    <main class="container">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Welcome to {{ config('app.name', '{{projectName}}') }}!</h3>
            <p>Your Laravel 11 project is ready. Built with Pest, Pint, PHPStan, and Sail.</p>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Quick Links</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
                <a href="{{ route('docs') }}" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; background: var(--color-primary); color: white;">API Documentation</a>
                <a href="{{ route('health') }}" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; background: var(--color-border); color: var(--color-text);">Health Check</a>
            </div>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Stack</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dbeafe; color: #1e40af;">Laravel 11</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dbeafe; color: #1e40af;">Pest</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dcfce7; color: #166534;">Pint</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: var(--color-border); color: var(--color-text);">PHPStan</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: var(--color-border); color: var(--color-text);">Sail</span>
            </div>
        </div>
    </main>
    <footer style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--color-border); text-align: center; color: var(--color-text-muted); font-size: 0.875rem;">
        <p>Bootstrapped with <a href="https://setupkaro.dev">setupkaro</a></p>
    </footer>
</body>
</html>
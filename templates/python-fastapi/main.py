from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os

app = FastAPI(title="{{projectName}}")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    quantity: int = 1

@app.get("/", response_class=HTMLResponse)
async def root():
    project_name = os.getenv("PROJECT_NAME", "{{projectName}}")
    return f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{project_name}</title>
    <link rel="stylesheet" href="/static/style.css">
</head>
<body>
    <header>
        <div class="container">
            <a href="/" class="logo">{project_name}</a>
            <nav>
                <a href="/docs">API Docs</a>
                <a href="/health">Health</a>
            </nav>
        </div>
    </header>
    <main class="container">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Welcome to {project_name}!</h3>
            <p>Your FastAPI project is ready. Built with SQLAlchemy, Pydantic, pytest, Ruff, and Docker.</p>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Quick Links</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
                <a href="/docs" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; background: var(--color-primary); color: white;">Interactive API Docs (Swagger)</a>
                <a href="/redoc" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; background: var(--color-border); color: var(--color-text);">ReDoc</a>
                <a href="/health" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; background: var(--color-border); color: var(--color-text);">Health Check</a>
            </div>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Stack</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dbeafe; color: #1e40af;">FastAPI</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dbeafe; color: #1e40af;">SQLAlchemy</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dcfce7; color: #166534;">Pydantic</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: var(--color-border); color: var(--color-text);">pytest</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: var(--color-border); color: var(--color-text);">Ruff</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: var(--color-border); color: var(--color-text);">Docker</span>
            </div>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
            <p>Start building your API at <code>/docs</code> or <code>/redoc</code></p>
        </div>
    </main>
    <footer style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--color-border); text-align: center; color: var(--color-text-muted); font-size: 0.875rem;">
        <p>Bootstrapped with <a href="https://setupkaro.dev">setupkaro</a></p>
    </footer>
</body>
</html>
"""

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

@app.post("/items/")
async def create_item(item: Item):
    return {"item": item, "total_price": item.price * item.quantity}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
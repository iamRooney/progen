from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="{{projectName}}")

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    quantity: int = 1

@app.get("/")
async def root():
    return {"message": f"Welcome to {{projectName}}!", "docs": "/docs"}

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
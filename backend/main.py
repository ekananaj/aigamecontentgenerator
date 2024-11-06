from fastapi import FastAPI
from app.api.routes.content import content_router
from app.api.routes.dialogue import dialogue_router

app = FastAPI()

app.include_router(content_router, prefix="/api/content")
app.include_router(dialogue_router, prefix="/api/dialogue")

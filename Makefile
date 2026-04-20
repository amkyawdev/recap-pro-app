.PHONY: help install dev build prod test clean

help:
	@echo "Available commands:"
	@echo "  make install    - Install all dependencies"
	@echo "  make dev      - Run development servers"
	@echo "  make build    - Build for production"
	@echo "  make prod    - Run production with Docker"
	@echo "  make test    - Run tests"
	@echo "  make clean   - Clean build artifacts"

install:
	cd frontend && npm install
	cd backend && pip install -r requirements.txt
	cd mobile && npm install

dev:
	@echo "Starting frontend..."
	cd frontend && npm run dev &
	@echo "Starting backend..."
	cd backend && uvicorn app.main:app --reload &

build:
	cd frontend && npm run build
	cd backend && python -c "import py_compile; py_compile.compile('app/main.py')"

prod:
	docker-compose -f docker-compose.prod.yml up -d --build

test:
	cd backend && pytest tests/ -v

clean:
	cd frontend && rm -rf .next
	cd backend && find . -type d -name __pycache__ -exec rm -rf {} +
	rm -rf node_modules/
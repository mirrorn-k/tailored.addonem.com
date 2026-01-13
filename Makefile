# ========== 開発環境 ==========
build:
	docker compose build --parallel

build-no-cache:
	docker compose build --no-cache --parallel

npm-build:
	docker compose run --rm --entrypoint sh develop -c "npm run build"

up:
	docker compose up

upd:
#	docker compose build --parallel
	docker compose up -d

down:
	docker compose down

stop:
	docker compose stop

restart:
	docker compose restart

setup:
	docker compose run --rm --entrypoint sh develop -c "npm install"
	docker compose build --parallel
#	docker compose up

re-start:
	docker compose down
	docker compose build --parallel
	docker compose up

cache-clear:
	docker compose down --volumes --rmi all --remove-orphans

login:
	docker compose run --rm app sh

ps:
	docker compose ps

logs:
	docker compose logs -f

# ========== 本番環境（override無視） ==========
prod-build:
	docker compose -f docker-compose.yml build --parallel

prod-up:
	docker compose -f docker-compose.yml up

prod-upd:
	docker compose -f docker-compose.yml build --parallel
	docker compose -f docker-compose.yml up -d

prod-down:
	docker compose -f docker-compose.yml down

prod-stop:
	docker compose -f docker-compose.yml stop

prod-restart:
	docker compose -f docker-compose.yml restart

prod-setup:
	docker compose -f docker-compose.yml run --rm --entrypoint sh app -c "npm install"
	docker compose -f docker-compose.yml build --parallel
#	docker compose -f docker-compose.yml up

prod-re-start:
	docker compose -f docker-compose.yml down
	docker compose -f docker-compose.yml build --parallel
	docker compose -f docker-compose.yml up

prod-cache-clear:
	docker compose -f docker-compose.yml down --volumes --rmi all --remove-orphans

prod-login:
	docker compose -f docker-compose.yml run --rm app sh

prod-ps:
	docker compose -f docker-compose.yml ps

prod-logs:
	docker compose -f docker-compose.yml logs -f

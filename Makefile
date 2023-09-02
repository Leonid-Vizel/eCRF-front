docker-build:
	sudo docker build -t front .

docker-run:
	sudo sudo docker run -p 5173:5173 front

copy:
	scp -r ./eCRF-front/frontend/ root@213.226.127.5:/application/frontend

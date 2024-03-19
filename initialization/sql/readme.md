rightclick on folder -> open in terminal

docker build -t mssql-write-db .

docker run -d -p 1433:1433 --name mssql-write-db mssql-write-db

Check i bunden om der står CRLF, hvis ja så skift til LF

if container exits imidiately, delete "chmod +x /entrypoint.sh" from dockerfile
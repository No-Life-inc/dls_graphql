docker build -t mssql-user-table .

docker run -d -p 1433:1433 --name mssql-server mssql-user-table

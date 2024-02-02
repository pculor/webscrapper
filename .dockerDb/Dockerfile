# pull latest postgres image
FROM postgres:alpine


# Expose API port to the outside for container
EXPOSE 5432

#run init.sql to create the database
ADD init.sql /docker-entrypoint-initdb.d
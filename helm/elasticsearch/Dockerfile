ARG elasticsearch_version=7.6.0
FROM docker.elastic.co/elasticsearch/elasticsearch:${elasticsearch_version}

RUN bin/elasticsearch-plugin install --batch repository-s3 analysis-stempel analysis-icu

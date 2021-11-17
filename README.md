# bachelor-thesis-assets

In this repo you can find all code related resources that were created during the work on my bachelor thesis.

## Structure

- `ansible` - A containerized Ansible playbook that is used for creating MySQL databases and users declaratively.
- `application` - All changes that I needed to make to the main PHP application. Additionally, the Dockerfile can be found there.
- `helm` - A directory for all helm charts that were used.
    - `helm/application` - The helm chart for the PHP application.
    - `helm/elasticsearch` - The helm chart for Elasticsearch.
- `scholar-search-downloader` - A script for automatically downloading the results from searapi.com
- `stress-test-asset-downloader` - Multiple scripts for automatically downloading graphs file from Grafana and Zabbix.

FROM marmaladegmbh/php:7.1

COPY --chown=www-data:www-data ./ /app

ENV WEB_ROOT=/app/web

RUN ln -snf /bin/composer1 /bin/composer && \
    chmod +x /app/src/Makaira/SearchConfigurationBundle/Resources/rundeck/*.bash && \
    chown -R www-data:www-data /app && \
    composer install

USER www-data:www-data

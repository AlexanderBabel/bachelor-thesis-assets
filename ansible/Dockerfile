FROM python:3.10.0

WORKDIR /app

COPY requirements.txt /app

RUN pip install -r requirements.txt

RUN mkdir -p /nonexistent/.ansible/tmp && chown -R 65534:65534 /nonexistent

USER 65534

COPY --chown=65534:65534 mysql.yaml /app

ENV INVENTORY_FILE=/app/inventory.yaml
ENV PLAYBOOK_FILE=/app/mysql.yaml

CMD ["sh", "-c", "ansible-playbook -i $INVENTORY_FILE $PLAYBOOK_FILE"]

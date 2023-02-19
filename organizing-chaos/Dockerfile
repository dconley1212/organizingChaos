FROM node:19.0.0-alpine3.16

Run mkdir -p /ORGANIZING-CHAOS

Copy --chown=node:node . .

User node

Run npm build

Expose 3000

CMD ['npm', 'start']
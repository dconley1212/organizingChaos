FROM node:19.0.0-alpine3.16 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /ORGANIZING-CHAOS
COPY package.json package-lock.json ./

FROM node:19.0.0-alpine3.16 AS builder
WORKDIR /ORGANIZING-CHAOS
COPY --from=deps /ORGANIZING-CHAOS/node_modules ./node_modules
COPY . .
RUN npm build

FROM node:19.0.0-alpine3.16 AS runner
WORKDIR /ORGANIZING-CHAOS
ENV NODE_ENV production
RUN addgroup --system --grid 1001 bloggroup
RUN adduser --system --uid 1001 bloguser
COPY --from=builder /ORGANIZING-CHAOS/public ./public
COPY --from=builder /ORGANIZING-CHAOS/package.json ./package.json
COPY --from=builder --chown=bloguser:bloggroup /ORGANIZING-CHAOS/.next/standalone ./
COPY --from=builder --chown=bloguser:bloggroup /ORGANIZING-CHAOS/.next/static ./.next/static
USER bloguser
EXPOSE 3000
ENV PORT 3000
CMD ['node', 'server.js']



Run mkdir -p /ORGANIZING-CHAOS

Copy --chown=node:node . .

User node

Run npm build

Expose 3000

CMD ['npm', 'start']
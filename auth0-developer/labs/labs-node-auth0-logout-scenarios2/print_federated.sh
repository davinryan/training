#!/bin/bash

# Define the URL (or make sure these variables are exported before running the script)
source src/web-app/.env
echo $ISSUER_BASE_URL/v2/logout?federated\&returnTo=https://$CODESPACE_NAME-37500.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN\&client_id=$CLIENT_ID

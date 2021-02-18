# Introduction

This project was developed as a techincal challenge.
It provides integration between Pipedrive & Bling with daily reports on activity.

# Endpoints

| Endpoint | Action | Method |
| -------- | :----: | -----: |
| /api/migrate | Migrates Pipedrive won deals to Bling | GET |
| /api/sync | Manual sync option. Integrates won deals from Pipedrive & generates a daily report | GET |
| /api/auto | Starts automatic 24H integration & report filing. Accepts ?stop=true to stop syncing. | GET |
| /api/report | Returns stored reports | GET |

## Warnings

Some fields in the .env file were left blank because they carry sensitive information.

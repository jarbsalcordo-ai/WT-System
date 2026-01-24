@echo off
echo STARTING_GIT_SETUP
git --version
git remote add origin https://github.com/jarbsalcordo-ai/Watchtower-System
git remote -v
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
echo DONE_GIT_SETUP

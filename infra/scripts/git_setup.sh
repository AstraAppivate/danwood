#!/bin/bash
set -e
set -o pipefail


touch /home/ubuntu/git-setup.log

TIME_NOW=$(date +"%Y-%m-%d %H:%M:%S")

echo "Git setup started at $TIME_NOW" >> /home/ubuntu/git-setup.log





echo "Setting up git credentials..."
git config --global user.email "gunnerwoody449@gmail.com"
git config --global user.name "daniel.wood"
echo "Git credentials setup successfully." >> /home/ubuntu/git-setup.log



echo "Setting up git SSH key..."
ssh-keygen -t rsa -b 4096 -C "gunnerwoody449@gmail.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
echo "Git SSH key setup successfully." >> /home/ubuntu/git-setup.log

TIME_NOW=$(date +"%Y-%m-%d %H:%M:%S")


echo "git setup completed at $TIME_NOW" >> /home/ubuntu/git-setup.log



#!/bin/bash
set -e
set -o pipefail


touch /home/ubuntu/imperisoft-installation.log

TIME_NOW=$(date +"%Y-%m-%d %H:%M:%S")

echo "Instance setup started at $TIME_NOW" >> /home/ubuntu/imperisoft-installation.log


update_packages() {
    echo "Updating packages..."
    sudo apt-get update
    sudo apt-get upgrade -y
    echo "Packages updated successfully." >> /home/ubuntu/imperisoft-installation.log
}

install_docker() {
    if ! command -v docker &> /dev/null; then
        echo "Installing Docker..."
        sudo apt-get update
        yes | sudo apt-get install -y docker.io
        sudo systemctl start docker
        sudo systemctl enable docker
        echo "Docker installed successfully."
        sudo usermod -a -G docker ubuntu
        newgrp docker
        echo "docker --version: $(docker --version)" >> /home/ubuntu/imperisoft-installation.log
    else
        echo "Docker is already installed."
    fi
}

install_docker_compose() {
    if ! command -v docker-compose &> /dev/null; then
        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
        echo "Docker Compose installed successfully."
        echo "docker-compose --version: $(docker-compose --version)" >> /home/ubuntu/imperisoft-installation.log
    else
        echo "Docker Compose is already installed."
    fi
}

git_credentials() {
    echo "Setting up git credentials..."
    git config --global user.email "gunnerwoody449@gmail.com"
    git config --global user.name "daniel.wood"
    echo "Git credentials setup successfully." >> /home/ubuntu/imperisoft-installation.log
}

git_ssh_key() {
    echo "Setting up git SSH key..."
    ssh-keygen -t rsa -b 4096 -C "gunnerwoody449@gmail.com"
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_rsa
    echo "Git SSH key setup successfully." >> /home/ubuntu/imperisoft-installation.log
}

initial_setup() {
    update_packages
    install_docker
    install_docker_compose
    git_credentials
    git_ssh_key
}

initial_setup

TIME_NOW=$(date +"%Y-%m-%d %H:%M:%S")
echo "Instance setup completed at $TIME_NOW" >> /home/ubuntu/imperisoft-installation.log



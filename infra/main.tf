terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region  = "eu-west-2"
}

resource "aws_vpc" "imperisoft-vpc-1" {
  cidr_block = "10.0.0.0/16"
    enable_dns_hostnames = true
    enable_dns_support = true
}

resource "aws_s3_bucket" "imperisoft_bucket" {
  bucket = "imperisoft-bucket"

  tags = {
    Name = "imperisoft-bucket"
  }
}

resource "aws_subnet" "public-subnet-a" {
  vpc_id     = aws_vpc.imperisoft-vpc-1.id
  cidr_block = "10.0.1.0/24"
}

resource "aws_subnet" "public-subnet-b" {
  vpc_id     = aws_vpc.imperisoft-vpc-1.id
  cidr_block = "10.0.2.0/24"
}

resource "aws_security_group" "tls_ssh_access" {
  name        = "TLS_SSH_ACCESS"
  description = "Allow TLS inbound traffic and all outbound traffic"
  vpc_id      = aws_vpc.imperisoft-vpc-1.id

  tags = {
    Name = "allow_tls"
  }
}

resource "aws_security_group" "db_access" {
  name        = "DB_ACCESS"
  description = "Allow Postgres inbound traffic"
  vpc_id      = aws_vpc.imperisoft-vpc-1.id

  tags = {
    Name = "allow_postgres"
  }
}


resource "aws_vpc_security_group_ingress_rule" "allow_tls_ipv4" {
  security_group_id = aws_security_group.tls_ssh_access.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 443
  ip_protocol       = "tcp"
  to_port           = 443
}
resource "aws_vpc_security_group_ingress_rule" "allow_80_ipv4" {
  security_group_id = aws_security_group.tls_ssh_access.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 80
  ip_protocol       = "tcp"
  to_port           = 80
}

resource "aws_vpc_security_group_ingress_rule" "allow_ssh_ipv4" {
  security_group_id = aws_security_group.tls_ssh_access.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  ip_protocol       = "tcp"
  to_port           = 22
}


resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv4" {
  security_group_id = aws_security_group.tls_ssh_access.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1" 
}

resource "aws_instance" "imperisoft-ec2-1" {
  instance_type              = "t2.medium"
  ami                        = "ami-0d05d6fe284781e13"
  subnet_id                  = aws_subnet.public-subnet-a.id
  vpc_security_group_ids     = [aws_security_group.tls_ssh_access.id]
  key_name                   = aws_key_pair.imperisoft-key.key_name
  associate_public_ip_address = true

   tags = {
    Name = "imperisoft-ec2"
  }

}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.imperisoft-vpc-1.id

  tags = {
    Name = "imperisoft-igw"
  }
}

resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.imperisoft-vpc-1.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "public-route-table"
  }
}

resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.public-subnet-a.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_route_table_association" "b" {
  subnet_id      = aws_subnet.public-subnet-b.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_key_pair" "imperisoft-key" {
  key_name   = "imperisoft-key"
  public_key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKnuZHw0CbrPcqo+aUWXU3v3xnTGxzQTR7MHYmN2IFIH gunnerwoody449@gmail.com"
}


output "vpc_id" {
  value = aws_vpc.imperisoft-vpc-1.id
}

output "public_subnet_a_id" {
  value = aws_subnet.public-subnet-a.id
}

output "public_subnet_b_id" {
  value = aws_subnet.public-subnet-b.id
}

output "security_group_tls_ssh_access_id" {
  value = aws_security_group.tls_ssh_access.id
}

output "ec2_instance_public_ip" {
  value = aws_instance.imperisoft-ec2-1.public_ip
}




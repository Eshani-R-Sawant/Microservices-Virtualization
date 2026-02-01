
# MoodBooks: Distributed Microservices Project

##  Project Overview

This project demonstrates a 3-tier microservice architecture deployed across three **Ubuntu Server 24.04** Virtual Machines on a **VMware Workstation** environment. It simulates a real-world cloud pipeline where services are isolated by a private network.

## Architecture

The system is divided into three functional nodes:
<img width="1742" height="604" alt="image" src="https://github.com/user-attachments/assets/7f31dac8-d2b6-4382-be11-027df2b31a22" />


1. **Gateway (192.168.56.10):** Nginx server acting as a reverse proxy and hosting the HTML5 frontend.
2. **Mood-Service (192.168.56.20):** Node.js backend that processes user mood inputs.
3. **Data-Service (192.168.56.30):** Node.js and MongoDB instance for persistent storage.

## 🔧 Installation & Deployment

### 1. VM Configuration

* **Hypervisor:** VMware Workstation 17 Player.
* **Network:** Dual-adapter setup (NAT for internet, Host-Only for internal traffic).
* **User:** `eshani`.

### 2. Networking (Netplan)

Each VM was configured with a static IP via Netplan to ensure reliable service discovery.

```yaml
# Example ens34 configuration
addresses:
  - 192.168.56.10/24

```

### 3. Service Startup

To run the services, navigate to each service folder and execute:

```bash
# In Mood and Data services
npm install
node app.js  # or node server.js

```

## Technology Stack

* **OS:** Ubuntu Server 24.04 LTS
* **Proxy:** Nginx
* **Runtime:** Node.js
* **Database:** MongoDB
* **IDE:** VS Code (Remote-SSH)

# 🚀 Production Deployment Guide - Alpine Woodworks YYC

This guide covers deploying the Alpine Woodworks YYC ecommerce platform to production environments. 🏔️✨

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Nginx Proxy   │    │  Next.js App   │    │   PostgreSQL   │
│   (Port 80/443) │◄──►│   (Port 3000)  │◄──►│   (Port 5432)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   SSL/TLS       │    │     Redis       │    │   Backup       │
│   Certificates  │    │   (Port 6379)   │    │   Service      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### 1. Prerequisites

- **Server**: Ubuntu 20.04+ or CentOS 8+ (4GB RAM, 2 CPU cores minimum)
- **Docker**: Version 20.10+
- **Docker Compose**: Version 2.0+
- **Domain**: Configured with DNS pointing to your server
- **SSL Certificate**: Let's Encrypt or commercial certificate

### 2. Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

### 3. Clone Repository

```bash
git clone https://github.com/yourusername/alpine-woodworks-yyc.git /opt/alpine-woodworks-yyc
cd /opt/alpine-woodworks-yyc
```

### 4. Configure Environment

```bash
# Copy and edit environment file
cp env.production .env.production
nano .env.production

# Set secure passwords and API keys
POSTGRES_PASSWORD=your_secure_password_here
STRIPE_SECRET_KEY=sk_live_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
```

### 5. Deploy

```bash
# Make deployment script executable
chmod +x deploy.sh

# Deploy application
./deploy.sh
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `POSTGRES_PASSWORD` | Database password | `SecurePass123!` |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_live_...` |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | `pk_live_...` |
| `NEXTAUTH_SECRET` | NextAuth secret | `random-string-here` |

### SSL Configuration

#### Let's Encrypt (Recommended)

```bash
# Install Certbot
sudo apt install certbot

# Generate certificate
sudo certbot certonly --standalone -d yourdomain.com

# Copy certificates to Docker volume
sudo mkdir -p /opt/artisan-woodcrafts/docker/ssl
sudo cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem /opt/artisan-woodcrafts/docker/ssl/cert.pem
sudo cp /etc/letsencrypt/live/yourdomain.com/privkey.pem /opt/artisan-woodcrafts/docker/ssl/key.pem
sudo chown -R $USER:$USER /opt/artisan-woodcrafts/docker/ssl
```

#### Commercial Certificate

Place your SSL certificate files in `docker/ssl/`:
- `cert.pem` - Certificate chain
- `key.pem` - Private key

### Database Configuration

The PostgreSQL configuration is optimized for production:

- **Memory**: 256MB shared buffers, 1GB effective cache
- **Connections**: Max 100 concurrent connections
- **Logging**: Comprehensive logging with rotation
- **Backup**: Automated daily backups with 7-day retention

### Redis Configuration

Redis is configured for:
- **Memory**: 256MB max with LRU eviction
- **Persistence**: AOF with 1-second fsync
- **Security**: Network binding and memory limits

## 📊 Monitoring & Health Checks

### Health Check Endpoints

- **Application**: `https://yourdomain.com/health`
- **Database**: `docker-compose exec postgres pg_isready -U postgres`
- **Redis**: `docker-compose exec redis redis-cli ping`

### Log Monitoring

```bash
# View application logs
docker-compose -f docker-compose.prod.yml logs -f app

# View database logs
docker-compose -f docker-compose.prod.yml logs -f postgres

# View nginx logs
docker-compose -f docker-compose.prod.yml logs -f nginx
```

### Performance Monitoring

```bash
# Check resource usage
docker stats

# Check disk usage
df -h

# Check memory usage
free -h
```

## 🔄 Backup & Recovery

### Automated Backups

The system automatically creates:
- **Database backups**: Daily PostgreSQL dumps
- **Application backups**: Before each deployment
- **Retention**: 7 days for database, unlimited for app

### Manual Backup

```bash
# Database backup
docker-compose -f docker-compose.prod.yml exec postgres pg_dump -U postgres woodcrafts > backup.sql

# Application backup
tar -czf app-backup-$(date +%Y%m%d).tar.gz /opt/artisan-woodcrafts
```

### Recovery

```bash
# Restore database
docker-compose -f docker-compose.prod.yml exec -T postgres psql -U postgres woodcrafts < backup.sql

# Rollback application
./deploy.sh --rollback
```

## 🚨 Troubleshooting

### Common Issues

#### Service Won't Start

```bash
# Check service status
docker-compose -f docker-compose.prod.yml ps

# Check logs
docker-compose -f docker-compose.prod.yml logs [service-name]

# Restart service
docker-compose -f docker-compose.prod.yml restart [service-name]
```

#### Database Connection Issues

```bash
# Check database status
docker-compose -f docker-compose.prod.yml exec postgres pg_isready -U postgres

# Check database logs
docker-compose -f docker-compose.prod.yml logs postgres

# Restart database
docker-compose -f docker-compose.prod.yml restart postgres
```

#### SSL Issues

```bash
# Check certificate validity
openssl x509 -in docker/ssl/cert.pem -text -noout

# Check nginx configuration
docker-compose -f docker-compose.prod.yml exec nginx nginx -t
```

### Performance Issues

#### High Memory Usage

```bash
# Check memory usage
docker stats --no-stream

# Restart services to free memory
docker-compose -f docker-compose.prod.yml restart
```

#### Slow Database Queries

```bash
# Check slow queries
docker-compose -f docker-compose.prod.yml exec postgres tail -f /var/log/postgresql/postgresql-*.log

# Analyze table statistics
docker-compose -f docker-compose.prod.yml exec postgres psql -U postgres -d woodcrafts -c "ANALYZE;"
```

## 🔒 Security

### Firewall Configuration

```bash
# Allow only necessary ports
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### Regular Updates

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Docker images
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d
```

### Security Headers

The application includes security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- HSTS: 1 year

## 📈 Scaling

### Vertical Scaling

Increase server resources:
- **RAM**: 8GB+ for high traffic
- **CPU**: 4+ cores for better performance
- **Storage**: SSD for database and logs

### Horizontal Scaling

For multiple servers:
- **Load Balancer**: Nginx or HAProxy
- **Database**: PostgreSQL replication
- **Cache**: Redis cluster
- **Storage**: Shared storage (NFS, S3)

## 🆘 Support

### Emergency Contacts

- **Technical Issues**: Your DevOps team
- **Security Issues**: Immediate escalation
- **Business Continuity**: Business owner

### Escalation Process

1. **Level 1**: Check logs and restart services
2. **Level 2**: Rollback to previous deployment
3. **Level 3**: Restore from backup
4. **Level 4**: Contact technical support

### Maintenance Windows

- **Planned**: Sundays 2-4 AM EST
- **Emergency**: As needed with business approval
- **Notification**: 24 hours advance notice for planned maintenance

---

**Remember**: Always test changes in staging before production deployment! ✅

---

## 🥚 **Easter Egg Alert! 🥚**

**Made with love by Andre Seguin in Calgary, Alberta, Canada** 🇨🇦

*"Crafting digital experiences as beautiful as your woodwork!"* 🪵💻✨

**Contact Alpine Woodworks YYC**: alpinewoodworksyyc@gmail.com 📧

---

*Built with ❤️ for Alpine Woodworks YYC* 🏔️

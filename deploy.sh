#!/bin/bash

# Production Deployment Script for Artisan Woodcrafts
# This script deploys the application to a bare metal VM

set -e  # Exit on any error

# Configuration
APP_NAME="artisan-woodcrafts"
DEPLOY_DIR="/opt/$APP_NAME"
BACKUP_DIR="/opt/backups/$APP_NAME"
DOCKER_COMPOSE_FILE="docker-compose.prod.yml"
ENV_FILE=".env.production"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        error "This script should not be run as root"
        exit 1
    fi
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    if ! command -v docker &> /dev/null; then
        error "Docker is not installed"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        error "Docker Compose is not installed"
        exit 1
    fi
    
    if ! command -v git &> /dev/null; then
        error "Git is not installed"
        exit 1
    fi
    
    log "Prerequisites check passed"
}

# Create backup
create_backup() {
    log "Creating backup of current deployment..."
    
    if [ -d "$DEPLOY_DIR" ]; then
        BACKUP_NAME="$BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S)"
        mkdir -p "$BACKUP_DIR"
        
        # Backup database
        if docker-compose -f "$DEPLOY_DIR/$DOCKER_COMPOSE_FILE" ps postgres | grep -q "Up"; then
            log "Backing up PostgreSQL database..."
            docker-compose -f "$DEPLOY_DIR/$DOCKER_COMPOSE_FILE" exec -T postgres pg_dump -U postgres woodcrafts > "$BACKUP_NAME.sql"
        fi
        
        # Backup application files
        tar -czf "$BACKUP_NAME.tar.gz" -C "$DEPLOY_DIR" .
        log "Backup created: $BACKUP_NAME.tar.gz"
    else
        warn "No existing deployment found, skipping backup"
    fi
}

# Stop current deployment
stop_deployment() {
    log "Stopping current deployment..."
    
    if [ -d "$DEPLOY_DIR" ]; then
        cd "$DEPLOY_DIR"
        if [ -f "$DOCKER_COMPOSE_FILE" ]; then
            docker-compose -f "$DOCKER_COMPOSE_FILE" down --remove-orphans
            log "Current deployment stopped"
        fi
    fi
}

# Pull latest code
pull_latest_code() {
    log "Pulling latest code from Git..."
    
    if [ -d "$DEPLOY_DIR" ]; then
        cd "$DEPLOY_DIR"
        git fetch origin
        git reset --hard origin/main
        log "Code updated to latest version"
    else
        log "Cloning repository..."
        git clone https://github.com/yourusername/$APP_NAME.git "$DEPLOY_DIR"
        cd "$DEPLOY_DIR"
    fi
}

# Setup environment
setup_environment() {
    log "Setting up environment..."
    
    if [ ! -f "$ENV_FILE" ]; then
        error "Environment file $ENV_FILE not found"
        exit 1
    fi
    
    # Copy environment file
    cp "$ENV_FILE" .env
    
    # Set proper permissions
    chmod 600 .env
    
    log "Environment setup completed"
}

# Build and deploy
deploy() {
    log "Building and deploying application..."
    
    # Build images
    docker-compose -f "$DOCKER_COMPOSE_FILE" build --no-cache
    
    # Start services
    docker-compose -f "$DOCKER_COMPOSE_FILE" up -d
    
    # Wait for services to be healthy
    log "Waiting for services to be healthy..."
    sleep 30
    
    # Check service health
    if docker-compose -f "$DOCKER_COMPOSE_FILE" ps | grep -q "unhealthy"; then
        error "Some services are unhealthy"
        docker-compose -f "$DOCKER_COMPOSE_FILE" ps
        exit 1
    fi
    
    log "Deployment completed successfully"
}

# Health check
health_check() {
    log "Performing health check..."
    
    # Check if application is responding
    if curl -f http://localhost/health > /dev/null 2>&1; then
        log "Application health check passed"
    else
        error "Application health check failed"
        return 1
    fi
    
    # Check database connection
    if docker-compose -f "$DOCKER_COMPOSE_FILE" exec -T postgres pg_isready -U postgres > /dev/null 2>&1; then
        log "Database health check passed"
    else
        error "Database health check failed"
        return 1
    fi
    
    # Check Redis connection
    if docker-compose -f "$DOCKER_COMPOSE_FILE" exec -T redis redis-cli ping > /dev/null 2>&1; then
        log "Redis health check passed"
    else
        error "Redis health check failed"
        return 1
    fi
}

# Rollback function
rollback() {
    log "Rolling back to previous deployment..."
    
    # Stop current deployment
    stop_deployment
    
    # Find latest backup
    LATEST_BACKUP=$(ls -t "$BACKUP_DIR"/*.tar.gz 2>/dev/null | head -1)
    
    if [ -n "$LATEST_BACKUP" ]; then
        log "Restoring from backup: $LATEST_BACKUP"
        
        # Restore application files
        tar -xzf "$LATEST_BACKUP" -C "$DEPLOY_DIR"
        
        # Restart services
        cd "$DEPLOY_DIR"
        docker-compose -f "$DOCKER_COMPOSE_FILE" up -d
        
        log "Rollback completed"
    else
        error "No backup found for rollback"
        exit 1
    fi
}

# Main deployment function
main() {
    log "Starting deployment of $APP_NAME..."
    
    check_root
    check_prerequisites
    create_backup
    stop_deployment
    pull_latest_code
    setup_environment
    deploy
    
    # Wait a bit for services to stabilize
    sleep 10
    
    if health_check; then
        log "Deployment successful! Application is running at http://localhost"
    else
        error "Health check failed, rolling back..."
        rollback
        exit 1
    fi
}

# Parse command line arguments
case "${1:-}" in
    --rollback)
        rollback
        ;;
    --help)
        echo "Usage: $0 [OPTIONS]"
        echo "Options:"
        echo "  --rollback    Rollback to previous deployment"
        echo "  --help        Show this help message"
        echo ""
        echo "Default action: Deploy application"
        ;;
    *)
        main
        ;;
esac

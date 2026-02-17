#!/bin/bash
# Script to fetch free stock images from Pexels for the débarras-luxembourg website
# All images are free to use (Pexels license: https://www.pexels.com/license/)
# No attribution required.

set -e

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
IMG_DIR="$BASE_DIR/public/images"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}=== Fetching stock images for débarras-luxembourg ===${NC}"
echo ""

# Create directories
mkdir -p "$IMG_DIR/hero"
mkdir -p "$IMG_DIR/services"
mkdir -p "$IMG_DIR/debarras"
mkdir -p "$IMG_DIR/cta"
mkdir -p "$IMG_DIR/about"

# Helper function to download from Pexels
download_pexels() {
  local photo_id="$1"
  local output="$2"
  local width="${3:-1280}"
  local url="https://images.pexels.com/photos/${photo_id}/pexels-photo-${photo_id}.jpeg?auto=compress&cs=tinysrgb&w=${width}"

  if [ -f "$output" ]; then
    echo -e "${YELLOW}[SKIP]${NC} $output already exists"
    return
  fi

  echo -e "${GREEN}[DOWNLOAD]${NC} Pexels #${photo_id} → $output (w=${width})"
  curl -sL -o "$output" "$url"

  if [ -f "$output" ] && [ -s "$output" ]; then
    local size=$(du -h "$output" | cut -f1)
    echo -e "  ✓ Done (${size})"
  else
    echo -e "${RED}  ✗ Failed to download${NC}"
    rm -f "$output"
  fi
}

echo "--- Hero ---"
# Pexels 4246119: Empty apartment with packed carton boxes before moving
download_pexels 4246119 "$IMG_DIR/hero/hero-bg.jpg" 1920

echo ""
echo "--- Services ---"
# Pexels 4246091: Unpacked boxes in middle of room
download_pexels 4246091 "$IMG_DIR/services/service-debarras.jpg" 800
# Pexels 7031603: Spacious empty room with white walls
download_pexels 7031603 "$IMG_DIR/services/service-locaux.jpg" 800
# Pexels 4246238: Carton boxes near window in sunny room
download_pexels 4246238 "$IMG_DIR/services/service-evacuation.jpg" 800

echo ""
echo "--- Débarras page ---"
# Pexels 4246267: Couple carrying carton boxes while moving out
download_pexels 4246267 "$IMG_DIR/debarras/debarras-hero.jpg" 1920
# Pexels 7464209: Cardboard Boxes on Wooden Floor (avant)
download_pexels 7464209 "$IMG_DIR/debarras/gallery-avant.jpg" 800
# Pexels 5691493: Empty room with white walls and wooden floor (après)
download_pexels 5691493 "$IMG_DIR/debarras/gallery-apres.jpg" 800
# Pexels 7865621: Empty Interior with White Walls and Wooden Floor
download_pexels 7865621 "$IMG_DIR/debarras/gallery-interieur.jpg" 800

echo ""
echo "--- Contact CTA ---"
# Pexels 7414910: A Family Moving into a New House
download_pexels 7414910 "$IMG_DIR/cta/cta-bg.jpg" 1920

echo ""
echo -e "${GREEN}=== All done! ===${NC}"
echo ""
echo "Images downloaded to: $IMG_DIR"
ls -lhR "$IMG_DIR" | grep -E '\.(jpg|jpeg|png)$'

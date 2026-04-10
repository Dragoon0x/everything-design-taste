#!/bin/bash
set -e

# Everything Design Taste — Installer
# By 0xDragoon | MIT License

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CLAUDE_DIR="$HOME/.claude"
PROFILE="standard"
COMPONENTS=""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_header() {
  echo ""
  echo -e "${BLUE}╔══════════════════════════════════════════╗${NC}"
  echo -e "${BLUE}║  Everything Design Taste — Installer      ║${NC}"
  echo -e "${BLUE}║  By 0xDragoon                            ║${NC}"
  echo -e "${BLUE}╚══════════════════════════════════════════╝${NC}"
  echo ""
}

print_success() { echo -e "${GREEN}  ✓ $1${NC}"; }
print_warning() { echo -e "${YELLOW}  ! $1${NC}"; }
print_error() { echo -e "${RED}  ✗ $1${NC}"; }

usage() {
  echo "Usage: ./install.sh [--profile <minimal|standard|full|product>] [--skills skill1,skill2] [--rules common,react-ui] [--agents agent1,agent2]"
  echo ""
  echo "Profiles:"
  echo "  minimal   — 3 skills, 3 rules, 2 agents"
  echo "  standard  — 8 skills, all common rules, 4 agents (default)"
  echo "  full      — Everything"
  echo "  product   — Product/strategy focus"
  exit 0
}

# Parse args
while [[ $# -gt 0 ]]; do
  case $1 in
    --profile) PROFILE="$2"; shift 2 ;;
    --skills) SKILLS="$2"; shift 2 ;;
    --rules) RULES="$2"; shift 2 ;;
    --agents) AGENTS="$2"; shift 2 ;;
    --help|-h) usage ;;
    *) echo "Unknown option: $1"; usage ;;
  esac
done

print_header

# Ensure directories
mkdir -p "$CLAUDE_DIR/skills"
mkdir -p "$CLAUDE_DIR/rules"
mkdir -p "$CLAUDE_DIR/agents"
mkdir -p "$CLAUDE_DIR/hooks"

# Profile definitions
case $PROFILE in
  minimal)
    SKILL_LIST="anti-slop typography-craft color-systems"
    RULE_LIST="common"
    AGENT_LIST="design-reviewer copy-editor"
    ;;
  standard)
    SKILL_LIST="anti-slop design-system-patterns typography-craft color-systems layout-principles brand-voice responsive-craft motion-principles"
    RULE_LIST="common react-ui"
    AGENT_LIST="design-reviewer copy-editor brand-guardian visual-qa"
    ;;
  full)
    SKILL_LIST=$(ls "$SCRIPT_DIR/skills")
    RULE_LIST="common react-ui figma brand"
    AGENT_LIST=$(ls "$SCRIPT_DIR/agents" | sed 's/.md$//')
    ;;
  product)
    SKILL_LIST="anti-slop product-framing pitch-deck-patterns case-study-writing founder-communication competitive-teardown design-economics"
    RULE_LIST="common"
    AGENT_LIST="product-strategist pitch-architect copy-editor"
    ;;
  *)
    print_error "Unknown profile: $PROFILE"
    exit 1
    ;;
esac

# Override with explicit selections
[[ -n "$SKILLS" ]] && SKILL_LIST=$(echo "$SKILLS" | tr ',' ' ')
[[ -n "$RULES" ]] && RULE_LIST=$(echo "$RULES" | tr ',' ' ')
[[ -n "$AGENTS" ]] && AGENT_LIST=$(echo "$AGENTS" | tr ',' ' ')

echo -e "  Profile: ${BLUE}$PROFILE${NC}"
echo ""

# Install skills
echo "Installing skills..."
for skill in $SKILL_LIST; do
  if [[ -d "$SCRIPT_DIR/skills/$skill" ]]; then
    cp -r "$SCRIPT_DIR/skills/$skill" "$CLAUDE_DIR/skills/"
    print_success "$skill"
  else
    print_warning "Skill not found: $skill"
  fi
done

# Install rules
echo ""
echo "Installing rules..."
for rule_dir in $RULE_LIST; do
  if [[ -d "$SCRIPT_DIR/rules/$rule_dir" ]]; then
    cp -r "$SCRIPT_DIR/rules/$rule_dir" "$CLAUDE_DIR/rules/"
    print_success "rules/$rule_dir"
  else
    print_warning "Rule directory not found: $rule_dir"
  fi
done

# Install agents
echo ""
echo "Installing agents..."
for agent in $AGENT_LIST; do
  agent_file="$agent"
  [[ ! "$agent_file" == *.md ]] && agent_file="$agent.md"
  if [[ -f "$SCRIPT_DIR/agents/$agent_file" ]]; then
    cp "$SCRIPT_DIR/agents/$agent_file" "$CLAUDE_DIR/agents/"
    print_success "$agent"
  else
    print_warning "Agent not found: $agent"
  fi
done

# Install hooks
echo ""
echo "Installing hooks..."
if [[ -f "$SCRIPT_DIR/hooks/hooks.json" ]]; then
  cp "$SCRIPT_DIR/hooks/hooks.json" "$CLAUDE_DIR/hooks/"
  print_success "hooks.json"
fi

# Copy hook scripts
mkdir -p "$CLAUDE_DIR/scripts/hooks"
mkdir -p "$CLAUDE_DIR/scripts/lib"
cp "$SCRIPT_DIR/scripts/hooks/"*.js "$CLAUDE_DIR/scripts/hooks/" 2>/dev/null && print_success "hook scripts" || true
cp "$SCRIPT_DIR/scripts/lib/"*.js "$CLAUDE_DIR/scripts/lib/" 2>/dev/null && print_success "lib utilities" || true

# Summary
echo ""
SKILL_COUNT=$(echo $SKILL_LIST | wc -w | tr -d ' ')
RULE_COUNT=$(echo $RULE_LIST | wc -w | tr -d ' ')
AGENT_COUNT=$(echo $AGENT_LIST | wc -w | tr -d ' ')
echo -e "${GREEN}Installation complete!${NC}"
echo "  Skills: $SKILL_COUNT"
echo "  Rule sets: $RULE_COUNT"
echo "  Agents: $AGENT_COUNT"
echo ""
echo "  Read the guide: docs/the-shortform-guide.md"
echo ""

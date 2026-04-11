---
name: authentication-flow
description: Login, signup, password reset, SSO, MFA, and authentication UX patterns.
triggers: ["login", "signup", "authentication", "password reset", "SSO", "MFA"]
---

# Authentication Flows

## Sign Up
- **Minimum fields:** Email and password (or just email for magic link)
- **Social sign-in** options above the form (Google, GitHub, Apple)
- **Password requirements** shown proactively, not after failed attempt
- **Email verification** via link, not code (less friction)

## Log In
- Email + password as default
- "Remember me" checkbox
- "Forgot password?" link visible near password field
- Show/hide password toggle
- Rate limit failed attempts (show "try again in X seconds")

## Password Reset
1. Enter email → 2. Check email → 3. Set new password → 4. Confirmed
- Don't confirm whether the email exists (security)
- Reset links expire (1 hour typical)
- Invalidate old passwords on reset

## Multi-Factor Authentication
- SMS codes are the minimum (but weakest)
- Authenticator apps are better (TOTP)
- Passkeys/WebAuthn are best (no codes needed)
- Recovery codes: show once, make user save them
- Don't force MFA setup during onboarding (ask after first valuable action)

## Single Sign-On
- Prominent SSO buttons with correct brand colors and logos
- "Continue with Google" not "Sign in with Google" (works for both login and signup)
- Handle account linking (same email, different auth method)

## Session Management
- Show active sessions in settings
- Allow remote logout
- Auto-logout after inactivity (configurable for sensitive apps)
- Extend session silently on activity (no popup interruptions)

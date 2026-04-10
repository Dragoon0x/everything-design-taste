---
name: web3-design-patterns
description: Wallet connection flows, transaction UX, gas fee communication, multichain interfaces, and design patterns specific to decentralized applications.
triggers: ["web3 design", "dapp design", "wallet UX", "blockchain UX", "defi design", "crypto UX"]
---

# Web3 Design Patterns

## Wallet Connection

### The Flow
1. **Prompt:** Don't ask to connect immediately. Show value first.
2. **Selection:** Show supported wallets clearly. Highlight installed wallets.
3. **Connection:** Show pending state. Handle rejection gracefully.
4. **Confirmation:** Show connected address (truncated: 0x1234...5678). Show network.
5. **Persistence:** Remember connection across sessions. Don't re-prompt on every visit.

### Common Mistakes
- Showing 30 wallet options when 3-5 cover 95% of users
- No clear explanation of why connection is needed
- No way to disconnect or switch wallets
- Not handling network mismatches (user on L2, app expects mainnet)

## Transaction UX

### Before Transaction
- Show exactly what will happen in plain language
- Display estimated gas fees in both native token and USD
- Show total cost (amount + gas) prominently
- Warn about high gas conditions
- Allow simulation/preview where possible

### During Transaction
- Show clear pending state with estimated time
- Provide transaction hash as a link to block explorer
- Allow user to continue using the app while waiting
- Handle stuck transactions gracefully

### After Transaction
- Confirm success with specific details (not just "Transaction successful")
- Show what changed (balance before/after, NFT received, position updated)
- Provide receipt/summary they can reference later

## Multichain

### Network Switching
- Show current network clearly at all times
- Auto-detect when user is on wrong network
- Provide one-click network switching
- Show assets per network, not mixed together

### Cross-Chain
- Make bridging feel like one action, even if it's multiple transactions
- Show estimated time for cross-chain operations
- Track progress across chains

## Token Display
- Always show token symbol AND icon
- Display appropriate decimal places (2 for stablecoins, 4-6 for volatile tokens)
- Format large numbers (1.2M not 1,234,567.89)
- Show USD equivalent alongside token amounts
- Handle unknown tokens gracefully (don't just show the address)

## Security UX
- Clear permission explanations for token approvals
- Warning UI for unlimited approvals
- Phishing protection (verify contract addresses)
- Scam token detection and warnings
- Clear revoke/disconnect flows

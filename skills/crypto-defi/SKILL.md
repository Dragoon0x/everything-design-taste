---
name: crypto-defi
description: DeFi interface design, yield farming UX, liquidity pools, governance interfaces, and token swap patterns.
triggers: ["defi design", "yield farming", "liquidity pool", "governance UI", "token swap"]
---

# DeFi Interface Design

## Token Swap
- Input token selector with balance shown
- Output token selector with estimated amount
- Price impact warning (yellow >1%, red >5%)
- Slippage tolerance setting
- Route visualization (which pools/paths)
- Review details before confirmation
- Transaction simulation (preview outcome)

## Liquidity Pools
- Pool pair with logos and names
- TVL (Total Value Locked) displayed
- APR/APY clearly differentiated
- Your position: value, share, earned fees
- Add/Remove liquidity as balanced pair
- Impermanent loss calculator or warning

## Yield Farming
- List of active farms with APR/APY
- Your staked amount and earned rewards
- Harvest/claim button with gas estimate
- Auto-compound option
- Risk indicators (audit status, contract age, TVL stability)

## Governance
- Active proposals list with status and deadline
- Proposal detail: description, discussion, vote count
- Vote: For/Against/Abstain with voting power shown
- Delegation flow
- Voting history
- Quorum progress bar

## Risk Communication
- Smart contract audit status (audited by whom)
- Protocol age and TVL history
- Risk score or rating (simple: Low/Medium/High)
- Insurance/coverage options
- Never hide risks to improve conversion

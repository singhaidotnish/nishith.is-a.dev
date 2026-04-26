---
title: "Selling Time: What I Learned on My First Paper Trade After 1.5 Years"
excerpt: "A Put option is not a bet. It's a promise. And when you sell one, you're selling time and uncertainty — not a stock."
date: 2026-04-26
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: [trading, mental-models]
tags: [options, adhd-trading, bull-put-spread, nifty, sensibull, derivatives, risk-management]
toc: true
toc_label: "Contents"
toc_sticky: true
visible: true
permalink: /bull-put-spread-day1/
---

🧠 Coming Back After 1.5 Years

I stopped trading in September 2024. Not by plan. By exhaustion.

Two positions went wrong. Stocks acquired through option assignments sat in my portfolio bleeding quietly. The monthly income target I had set for myself created pressure that made every decision emotional. I overtraded. I ignored exit rules. I knew the strategies but not the discipline.

So I stopped.

Today — 26 April 2026 — I placed my first paper trade. On a Sunday. With zero real money at stake. On Sensibull Draft Mode.

And somewhere between the nervousness and the guilt and the RSD hitting hard, I finally understood something I had been trading without truly knowing.

---

## 🏗️ What a Put Option Actually Is

A Put is the **right to sell** Nifty at a specific price.

That's it. One sentence. Everything else is built on this.

When you **sell** a Put, you're not selling a stock. You're selling a **promise.**

That promise reads:

> *"If Nifty falls below my strike price by expiry, I will absorb the loss."*

Someone on the other side buys that promise. They pay you for it. That payment is the **premium.**

The exchange acts as middleman — like a mandi. You never meet the buyer. The exchange matches you, holds the money, enforces the promise.

---

## 💰 What the Premium Is Made Of

My trade today:

- **SELL** 28 Apr 23700 PE @ ₹85.45
- **BUY** 28 Apr 23500 PE @ ₹41.90
- **Net premium collected = ₹43.55 per unit**

That ₹85.45 has two components:

| Component | Value | Why |
|-----------|-------|-----|
| Intrinsic Value | ₹0 | Nifty (23897) is above strike (23700) — put has no real value yet |
| Time Value | ₹85.45 | 2 days to expiry — uncertainty has a price |

**The entire premium is time + uncertainty.**

As time passes without Nifty falling — that uncertainty shrinks. The premium shrinks with it. That shrinkage is my profit as a seller.

---

## 📊 The Three Scenarios

### Scenario 1 — Nifty stays above 23700

The buyer paid me for insurance against a crash. The crash didn't come. They don't exercise. Both puts expire worthless. I keep the full ₹43.55.

**Profit = ₹43.55 × 65 = ₹2,830** ✅

> Like a fire insurance company that collected premium and the house never burned.

### Scenario 2 — Nifty falls to 23600

The buyer exercises their right to sell at 23700 when market is at 23600. That's ₹100 better than market — so of course they exercise.

I'm forced to absorb that ₹100 loss. But I already collected ₹43.55 upfront.

**Net loss = (100 - 43.55) × 65 = ₹3,680**

My 23500 PE hedge? Nifty hasn't fallen that far yet — it helps little here.

### Scenario 3 — Nifty crashes below 23500

Maximum pain. The 23700 PE buyer exercises — I take a ₹500 loss per unit.

But I also bought the 23500 PE. I exercise MY right to sell at 23500 when market is at say 23200. That's ₹300 back.

Net loss per unit = 500 - 300 - 43.55 = **₹156.45**

Total max loss = **₹156.45 × 65 = ₹10,217**

And here's the thing — **no matter how far Nifty falls**, my loss cannot exceed ₹10,217. Not ₹10,218. Not more. The second leg caps it permanently.

---

## 🔑 Why Two Legs — Not One, Not Three

**Leg 1 (Sell 23700 PE)** = Collect premium. Make the promise.
But naked selling = unlimited downside. Dangerous.

**Leg 2 (Buy 23500 PE)** = Buy reinsurance on my own promise. Cap the disaster.

Together they create a corridor:

```
Below 23500   →  Max loss    (-₹10,217)
23500–23700   →  Partial loss
Above 23700   →  Max profit  (+₹2,830)
```

One leg without the other is incomplete. Together they define the entire universe of possible outcomes — **before** you enter the trade.

No surprises. No disasters. Just a known range.

---

## 🕐 Time Is the Seller's Friend

Every passing day without drama decays the premium.

Tomorrow maybe ₹60. Day after maybe ₹30. On expiry if Nifty still above 23700 → ₹0.

This decay has a name — **Theta.** That's tomorrow's lesson.

But the core insight is simple:

> **Boring markets = money quietly flowing to the seller.**

The buyer needs something to happen. The seller needs nothing to happen.

---

## 🧠 What I Actually Felt Today

Nervous. Shaky. RSD hitting before I even opened the app.

I named it out loud:
1. Lack of knowledge
2. Guilt from past losses
3. Low motivation — demo doesn't give the same dopamine as live trading

I executed anyway. Both legs. Clean. No partial fills.

And somewhere in the explanation of Scenario 3 — something clicked. Not just intellectually. The kind of click where your body relaxes a little.

> *The nervous version of me is safer than the overconfident version.*

---

## 📌 One Line to Remember

> **Selling a Put = selling time + uncertainty.**
> Every boring day the market does nothing = money in my pocket.

---

*Day 1 of rebuilding. 1.5 year gap. Came back anyway.* 🧠

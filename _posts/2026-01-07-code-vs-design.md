---
title: "Code vs Design: The Spaghetti Trap"
excerpt: "Writing code that works is easy. Writing code that doesn't blow up at 2am is architecture. Here's the difference."
date: 2026-03-17
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: [programming, mental-models]
tags: [python, design-patterns, architecture, trading-bots, systems-thinking]
toc: true
toc_label: "Contents"
toc_sticky: true
visible: true
permalink: /code-vs-design/
---
🍝 The Spaghetti Way
Most code starts like this — logic mixed with execution, no guardrails:
def buy_stock(symbol, amount):
    # What if amount is > account_balance?
    # What if we already bought this 100 times this second?
    api.execute_order(symbol, amount, "BUY")
    print(f"Bought {amount} of {symbol}")
It works. Until it doesn't.
No checks. No limits. One bad input and you've blown your account.
🏗️ The Architected Way
Same goal — but logic is separated from execution via design patterns:
class RiskManager:
    _instance = None  # Singleton Pattern

    def check_risk(self, amount, balance):
        if amount > balance:
            raise Exception("Risk Alert: Insufficient Funds")
        if self.daily_trade_count > 50:
            raise Exception("Risk Alert: Overtrading Detected")
        return True

class TradingBot:
    def __init__(self, budget):
        self.risk_manager = RiskManager()  # Dependency Injection
        self.balance = budget

    def execute_trade(self, symbol, amount):
        # Code doesn't just "run" — it asks for permission first
        try:
            if self.risk_manager.check_risk(amount, self.balance):
                api.execute_order(symbol, amount, "BUY")
                self.balance -= amount
        except Exception as e:
            print(f"Trade Blocked: {e}")
The code is longer. The system is safer.
🧠 The Mental Model
Spaghetti Code
Architected Code
Logic mixed with execution
Logic separated from execution
Works until it doesn't
Fails loudly and safely
Hard to debug
Easy to isolate problems
One function does everything
Each class has one job
💡 Key Insight
Code asks "does this run?"
Design asks "what happens when this goes wrong?"
The difference between a script and a system is guardrails.
Not medical advice. Not financial advice. Definitely programming advice.

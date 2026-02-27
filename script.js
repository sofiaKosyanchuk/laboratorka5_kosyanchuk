class Bank {
    constructor() {
        this.accounts = {};
    }

    createAccount(accountId, initialBalance = 0) {
        if (this.accounts[accountId]) {
            console.log("Account already exists");
            return false;
        }
        this.accounts[accountId] = { balance: initialBalance };
        console.log(`Account ${accountId} created with balance: $${initialBalance}`);
        return true;
    }

    deposit(accountId, amount) {
        if (!this.accounts[accountId]) {
            console.log("Account not found");
            return false;
        }
        if (amount <= 0) {
            console.log("Deposit amount must be positive");
            return false;
        }
        this.accounts[accountId].balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.accounts[accountId].balance}`);
        return true;
    }

    withdraw(accountId, amount) {
        if (!this.accounts[accountId]) {
            console.log("Account not found");
            return false;
        }
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive");
            return false;
        }
        if (this.accounts[accountId].balance < amount) {
            console.log("Insufficient funds");
            return false;
        }
        this.accounts[accountId].balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.accounts[accountId].balance}`);
        return true;
    }

    getBalance(accountId) {
        if (!this.accounts[accountId]) {
            console.log("Account not found");
            return null;
        }
        return this.accounts[accountId].balance;
    }
}

// Example usage
const bank = new Bank();
bank.createAccount("ACC001", 1000);
bank.deposit("ACC001", 500);
bank.withdraw("ACC001", 200);
console.log("Balance:", bank.getBalance("ACC001"));
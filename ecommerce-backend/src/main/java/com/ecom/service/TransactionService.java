package com.ecom.service;

import com.ecom.entity.Order;
import com.ecom.entity.Seller;
import com.ecom.entity.Transaction;

import java.util.List;

public interface TransactionService {
    Transaction createTransaction(Order order);

    List<Transaction> getTransactionsBySellerId(Seller  seller);
    List<Transaction> getAllTransactions();
}

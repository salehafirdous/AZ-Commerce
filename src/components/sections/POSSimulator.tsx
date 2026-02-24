"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Receipt, ShoppingCart, Search } from "lucide-react";

const POSSimulator = () => {
    const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);
    const [search, setSearch] = useState("");
    const [showReceipt, setShowReceipt] = useState(false);

    const inventory = [
        { id: 1, name: "Fresh Organic Milk", price: 4.50 },
        { id: 2, name: "Artisan Sourdough", price: 6.00 },
        { id: 3, name: "Gourmet Coffee Beans", price: 18.00 },
        { id: 4, name: "Premium Olive Oil", price: 24.00 },
        { id: 5, name: "Honey Glazed Almonds", price: 12.50 },
        { id: 6, name: "Aged Cheddar Cheese", price: 9.00 },
    ];

    const addToCart = (product: typeof inventory[0]) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) =>
            prev.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.qty > 1) acc.push({ ...item, qty: item.qty - 1 });
                } else {
                    acc.push(item);
                }
                return acc;
            }, [] as typeof cart)
        );
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Interactive POS Simulator</h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Experience the speed and simplicity of our billing system. Try generating a sample order below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Inventory Area */}
                    <div className="lg:col-span-7 bg-slate-800/50 p-8 rounded-[2.5rem] border border-slate-700/50">
                        <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-2xl mb-8 border border-white/5">
                            <Search className="text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search products or scan barcode..."
                                className="bg-transparent border-none outline-none w-full text-lg"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {inventory.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => addToCart(item)}
                                    className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:bg-blue-600 hover:border-blue-400 transition-all text-left group"
                                >
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                        {item.id === 1 ? "🥛" : item.id === 2 ? "🍞" : item.id === 3 ? "☕" : item.id === 4 ? "🫒" : item.id === 5 ? "🥜" : "🧀"}
                                    </div>
                                    <div className="font-bold mb-1 truncate">{item.name}</div>
                                    <div className="text-blue-400 group-hover:text-white font-black">${item.price.toFixed(2)}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cart Area */}
                    <div className="lg:col-span-5 bg-white text-slate-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col min-h-[600px]">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-black">Current Order</h3>
                            <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold">
                                Store #001
                            </div>
                        </div>

                        <div className="flex-grow space-y-4 mb-8">
                            <AnimatePresence mode="popLayout">
                                {cart.length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-slate-400 py-12"
                                    >
                                        <ShoppingCart size={48} className="mb-4 opacity-20" />
                                        <p className="font-medium text-lg text-center">Your cart is empty.<br />Add items to begin billing.</p>
                                    </motion.div>
                                ) : (
                                    cart.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl"
                                        >
                                            <div>
                                                <div className="font-bold text-slate-800">{item.name}</div>
                                                <div className="text-sm text-slate-500">${item.price.toFixed(2)} x {item.qty}</div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="font-bold w-4 text-center">{item.qty}</span>
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:text-blue-500 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="border-t-2 border-dashed border-slate-100 pt-6">
                            <div className="flex justify-between text-slate-500 mb-2">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-slate-500 mb-4">
                                <span>Tax (10%)</span>
                                <span>${(total * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center bg-slate-900 text-white p-6 rounded-2xl mb-6">
                                <span className="text-xl font-bold">Total Amount</span>
                                <span className="text-3xl font-black">${(total * 1.1).toFixed(2)}</span>
                            </div>

                            <button
                                disabled={cart.length === 0}
                                onClick={() => setShowReceipt(true)}
                                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
                            >
                                Complete Transaction
                                <Receipt size={24} className="group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>

                        {/* Receipt Modal Overlay */}
                        <AnimatePresence>
                            {showReceipt && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 p-8 flex flex-col items-center justify-center text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0.9, y: 20 }}
                                        animate={{ scale: 1, y: 0 }}
                                        className="w-full max-w-sm bg-white shadow-2xl rounded-3xl p-8 border border-slate-100"
                                    >
                                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <Receipt size={32} />
                                            </motion.div>
                                        </div>
                                        <h4 className="text-2xl font-black mb-2">Order Success!</h4>
                                        <p className="text-slate-500 mb-6">Receipt #AZ-99827 has been generated and emailed to the customer.</p>
                                        <div className="text-slate-900 font-black text-3xl mb-8">${(total * 1.1).toFixed(2)}</div>
                                        <button
                                            onClick={() => {
                                                setCart([]);
                                                setShowReceipt(false);
                                            }}
                                            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold"
                                        >
                                            New Sale
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default POSSimulator;

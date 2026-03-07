"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Barcode, Trash2, CreditCard, Banknote, CheckCircle2, Search } from "lucide-react";

const products = [
    { id: 1, name: "Premium Coffee", price: 12.50, category: "Beverage" },
    { id: 2, name: "Organic Bread", price: 8.00, category: "Bakery" },
    { id: 3, name: "Silk Shirt", price: 85.00, category: "Fashion" },
    { id: 4, name: "Bluetooth Buds", price: 120.00, category: "Tech" },
    { id: 5, name: "Detox Tea", price: 24.50, category: "Wellness" },
    { id: 6, name: "Gourmet Cheese", price: 32.00, category: "Dairy" }
];

const POSDemoV2 = () => {
    const [cart, setCart] = useState<any[]>([]);
    const [showReceipt, setShowReceipt] = useState(false);

    const addToCart = (product: any) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <section className="py-60 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-black uppercase tracking-[.4em] text-xs mb-8"
                    >
                        Terminal Operations
                    </motion.div>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase mb-20">
                        Interactive <br />
                        <span className="text-blue-600 italic">POS Demo.</span>
                    </h2>
                </div>

                <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-800 flex flex-col lg:flex-row h-[800px]">

                    {/* Catalog Side */}
                    <div className="w-full lg:w-2/3 p-12 border-r border-slate-800 flex flex-col">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-6 bg-white/5 px-8 py-4 rounded-2xl w-full max-w-md border border-white/5">
                                <Search size={20} className="text-white/20" />
                                <div className="text-white/40 text-sm font-medium">Search for products...</div>
                            </div>
                            <div className="hidden md:flex gap-4">
                                {["All", "Fashion", "Tech", "Food"].map(c => (
                                    <button key={c} className="px-6 py-3 bg-white/5 text-white/40 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors">{c}</button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto pr-4 scrollbar-hide">
                            {products.map((p) => (
                                <motion.div
                                    key={p.id}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => addToCart(p)}
                                    className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-blue-600 transition-all cursor-pointer group"
                                >
                                    <div className="text-[10px] font-black text-blue-400 group-hover:text-blue-100 uppercase tracking-widest mb-4">{p.category}</div>
                                    <div className="text-lg font-black text-white mb-2">{p.name}</div>
                                    <div className="text-xl font-black text-white/40 group-hover:text-white">${p.price.toFixed(2)}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Cart Side */}
                    <div className="w-full lg:w-1/3 bg-black/40 p-12 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-12">
                            <h4 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                <ShoppingCart size={24} /> Current Order
                            </h4>
                            <div className="text-blue-500 font-black text-xs uppercase tracking-widest">#{Math.floor(Math.random() * 9000) + 1000}</div>
                        </div>

                        <div className="flex-grow space-y-6 overflow-y-auto pr-2 mb-10">
                            <AnimatePresence>
                                {cart.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5"
                                    >
                                        <div>
                                            <div className="text-sm font-black text-white">{item.name}</div>
                                            <div className="text-[10px] text-white/40 font-bold uppercase mt-1">${item.price.toFixed(2)} x {item.qty}</div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-sm font-black text-white">${(item.price * item.qty).toFixed(2)}</div>
                                            <button onClick={() => setCart(cart.filter(c => c.id !== item.id))} className="text-red-500 opacity-40 hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {cart.length === 0 && <div className="h-full flex flex-col items-center justify-center text-white/10 gap-4 opacity-50"><Barcode size={48} /><div className="font-black text-xs uppercase tracking-[.3em]">Ready for Scan</div></div>}
                        </div>

                        <div className="pt-10 border-t border-white/5 space-y-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-black text-white/40 uppercase tracking-widest">Total Amount</div>
                                <div className="text-4xl font-black text-white tracking-tighter">${total.toFixed(2)}</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => setShowReceipt(true)} className="py-6 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[.2em] hover:bg-blue-600 hover:text-white transition-all">Cash</button>
                                <button onClick={() => setShowReceipt(true)} className="py-6 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[.2em] hover:bg-blue-500 transition-all flex items-center justify-center gap-2"><CreditCard size={16} /> Card</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Receipt Overlay */}
                <AnimatePresence>
                    {showReceipt && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                className="bg-white w-full max-w-sm rounded-[3rem] p-12 text-black"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Payment Successful</h3>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-10">Order #AZ{Math.floor(Math.random() * 10000)}</p>

                                    <div className="w-full space-y-4 mb-12 pt-8 border-t border-dashed border-slate-200">
                                        {cart.map(item => (
                                            <div key={item.id} className="flex justify-between text-xs font-bold">
                                                <span className="text-slate-500">{item.name} x {item.qty}</span>
                                                <span className="text-slate-900">${(item.price * item.qty).toFixed(2)}</span>
                                            </div>
                                        ))}
                                        <div className="pt-4 flex justify-between font-black text-lg border-t border-slate-900">
                                            <span>TOTAL</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => { setShowReceipt(false); setCart([]); }}
                                        className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[.2em] hover:bg-blue-600 transition-all shadow-xl"
                                    >
                                        Next Transaction
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default POSDemoV2;

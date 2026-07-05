import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Clock } from "lucide-react";
import { formatPrice } from "@/data/products";

interface PromoMessage {
    id: string;
    text: string;
    highlight: string;
    icon: string;
}

const PromoToast = () => {
    const [messages, setMessages] = useState<PromoMessage[]>([]);

    const addMessage = useCallback((msg: PromoMessage) => {
        setMessages([msg]);

        // Auto-dismiss after 6 seconds
        setTimeout(() => {
            setMessages((prev) => prev.filter((m) => m.id !== msg.id));
        }, 6000);
    }, []);

    const removeMessage = useCallback((id: string) => {
        setMessages((prev) => prev.filter((m) => m.id !== id));
    }, []);

    // Expose addMessage globally so CartContext can trigger it
    useEffect(() => {
        (window as any).__showPromo = addMessage;
        return () => {
            delete (window as any).__showPromo;
        };
    }, [addMessage]);

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 w-[90%] max-w-md pointer-events-none">
            <AnimatePresence>
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: -40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="pointer-events-auto relative overflow-hidden rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/20"
                    >
                        {/* Animated gradient border effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse" />

                        <div className="relative p-4">
                            <button
                                onClick={() => removeMessage(msg.id)}
                                className="absolute top-2 right-2 p-1 rounded-full hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>

                            <div className="flex items-start gap-3 pr-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                                    <span className="text-lg">{msg.icon}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-[10px] font-body font-bold text-primary uppercase tracking-wider">
                                            Promoción Temporal
                                        </span>
                                        <Clock className="w-3 h-3 text-primary/60" />
                                    </div>
                                    <p className="text-sm font-body text-foreground leading-snug">
                                        {msg.text}{" "}
                                        <span className="font-bold text-primary">{msg.highlight}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Progress bar for auto-dismiss */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-gold-light"
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 6, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default PromoToast;

// Helper to trigger promo from anywhere
export const showPromo = (msg: PromoMessage) => {
    const fn = (window as any).__showPromo;
    if (fn) fn(msg);
};

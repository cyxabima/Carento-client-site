import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function WalletCard({ wallet, amount, setAmount, walletLoading, handleAddAmount}) {
    
    return (
        <Card>
            <CardContent className="p-4 space-y-2">
                <h2 className="text-xl font-bold">Wallet Balance: Rs. {wallet?.current_balance} Credits</h2>
                <div className="flex space-x-2">
                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Add amount"
                    />
                    <Button onClick={handleAddAmount} disabled={walletLoading}>
                        {walletLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Add to Wallet"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}



export default WalletCard
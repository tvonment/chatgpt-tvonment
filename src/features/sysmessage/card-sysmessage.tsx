import React from 'react';
import { Card } from "@/components/ui/card";

interface Props {
    key: number;
    title: string;
    text: string;
}

export const CardSysMessage: React.FC<Props> = async (props) => {
    return (
        <Card className="h-full flex overflow-y-auto m-4">
            <div className="container m-2">
                <div>
                    <h2 className="text-l font-bold">{props.title}</h2>
                    <p className="text-muted-foreground">{props.text}</p>
                </div>
            </div>
        </Card >
    );
}
import React from 'react';
import { Card } from "@/components/ui/card";
import { CardSysMessage } from './card-sysmessage';

interface Props { }

export const SysMessage: React.FC<Props> = async (props) => {
    const data = [
        { title: 'Yoda', text: 'coming soon...' },
        { title: 'To a kid', text: 'coming soon...' },
        // Add more items as needed
    ];

    return (
        <Card className="h-full flex pt-8 overflow-y-auto">
            <div className="container mx-auto max-w-5xl space-y-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Bot Profiles</h2>
                    <p className="text-muted-foreground">Select a Bot Profile. The Answers will adapt to the Profile</p>
                    <ul>
                        {data.map((item, index) => (
                            <CardSysMessage key={index} title={item.title} text={item.text} />
                        ))}
                    </ul>
                </div>
            </div>
        </Card >
    );
}
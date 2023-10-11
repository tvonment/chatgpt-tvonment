import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge, Baby, Target } from "lucide-react";
import { FC } from "react";
import { ChatProfile } from "../chat-services/models";

interface Prop {
  disable: boolean;
  chatProfile: ChatProfile;
  onChatProfileChange?: (value: ChatProfile) => void;
}

export const ChatProfileSelector: FC<Prop> = (props) => {
  return (
    <Tabs
      defaultValue={props.chatProfile}
      onValueChange={(value) =>
        props.onChatProfileChange
          ? props.onChatProfileChange(value as ChatProfile)
          : null
      }
    >
      <TabsList className="grid w-full grid-cols-3 h-12 items-stretch">
        <TabsTrigger
          value="default"
          className="flex gap-2"
          disabled={props.disable}
        >
          <Badge size={20} /> Default
        </TabsTrigger>
        <TabsTrigger
          value="yoda"
          className="flex gap-2"
          disabled={props.disable}
        >
          <Target size={20} /> As Yoda
        </TabsTrigger>
        <TabsTrigger
          value="kid"
          className="flex gap-2"
          disabled={props.disable}
        >
          <Baby size={20} /> For a kid
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

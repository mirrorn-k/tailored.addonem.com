import SpeechBubble, {
  Align,
} from "@/packages/ui/components/chat-scenario/ChatBubble";
import * as BubbleOptions from "@/packages/ui/components/chat-scenario/Options";

type Props = {
  src: string;
  name: string;
  message?: string;
  align?: Align;
  children?: React.ReactNode;
};

const Main = ({
  src = "/tmp/キングダム大沢.jpeg",
  name = "addonem　木本",
  message = "",
  align = "left",
  children = null,
}: Props) => {
  return (
    <SpeechBubble
      imageSrc={src}
      name={name}
      message={message}
      align={align}
      shape="rounded"
      imageWidth={128}
      imageHeight={128}
    >
      {children}
    </SpeechBubble>
  );
};

export default Main;

type choice = Props & {
  options: string[];
  onSelect: (arg0: number) => void;
  columns?: number;
};

export const Choice = ({
  name,
  message,
  src,
  align,
  options,
  onSelect,
  columns = 1,
}: choice) => {
  return (
    <Main name={name} message={message} src={src} align={align}>
      <BubbleOptions.Choice
        options={options}
        columns={columns}
        onSelect={onSelect}
      />
    </Main>
  );
};

type selectProps = Props & {
  options: string[];
  onSelect: (arg0: string[]) => void;
  columns?: number;
};

export const Select = ({
  name,
  message,
  src,
  align,
  options,
  onSelect,
  columns = 1,
}: selectProps) => {
  return (
    <Main name={name} message={message} src={src} align={align}>
      <BubbleOptions.Select
        options={options}
        columns={columns}
        onSelect={onSelect}
      />
    </Main>
  );
};
